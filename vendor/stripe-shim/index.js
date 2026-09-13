"use strict";

class Stripe {
  constructor() {
    const create = async ({ amount, currency }) => ({ id: `pay_${amount}_${currency}` });
    this.charges = { create };
    this.paymentIntents = { create };
    this.sources = { create: async () => ({ id: "pm_card" }) };
    this.paymentMethods = { create: async () => ({ id: "pm_card" }) };
  }
}

module.exports = Stripe;
