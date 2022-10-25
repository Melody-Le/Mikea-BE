"use strict";
// const { Model } = require("sequelize");
import { Model } from "sequelize";
export interface LineItemAttributes {
  cartId: number;
  variantId: string;
  qty: number;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class LineItem
    extends Model<LineItemAttributes>
    implements LineItemAttributes
  {
    cartId!: number;
    variantId!: string;
    qty!: number;
    static associate(models: any) {
      LineItem.belongsTo(models.cart);
      LineItem.belongsTo(models.variant, {
        foreignKey: {
          name: "variantId",
          // type: DataTypes.UUID,
        },
      });
    }
  }
  LineItem.init(
    {
      cartId: { type: DataTypes.INTEGER, allowNull: false, unique: true },
      variantId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      qty: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "lineItem",
    }
  );
  return LineItem;
};
