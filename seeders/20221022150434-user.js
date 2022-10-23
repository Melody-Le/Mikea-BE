"use strict";
const createUser = require("../dist/data/users");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userList = await createUser();
    await queryInterface.bulkInsert("users", userList, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
