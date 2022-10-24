"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Cart extends sequelize_1.Model {
        static associate(models) {
            Cart.belongsTo(models.user);
            Cart.hasMany(models.lineItem);
        }
    }
    Cart.init({
        userId: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    }, {
        sequelize,
        modelName: "cart",
    });
    return Cart;
};
