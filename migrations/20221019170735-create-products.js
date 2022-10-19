"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      productSlug: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      productDescription: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      productImages: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      room: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
