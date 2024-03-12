"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../data/users");
module.exports = {
    async up(queryInterface, Sequelize) {
        const userList = await (0, users_1.createUser)();
        await queryInterface.bulkInsert("users", userList, {});
    },
    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("users", null, {});
    },
};
