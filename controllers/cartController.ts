import { RequestHandler } from "express";
import { createAdd } from "typescript";
import db from "../models";
const { user: User, cart: Cart, lineitem: LineItem } = db;

export const createCart: RequestHandler = async (req, res, next) => {
  let userAuth = res.locals.userAuth;
  if (!userAuth) {
    return res.status(401);
  }
  try {
    const [cart, created] = await Cart.findOrCreate({
      where: { userId: userAuth.userId },
      defaults: {},
    });
    if (created) {
      return res.status(201).json({ message: "New User Created", cart });
    } else {
      return res.status(409).json("cart already exists");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to load cart",
    });
  }
};

export const showCart: RequestHandler = async (req, res, next) => {
  let userAuth = res.locals.userAuth;
  if (!userAuth) {
    return res.status(401);
  }
  try {
    const userCart = await Cart.findAll({ include: User });

    // const userCart = await Cart.findOne({ where: { userId: userAuth.userId } });
    // const userCartLineItems = await LineItem.findAll({
    //   where: { cartId: userCart.id },
    // });
    return res.json(userCart);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to load cart",
    });
  }
};

export const addToCart: RequestHandler = async (req, res, next) => {
  let user = null;
  let userAuth = res.locals.userAuth;
  if (!userAuth) {
    return res.status(401);
  }
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to load cart",
    });
  }
};

export const EditCartItem: RequestHandler = async (req, res, next) => {
  let user = null;
  let userAuth = res.locals.userAuth;
  if (!userAuth) {
    return res.status(401);
  }
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to load cart",
    });
  }
};

export const removeFromCart: RequestHandler = async (req, res, next) => {
  let user = null;
  let userAuth = res.locals.userAuth;
  if (!userAuth) {
    return res.status(401);
  }
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to load cart",
    });
  }
};
