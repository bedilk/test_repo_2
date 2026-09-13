"use strict";

const Stripe = require("stripe");
const stripe = new Stripe("sk_test_fixture");

// Intentional legacy call site for the Payment Methods migration fixture.
async function createSource() {
  const source = await stripe.sources.create({ type: "card" });
  return source.id;
}

module.exports = { createSource };
