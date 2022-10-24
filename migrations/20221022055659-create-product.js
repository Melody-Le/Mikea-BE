"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
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
          model: "categories",
          key: "id",
        },
        onDelete: "CASCADE",
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
        type: Sequelize.TEXT,
        allowNull: false,
      },
      productImages: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      room: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
