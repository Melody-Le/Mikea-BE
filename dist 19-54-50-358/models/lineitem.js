"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class LineItem extends sequelize_1.Model {
        static associate(models) {
            LineItem.belongsTo(models.cart);
            LineItem.belongsTo(models.variant, {
                foreignKey: {
                    name: "variantId",
                },
            });
        }
    }
    LineItem.init({
        cartId: { type: DataTypes.INTEGER, allowNull: false, unique: true },
        variantId: {
            type: DataTypes.STRING,
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
