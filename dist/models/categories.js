"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_slugify_1 = __importDefault(require("sequelize-slugify"));
module.exports = (sequelize, DataTypes) => {
    class Categories extends sequelize_1.Model {
        static associate(models) {
            Categories.hasMany(models.Categories, { as: "subCategories" });
            Categories.hasMany(models.Products);
        }
    }
    Categories.init({
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
                model: "Categories",
                key: "id",
            },
        },
    }, {
        sequelize,
        modelName: "Categories",
    });
    sequelize_slugify_1.default.slugifyModel(Categories, {
        source: ["categoryLabel"],
    });
    return Categories;
};
