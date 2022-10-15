"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.changeColumn("Category", "categoryLabel", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    queryInterface.addColumn("Category", "parentCategoryId", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "Category",
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn("Category", "categoryLabel", {
      type: DataTypes.STRING,
    });
  },
};
