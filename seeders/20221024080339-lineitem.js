"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("lineItems", [
      {
        id: 1,
        cartId: 1,
        variantId: "CY26gaHPC4yjbQsT",
        qty: 2,
      },
      {
        id: 2,
        cartId: 1,
        variantId: "b9b2eC3jYxyZnHCm",
        qty: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("lineItems", null, {});
  },
};
