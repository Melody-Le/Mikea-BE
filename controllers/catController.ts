import { RequestHandler } from "express";
import db from "../models";
const { category: Category } = db;
console.log("=============> db.Model", db.model);

export const getCategories: RequestHandler = async (req, res, next) => {
  try {
    const topCategories = await Category.findAll({
      where: {
        parentCategoryId: null,
      },
    });
    return res.json(topCategories);
  } catch (error) {
    // console.log(error);
    throw new Error(" Could not find topCategory");
    // return res.status(500).json({
    //   error: "Failed to fetch topCategories from database",
    // });
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
