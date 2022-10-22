"use strict";
// const categoryList = require("../dist/data/categories");
const createSubCat = require("../dist/data/subCategories");
// const createSubCat = require("../data/subCategories.ts");

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
    // await queryInterface.bulkInsert("categories", categoryList, {});
    console.log("=============> done category");
    const subCatList = await createSubCat();
    console.log("=============> done subCatList");
    await queryInterface.bulkInsert("categories", subCatList, {});
    // return queryInterface.bulkInsert("categories", categoryList);
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
