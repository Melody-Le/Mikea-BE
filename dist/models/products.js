"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_slugify_1 = __importDefault(require("sequelize-slugify"));
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
    sequelize_slugify_1.default.slugifyModel(Product, {
        source: ["productName"],
    });
    return Product;
};
