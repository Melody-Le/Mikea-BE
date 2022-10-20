"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Category extends sequelize_1.Model {
        static associate(models) {
            Category.hasMany(models.category, { as: "subCategory" });
            Category.hasMany(models.Product);
        }
    }
    Category.init({
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
        },
    }, {
        sequelize,
        modelName: "category",
    });
    return Category;
};
