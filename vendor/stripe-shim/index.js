"use strict";

class Stripe {
  constructor() {
    const create = async ({ amount, currency }) => ({ id: `pay_${amount}_${currency}` });
    this.charges = { create };
    this.paymentIntents = { create };
  }
}

module.exports = Stripe;
