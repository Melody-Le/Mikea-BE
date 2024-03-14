"use strict";
import { Model } from "sequelize";

export interface UserAttributes {
  email: string;
  phone?: number | null;
  password: string;
  address?: string | null;
  postalCode?: number | null;
  username: string;
  isAdmin: boolean;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    email!: string;
    phone?: number | null;
    password!: string;
    address?: string | null;
    postalCode?: number | null;
    username!: string;
    isAdmin!: boolean;
    static associate(models: any) {
      User.hasOne(models.cart);
    }
  }
  User.init(
    {
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
        unique: false,
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
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return User;
};
