import { test } from "node:test";
import assert from "node:assert/strict";
import { checkSocket, sockets } from "../lib/compatibility";

test("every supported socket pair reports a match only for equal sockets", () => {
  for (const cpu of sockets) for (const board of sockets) {
    assert.equal(checkSocket(cpu, board).state, cpu === board ? "match" : "mismatch");
  }
});
test("missing selections and unknown catalog values cannot report compatibility", () => {
  assert.equal(checkSocket("", "AM5").state, "incomplete");
  assert.equal(checkSocket("AM5", "").state, "incomplete");
  assert.equal(checkSocket("fake", "fake").state, "unknown");
  assert.match(checkSocket("AM5", "AM5").message, /Other compatibility checks/);
});
