"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class refreshToken extends sequelize_1.Model {
        static associate(models) {
        }
    }
    refreshToken.init({
        token: { type: DataTypes.STRING, allowNull: false, unique: true },
    }, {
        sequelize,
        modelName: "refreshToken",
    });
    return refreshToken;
};
