"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends sequelize_1.Model {
        static associate(models) {
        }
    }
    Product.init({
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
            type: DataTypes.STRING,
            allowNull: false,
        },
        productImages: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        room: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Product",
    });
    return Product;
};
