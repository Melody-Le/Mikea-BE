import { RequestHandler } from "express";
import db from "../models";
export const products: RequestHandler = async (req, res, next) => {
  try {
    const products = await db.product.findAll();
    return res.json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch topCategories from database",
    });
  }
};
