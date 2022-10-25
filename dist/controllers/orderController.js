"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = exports.showOneOrder = exports.showOrders = void 0;
const models_1 = __importDefault(require("../models"));
const { user: User, cart: Cart, lineItem: LineItem, variant: Variant, order: Order, orderitem: OrderItem, } = models_1.default;
const showOrders = async (req, res, next) => {
    let userAuth = res.locals.userAuth;
    if (!userAuth) {
        return res.status(401);
    }
    try {
        const orderList = await Order.findAll({
            where: { userId: userAuth.userId },
        });
        return res.json({ orderList });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to load cart",
        });
    }
};
exports.showOrders = showOrders;
const showOneOrder = async (req, res, next) => {
    let userAuth = res.locals.userAuth;
    if (!userAuth) {
        return res.status(401);
    }
    try {
        const { orderId } = req.params;
        const order = await Order.findOne({
            where: { id: orderId },
            include: { model: OrderItem },
        });
        return res.json({ order });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to load cart",
        });
    }
};
exports.showOneOrder = showOneOrder;
const createOrder = async (req, res, next) => {
    let user = null;
    let userAuth = res.locals.userAuth;
    if (!userAuth) {
        return res.status(401);
    }
    try {
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to add to cart",
        });
    }
};
exports.createOrder = createOrder;
