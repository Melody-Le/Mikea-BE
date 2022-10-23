import { RequestHandler } from "express";
import db from "../models";
const { category: Category, product: Product, variant: Variant } = db;

export const showProducts: RequestHandler = async (req, res, next) => {
  try {
    const products = await Product.findAll();
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
    const product = await Product.findOne({
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
    const product = await Product.findOne({
      attributes: ["id"],
      where: {
        productSlug,
      },
    });
    const variants = await Variant.findAll({
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
    const variant = await Variant.findByPk(id);
    return res.json(variant);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch variants from database",
    });
  }
};
