import { test, afterEach } from "node:test";
import assert from "node:assert/strict";
import crypto from "node:crypto";
import { NextRequest } from "next/server";
import { getLiveStatus, setLiveStatus, verifyWebhookAuth, verifySessionToken, createSignedSessionToken, SESSION_MAX_AGE } from "../lib/status";
const originalFetch = globalThis.fetch;
const originalEnv = { ...process.env };
afterEach(() => { globalThis.fetch = originalFetch; process.env = { ...originalEnv }; });
function signed(timestamp: number) {
  const text = String(timestamp);
  return `${text}.${crypto.createHmac("sha256", "test-only-secret").update(text).digest("hex")}`;
}
test("sessions accept valid signatures and reject tampering, expired and future tokens", () => {
  process.env.SESSION_SECRET = "test-only-secret";
  const token = createSignedSessionToken();
  assert.equal(verifySessionToken(token), true);
  assert.equal(verifySessionToken(token + "x"), false);
  assert.equal(verifySessionToken(signed(Date.now() - SESSION_MAX_AGE * 1000 - 1)), false);
  assert.equal(verifySessionToken(signed(Date.now() + 60_000)), false);
  assert.equal(verifySessionToken("nonsense"), false);
  assert.equal(verifySessionToken(undefined), false);
});
test("authentication fails closed without configured secrets", () => {
  delete process.env.ADMIN_PASSWORD; delete process.env.SESSION_SECRET; delete process.env.AUTO_STATUS_SECRET;
  assert.equal(verifySessionToken(signed(Date.now())), false);
  assert.throws(createSignedSessionToken);
  assert.equal(verifyWebhookAuth(new NextRequest("http://localhost/api/status/webhook?secret=nawab-dev-webhook-secret")), false);
});
test("status reads hide expired values even if storage returns one", async () => {
  process.env.UPSTASH_REDIS_REST_URL = "https://storage.test";
  process.env.UPSTASH_REDIS_REST_TOKEN = "test-token";
  const now = Date.now();
  let item = { text: "Building", updatedAt: now - 1000, expiresAt: now + 60_000 };
  globalThis.fetch = async () => Response.json({ result: JSON.stringify(item) });
  assert.equal((await getLiveStatus())?.text, "Building");
  item = { ...item, expiresAt: now - 1 };
  assert.equal(await getLiveStatus(), null);
  globalThis.fetch = async () => { throw new Error("storage offline"); };
  assert.equal(await getLiveStatus(), null);
});
test("status writes use native expiry and reject invalid lifetimes", async () => {
  process.env.UPSTASH_REDIS_REST_URL = "https://storage.test";
  process.env.UPSTASH_REDIS_REST_TOKEN = "test-token";
  let body: unknown;
  globalThis.fetch = async (_url, init) => { body = JSON.parse(String(init?.body)); return Response.json({ result: "OK" }); };
  assert.equal(await setLiveStatus("Building", 60), true);
  assert.deepEqual((body as unknown[]).slice(3), ["EX", 60]);
  assert.equal(await setLiveStatus("Building", -1), false);
  assert.equal(await setLiveStatus("Building", 1.5), false);
  assert.equal(await setLiveStatus("Building", 100000), false);
  assert.equal(await setLiveStatus(" "), false);
});
