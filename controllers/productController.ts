import { RequestHandler } from "express";
import db from "../models";
export const showProducts: RequestHandler = async (req, res, next) => {
  try {
    const products = await db.product.findAll();
    return res.json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch products from database",
    });
  }
};
export const showProduct: RequestHandler = async (req, res, next) => {
  try {
    const productSlug = req.params.productSlug;
    const product = await db.product.findOne({
      where: {
        productSlug,
      },
    });
    return res.json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch product from database",
    });
  }
};
export const showProductVariants: RequestHandler = async (req, res, next) => {
  try {
    const productSlug = req.params.productSlug;
    const product = await db.product.findOne({
      attributes: ["id"],
      where: {
        productSlug,
      },
    });
    const variants = await db.variant.findAll({
      where: {
        productId: product.id,
      },
    });
    return res.json(variants);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch variants from database",
    });
  }
};

export const showProductVariant: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const variant = await db.variant.findByPk(id);
    return res.json(variant);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch variants from database",
    });
  }
};
