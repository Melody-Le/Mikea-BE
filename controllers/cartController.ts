import { RequestHandler } from "express";
import db from "../models";
const { user: User } = db;

export const showCart: RequestHandler = async (req, res, next) => {
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
