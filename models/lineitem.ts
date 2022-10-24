"use strict";
const { Model } = require("sequelize");
export interface LineItemAttributes {
  cartId: number;
  productVariantId: number;
  qty: number;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class LineItem
    extends Model<LineItemAttributes>
    implements LineItemAttributes
  {
    cartId!: number;
    productVariantId!: number;
    qty!: number;
    static associate(models: any) {
      LineItem.belongsTo(models.cart);
      LineItem.belongsTo(models.variant);
    }
  }
  LineItem.init(
    {
      cartId: { type: DataTypes.INTEGER, allowNull: false, unique: true },
      productVariantId: {
        type: DataTypes.INTEGER,
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
