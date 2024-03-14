"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("lineItems", [
      {
        id: 1,
        cartId: 1,
        variantId: "1Li8tcOQAsYAhweJ",
        qty: 2,
      },
      {
        id: 2,
        cartId: 1,
        variantId: "1X6gmOBx9gVmh34t",
        qty: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("lineItems", null, {});
  },
};
