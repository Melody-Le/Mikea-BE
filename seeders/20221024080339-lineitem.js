"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("lineItems", [
      {
        id: 1,
        cartId: 1,
        variantId: "1cStR4zmynLHqUrA",
        qty: 2,
      },
      {
        id: 2,
        cartId: 1,
        variantId: "fbDlurdetEvqyXXH",
        qty: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("lineItems", null, {});
  },
};
