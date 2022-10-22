import { RequestHandler } from "express";
import db from "../models";
export const showProducts: RequestHandler = async (req, res, next) => {
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
export const showProduct: RequestHandler = async (req, res, next) => {
  try {
    const productSlug = req.params.productSlug;
    const product = await db.product.findAll({
      where: {
        productSlug,
      },
    });

    return res.json(product);
    res.send("hehe");
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch topCategories from database",
    });
  }
};
