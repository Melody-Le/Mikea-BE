"use strict";
import { Model } from "sequelize";
export interface OrderItemAttributes {
  orderId: number;
  variantId: string;
  productName: string;
  variantDescription: string;
  variantImage: string;
  price: number;
  qty: number;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class OrderItem
    extends Model<OrderItemAttributes>
    implements OrderItemAttributes
  {
    orderId!: number;
    variantId!: string;
    productName!: string;
    variantDescription!: string;
    variantImage!: string;
    price!: number;
    qty!: number;
    static associate(models: any) {
      OrderItem.belongsTo(models.order);
    }
  }
  OrderItem.init(
    {
      orderId: {
        type: DataTypes.INTEGER,
      },
      variantId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      variantDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      variantImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "orderItem",
    }
  );
  return OrderItem;
};
