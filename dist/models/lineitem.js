"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class LineItem extends Model {
        static associate(models) {
            LineItem.belongsTo(models.cart);
            LineItem.belongsTo(models.variant);
        }
    }
    LineItem.init({
        cartId: { type: DataTypes.INTEGER, allowNull: false, unique: true },
        productVariantId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        qty: { type: DataTypes.INTEGER, allowNull: false },
    }, {
        sequelize,
        modelName: "lineItem",
    });
    return LineItem;
};