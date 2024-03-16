import { RequestHandler, query } from "express";
import db from "../models";
import { fileURLToPath } from "url";
import { json } from "body-parser";
const { category: Category } = db;

interface Foo {
  filter: string;
}
const querystring = require("querystring");

export const getCategories: RequestHandler = async (req, res, next) => {
  const { query } = req;
  console.log("=============>query:", query.id);

  try {
    let allCategories;
    if (query.id) {
      allCategories = await Category.findAll({
        where: {
          id: query.id,
        },
      });
    } else {
      //TODO: keep the code below, may be use later
      allCategories = await Category.findAll({
        include: { model: Category, as: "subCategory", required: false },
      });
    }
    return res.json({ allCategories });
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
    const parentCat = await Category.findOne({
      where: {
        categorySlug: catSlug,
      },
      attributes: ["id"],
    });
    const subCategories = await Category.findAll({
      where: {
        parentCategoryId: parentCat.id,
      },
    });

    return res.json({ subCategories });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch topCategories from database",
    });
  }
};

export const getCategoryByIds: RequestHandler = async (req, res, next) => {
  console.log(req.params);
  try {
    // const { id } = req.params;
    // const category = await Category.findByPk(id);
    // const subCategories = await Category.findAll({
    //   where: {
    //     parentCategoryId: parentCat.id,
    //   },
    // });
    // return res.json({ category });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch topCategories from database",
    });
  }
};
