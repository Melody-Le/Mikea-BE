import { RequestHandler } from "express";
import db from "../models";
const { category: Category } = db;

export const getCategories: RequestHandler = async (req, res, next) => {
  try {
    const topCategories = await Category.findAll({
      where: {
        parentCategoryId: null,
      },
    });
    const allCategories = await Category.findAll({
      include: { model: Category, as: "subCategory", required: false },
    });
    return res.json(allCategories);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch topCategories from database",
    });
  }
};

export const getSubCategories: RequestHandler = async (req, res, next) => {
  try {
    const catSlug = req.params.catSlug;
    // const subCategories = await Category.findAll({ categorySlug: catSlug });
    const subCategories = await Category.findAll({
      where: {
        categorySlug: catSlug,
      },
    });

    return res.json(subCategories);
    // res.send("hehe");
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch topCategories from database",
    });
  }
};
