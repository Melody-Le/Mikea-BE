"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_slugify_1 = __importDefault(require("sequelize-slugify"));
module.exports = (sequelize, DataTypes) => {
    class Category extends sequelize_1.Model {
        static associate(models) {
        }
    }
    Category.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        categoryLabel: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        categorySlug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        parentCategoryId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "Category",
                key: "id",
            },
        },
    }, {
        sequelize,
        modelName: "Category",
    });
    sequelize_slugify_1.default.slugifyModel(Category, {
        source: ["categoryLabel"],
    });
    return Category;
};
