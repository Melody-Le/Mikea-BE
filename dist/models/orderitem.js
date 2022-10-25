"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class OrderItem extends sequelize_1.Model {
        static associate(models) {
            OrderItem.belongsTo(models.order);
        }
    }
    OrderItem.init({
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        variantId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        variantDescription: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        variantImage: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "orderItem",
    });
    return OrderItem;
};
