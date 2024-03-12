"use strict";
const variantList = require("../dist/data/variants");
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("variants", variantList, {});
    },
    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("variants", null, {});
    },
};
