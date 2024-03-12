"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("carts", [
            {
                id: 1,
                userId: 1,
            },
        ]);
    },
    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("carts", null, {});
    },
};
