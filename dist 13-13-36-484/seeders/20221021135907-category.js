"use strict";
const categoryList = require("../dist/data/categories");
const subCategoryList = require("../dist/data/subCategories");
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("categories", categoryList, {});
        await queryInterface.bulkInsert("categories", subCategoryList, {});
    },
    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("categories", null, {});
    },
};
