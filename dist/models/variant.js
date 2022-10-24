"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Variant extends sequelize_1.Model {
        static associate(models) {
            Variant.belongsTo(models.product);
            Variant.hasOne(models.lineItem);
        }
    }
    Variant.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        qtyInStock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        variantDescription: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
        },
        size: {
            type: DataTypes.STRING,
        },
        material: {
            type: DataTypes.STRING,
        },
        variantImages: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "variant",
    });
    return Variant;
};
