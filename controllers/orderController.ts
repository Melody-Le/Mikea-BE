import { RequestHandler } from "express";
import db from "../models";
import { where } from "sequelize";
const {
  user: User,
  cart: Cart,
  product: Product,
  lineItem: LineItem,
  variant: Variant,
  order: Order,
  orderItem: OrderItem,
} = db;

import { OrderItemAttributes } from "../models/orderitem";
import { isTemplateExpression } from "typescript";

export const showOrders: RequestHandler = async (req, res, next) => {
  let userAuth = res.locals.userAuth;
  if (!userAuth) {
    return res.status(401);
  }
  try {
    const orderList = await Order.findAll({
      where: { userId: userAuth.userId },
      include: { model: OrderItem },
    });
    return res.json({ orderList });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to load Orders",
    });
  }
};

export const showOrderByOrderId: RequestHandler = async (req, res, next) => {
  let userAuth = res.locals.userAuth;
  if (!userAuth) {
    return res.status(401);
  }
  try {
    const { orderId } = req.params;
    const order = await Order.findbyPk(orderId, {
      include: { model: OrderItem },
    });
    return res.json({ order });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to get order by orderid",
    });
  }
};

export const createOrder: RequestHandler = async (req, res, next) => {
  let user = null;
  let userAuth = res.locals.userAuth;
  if (!userAuth) {
    return res.status(401);
  }
  const cart = await Cart.findOne({ where: { userId: userAuth.userId } });
  try {
    const variantIdsArr = JSON.parse(req.body.variantIds);
    if (!variantIdsArr.length) {
      return res.status(400).json({
        message: `Please select item before place order`,
      });
    }
    const lineItemsInOrder = await LineItem.findAll({
      where: { cartId: cart.id, variantId: variantIdsArr },
      attributes: ["id", "qty", "variantId"],
      include: [
        {
          model: Variant,
          required: true,
          attributes: ["variantDescription", "price", "variantImage"],
          include: [
            {
              model: Product,
              required: true,
              attributes: ["productName"],
            },
          ],
        },
      ],
    });
    if (!lineItemsInOrder.length) {
      return res.status(400).json({
        message: `Fail to load LineItems from db`,
      });
    }
    const newOrder = await Order.create({ userId: userAuth.userId });
    const orderItemList = [];
    const lineItemsInOrderIDs = [];
    const qtyVariantInOrder = [];

    // create OrderItem for that orderId:
    for (let i = 0, l = lineItemsInOrder.length; i < l; i++) {
      const {
        id: lineItemId,
        qty,
        variantId,
        variant: {
          variantDescription,
          price,
          variantImage,
          product: { productName },
        },
      } = lineItemsInOrder[i];
      const newOrderItems: OrderItemAttributes = {
        orderId: newOrder.id,
        variantId,
        productName,
        variantDescription,
        variantImage,
        price,
        qty,
      };
      orderItemList.push(newOrderItems);
      lineItemsInOrderIDs.push(lineItemId);
      qtyVariantInOrder.push({ variantId, qty });
    }

    const orderItemsToDB = await OrderItem.bulkCreate(orderItemList);
    // match relationship between order and orderItems
    await newOrder.addOrderItems(orderItemsToDB);
    // delete all lineItemInOrders:
    await LineItem.destroy({ where: { id: lineItemsInOrderIDs } });
    // reduce the number of qtyInstock of variant:
    for (let i = 0, l = qtyVariantInOrder.length; i < l; i++) {
      const { variantId, qty } = qtyVariantInOrder[i];
      await Variant.decrement("qtyInStock", {
        by: qty,
        where: { id: variantId },
      });
    }

    return res.json({
      message: "Success Checkout, your order is in processing",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to add Create Order",
    });
  }
};
