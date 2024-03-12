"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("orderItems", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            orderId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "orders",
                    key: "id",
                },
                onDelete: "CASCADE",
            },
            variantId: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            productName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            variantDescription: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            variantImage: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            price: {
                type: Sequelize.DECIMAL,
                allowNull: false,
            },
            qty: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable("orderItems");
    },
};
