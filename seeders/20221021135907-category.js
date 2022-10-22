"use strict";
const categoryList = require("../dist/data/categories");
const subCategoryList = require("../dist/data/subCategories");

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("categories", categoryList, {});
    console.log("=============> done category");
    await queryInterface.bulkInsert("categories", subCategoryList, {});
    console.log("=============> done subCatList");
    return queryInterface.bulkInsert("categories", categoryList);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("categories", null, {});
  },
};
