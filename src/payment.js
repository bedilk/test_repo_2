"use strict";

const Stripe = require("stripe");
const stripe = new Stripe("sk_test_fixture");

// Intentional legacy call site: use the change file in changes/ to migrate it.
async function createPayment(amount) {
  const charge = await stripe.charges.create({ amount, currency: "usd" });
  return charge.id;
}

module.exports = { createPayment };
