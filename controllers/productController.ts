import { RequestHandler } from "express";
import db from "../models";
import { where } from "sequelize";
const { category: Category, product: Product, variant: Variant } = db;
import { Op } from "sequelize";
type Params = {};
type ResBody = {};
type ReqBody = {};
type ReqQuery = {
  q: string;
};

export const showProducts: RequestHandler = async (req, res, next) => {
  const subCat = req.query?.subCat || "";
  const parentCat = req.query?.parentCat || "";
  const name = req.query?.name || "";
  try {
    let products = null;
    if (!subCat && !parentCat) {
      console.log("no filter");
      products = await Product.findAll({
        attributes: [
          "id",
          "productName",
          "productSlug",
          "productDescription",
          "productImages",
          "room",
        ],
        where: {
          productName: { [Op.like]: "%" + name + "%" },
        },
        include: [
          {
            model: Category,
            attributes: [
              "categoryLabel",
              "categorySlug",
              "categoryImg",
              "parentCategoryId",
            ],
            include: {
              model: Category,
              as: "parentCategory",
              required: false,
              attributes: ["categoryLabel", "categorySlug", "categoryImg"],
            },
          },
          {
            model: Variant,
            attributes: ["id", "variantImage", "price", "qtyInStock"],
          },
        ],
      });
    } else if (subCat) {
      products = await Product.findAll({
        attributes: [
          "id",
          "productName",
          "productSlug",
          "productDescription",
          "productImages",
          "room",
        ],
        include: [
          {
            model: Category,
            where: { categorySlug: { [Op.like]: "%" + subCat + "%" } },
            attributes: [
              "categoryLabel",
              "categorySlug",
              "categoryImg",
              "parentCategoryId",
            ],
            include: {
              model: Category,
              as: "parentCategory",
              required: false,
              attributes: ["categoryLabel", "categorySlug", "categoryImg"],
            },
          },
          {
            model: Variant,
            attributes: ["id", "variantImage", "price", "qtyInStock"],
          },
        ],
      });
    } else if (parentCat) {
      const parentCatId = await Category.findOne({
        where: { categorySlug: parentCat },
        attributes: ["id"],
      });
      products = await Product.findAll({
        attributes: [
          "id",
          "productName",
          "productSlug",
          "productDescription",
          "productImages",
          "room",
        ],
        include: [
          {
            model: Category,
            attributes: [
              "categoryLabel",
              "categorySlug",
              "categoryImg",
              "parentCategoryId",
            ],
            where: { parentCategoryId: parentCatId?.id },
            include: {
              model: Category,
              as: "parentCategory",
              required: false,
              attributes: ["categoryLabel", "categorySlug", "categoryImg"],
            },
          },
          {
            model: Variant,
            attributes: ["id", "variantImage", "price", "qtyInStock"],
          },
        ],
      });
    }
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
      include: [
        { model: Category, attributes: ["categoryLabel"] },
        {
          model: Variant,
        },
      ],
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

export const showProductById: RequestHandler = async (req, res, next) => {
  console.log("^^^^^^^^^--------------Show product By Id");
  try {
    const { id } = req.params;
    // const product = await Product.findOne({
    //   where: {
    //     id,
    //   },
    //   include: [
    //     { model: Category, attributes: ["categoryLabel"] },
    //     {
    //       model: Variant,
    //     },
    //   ],
    // });
    const product = await Product.findByPk(id);
    return res.json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch product from database",
    });
  }
};

export const editProductById: RequestHandler = async (req, res, next) => {
  console.log(req.body);
  console.log(req.params);
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
