"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class user extends sequelize_1.Model {
        static associate(models) {
        }
    }
    user.init({
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: true,
            validate: {
                isNumeric: true,
            },
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                min: 3,
            },
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        postalCode: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isNumeric: true,
            },
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isAlpha: true,
                len: [3, 10],
            },
        },
        isAdmin: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    }, {
        sequelize,
        modelName: "user",
    });
    return user;
};
