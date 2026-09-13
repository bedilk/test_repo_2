"use strict";

const Stripe = require("stripe");

module.exports = { stripe: new Stripe("sk_test_fixture") };
