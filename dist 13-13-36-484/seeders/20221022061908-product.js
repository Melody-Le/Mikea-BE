"use strict";
const productList = require("../dist/data/products");
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("products", productList, {});
    },
    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("products", null, {});
    },
};
