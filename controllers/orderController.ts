import { RequestHandler } from "express";
import { where } from "sequelize";
import { findConfigFile } from "typescript";
import db from "../models";
const {
  user: User,
  cart: Cart,
  lineItem: LineItem,
  variant: Variant,
  order: Order,
  orderitem: OrderItem,
} = db;

export const showOrders: RequestHandler = async (req, res, next) => {
  let userAuth = res.locals.userAuth;
  if (!userAuth) {
    return res.status(401);
  }
  try {
    const orderList = await Order.findAll({
      where: { userId: userAuth.userId },
    });
    //Get OrderItems
    return res.json({ orderList });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to load cart",
    });
  }
};

export const showOneOrder: RequestHandler = async (req, res, next) => {
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
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to load cart",
    });
  }
};

export const createOrder: RequestHandler = async (req, res, next) => {
  let user = null;
  let userAuth = res.locals.userAuth;
  if (!userAuth) {
    return res.status(401);
  }
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to add to cart",
    });
  }
};
