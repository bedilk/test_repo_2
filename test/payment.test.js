"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const { createPayment } = require("../src/payment");

test("createPayment returns a payment id", async () => {
  assert.equal(await createPayment(500), "pay_500_usd");
});
