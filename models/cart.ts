"use strict";
import { Model } from "sequelize";
export interface CartAttributes {
  userId: number;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Cart extends Model<CartAttributes> implements CartAttributes {
    userId!: number;
    static associate(models: any) {
      Cart.belongsTo(models.user);
      Cart.hasMany(models.lineItem);
    }
  }
  Cart.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    },
    {
      sequelize,
      modelName: "cart",
    }
  );
  return Cart;
};
