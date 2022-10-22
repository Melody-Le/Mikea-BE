"use strict";
const createSubCat = require("../data/subCategories.ts");
module.exports = {
    async up(queryInterface, Sequelize) {
        console.log("=============> done category");
        const subCatList = await createSubCat();
        console.log("=============> done subCatList");
        await queryInterface.bulkInsert("categories", subCatList, {});
    },
    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("categories", null, {});
    },
};
