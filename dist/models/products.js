"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_slugify_1 = __importDefault(require("sequelize-slugify"));
module.exports = (sequelize, DataTypes) => {
    class Products extends sequelize_1.Model {
        static associate(models) {
            Products.belongsTo(models.Categories);
        }
    }
    Products.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Categories",
                key: "id",
            },
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
        modelName: "Products",
    });
    sequelize_slugify_1.default.slugifyModel(Products, {
        source: ["productName"],
    });
    return Products;
};
