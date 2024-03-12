"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("lineItems", [
            {
                id: 1,
                cartId: 1,
                variantId: "9WMIi4TktPWI7HKd",
                qty: 2,
            },
            {
                id: 2,
                cartId: 1,
                variantId: "WstmEpN2Taj1K7Qq",
                qty: 2,
            },
        ]);
    },
    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("lineItems", null, {});
    },
};
