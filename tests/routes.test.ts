import { test, afterEach } from "node:test";
import assert from "node:assert/strict";
import { NextRequest } from "next/server";
import { POST as login } from "../app/api/admin/login/route";
import { POST as updateStatus } from "../app/api/admin/status/route";
import { POST as webhook } from "../app/api/status/webhook/route";
import { POST as contact } from "../app/api/contact/route";
const env = { ...process.env };
const originalFetch = globalThis.fetch;
afterEach(() => { process.env = { ...env }; globalThis.fetch = originalFetch; });
function req(path: string, body: unknown, headers = {}) {
  return new NextRequest(`http://localhost${path}`, { method: "POST", headers: { "content-type": "application/json", ...headers }, body: JSON.stringify(body) });
}
test("admin rejects wrong passwords and unauthenticated writes", async () => {
  process.env.ADMIN_PASSWORD = "test-only-password";
  process.env.SESSION_SECRET = "test-only-secret";
  assert.equal((await login(req("/api/admin/login", { password: "incorrect" }))).status, 401);
  assert.equal((await updateStatus(req("/api/admin/status", { text: "Unauthorized change" }))).status, 401);
});
test("a valid local login issues a signed HttpOnly cookie", async () => {
  process.env.ADMIN_PASSWORD = "test-only-password";
  process.env.SESSION_SECRET = "test-only-secret";
  const response = await login(req("/api/admin/login", { password: "test-only-password" }));
  assert.equal(response.status, 200);
  assert.match(response.headers.get("set-cookie") ?? "", /nawab_admin_session=/);
  assert.match(response.headers.get("set-cookie") ?? "", /HttpOnly/i);
});
test("webhook persistence failure is reported, not success", async () => {
  process.env.AUTO_STATUS_SECRET = "test-only-webhook";
  process.env.UPSTASH_REDIS_REST_URL = "https://storage.test";
  process.env.UPSTASH_REDIS_REST_TOKEN = "test-token";
  globalThis.fetch = async (_url, init) => {
    const command = init?.body ? JSON.parse(String(init.body)) : [];
    return command[0] === "INCR" || command[0] === "EXPIRE"
      ? Response.json({ result: 1 })
      : new Response("Storage unavailable", { status: 503 });
  };
  const response = await webhook(req("/api/status/webhook", { text: "Building" }, { authorization: "Bearer test-only-webhook" }));
  assert.equal(response.status, 503);
  assert.equal((await response.json()).success, undefined);
});
test("contact rejects invalid messages before delivery", async () => {
  assert.equal((await contact(req("/api/contact", { name: "Visitor", email: "invalid", message: "Hello there" }))).status, 400);
});
test("missing email configuration never produces a sent confirmation", async () => {
  delete process.env.RESEND_API_KEY; delete process.env.GMAIL_APP_PASSWORD; delete process.env.CONTACT_WEBHOOK_URL;
  const response = await contact(req("/api/contact", { name: "Test Visitor", email: "visitor@example.test", message: "This is a local test message." }));
  assert.equal(response.status, 503);
  assert.equal((await response.json()).success, false);
});
