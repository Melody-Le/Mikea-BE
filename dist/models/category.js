"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Category extends sequelize_1.Model {
        static associate(models) {
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
    }, {
        sequelize,
        modelName: "category",
    });
    return Category;
};
