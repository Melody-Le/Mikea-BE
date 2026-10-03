"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const [variants] = await queryInterface.sequelize.query(
      `SELECT id FROM "variants" ORDER BY "productId" LIMIT 2`,
    );

    await queryInterface.bulkInsert("lineItems", [
      {
        id: 1,
        cartId: 1,
        variantId: variants[0].id,
        qty: 2,
      },
      {
        id: 2,
        cartId: 1,
        variantId: variants[1].id,
        qty: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("lineItems", null, {});
  },
};
