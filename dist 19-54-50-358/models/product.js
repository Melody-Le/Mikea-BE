"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends sequelize_1.Model {
        static associate(models) {
            Product.belongsTo(models.category);
            Product.hasMany(models.variant);
        }
    }
    Product.init({
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        productSlug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        productDescription: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        productImages: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        room: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "product",
    });
    return Product;
};
