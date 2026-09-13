"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const { createSource } = require("../src/source");

test("createSource returns a payment id", async () => {
  assert.equal(await createSource(), "pm_card");
});
