"use strict";
import { Model } from "sequelize";
enum OrderStatus {
  PROCESSING = "PROCESSING",
  COMPLETED = "COMPLETED",
}
export interface OrderAttributes {
  userId: number;
  status: OrderStatus;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Order extends Model<OrderAttributes> implements OrderAttributes {
    userId!: number;
    status!: OrderStatus;
    static associate(models: any) {
      Order.belongsTo(models.user);
      Order.hasMany(models.orderItem);
    }
  }
  Order.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      status: {
        type: DataTypes.ENUM(...Object.values(OrderStatus)),
        defaultValue: OrderStatus.PROCESSING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return Order;
};
