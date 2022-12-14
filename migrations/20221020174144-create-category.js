"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("categories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      categoryLabel: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      categorySlug: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      parentCategoryId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "categories",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      categoryImg: {
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
    await queryInterface.dropTable("categories");
  },
};
