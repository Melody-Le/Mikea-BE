"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PROCESSING"] = "PROCESSING";
    OrderStatus["COMPLETED"] = "COMPLETED";
})(OrderStatus || (OrderStatus = {}));
module.exports = (sequelize, DataTypes) => {
    class Order extends sequelize_1.Model {
        static associate(models) {
            Order.belongsTo(models.user);
            Order.hasMany(models.orderItem);
        }
    }
    Order.init({
        userId: { type: DataTypes.INTEGER, allowNull: false, unique: true },
        status: {
            type: DataTypes.ENUM(...Object.values(OrderStatus)),
            defaultValue: OrderStatus.PROCESSING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "order",
    });
    return Order;
};
