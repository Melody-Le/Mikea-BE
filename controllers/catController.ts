import { RequestHandler } from "express";
import db from "../models";
export const getCategories: RequestHandler = async (req, res, next) => {
  try {
    const topCategories = await db.category.findAll({
      where: {
        parentCategoryId: null,
      },
    });
    return res.json(topCategories);
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
    // const subCategories = await db.category.findAll({ categorySlug: catSlug });
    const subCategories = await db.category.findAll({
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
