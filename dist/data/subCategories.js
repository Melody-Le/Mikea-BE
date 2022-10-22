"use strict";
const db = require("../models");
const createSubCat = async () => {
  const tableCat = await db.category.findOne({
    attributes: ["id"],
    where: { categorySlug: "table-and-desk" },
  });
  const chairCat = await db.category.findOne({
    attributes: ["id"],
    where: { categorySlug: "chairs-and-sofas" },
  });
  console.log(" ============. tableCat.id is:", tableCat.id);
  const subCategories = [
    {
      categoryLabel: "Study Table",
      categorySlug: "study-table",
      parentCategoryId: tableCat.id,
    },
    {
      categoryLabel: "Coffee table",
      categorySlug: "coffee-table",
      parentCategoryId: tableCat.id,
    },
    {
      categoryLabel: "Dinning Table",
      categorySlug: "dinning-table",
      parentCategoryId: tableCat.id,
    },
    {
      categoryLabel: "Office Chair",
      categorySlug: "office-chair",
      parentCategoryId: chairCat.id,
    },
    {
      categoryLabel: "Dinning Chair",
      categorySlug: "dinning-chair",
      parentCategoryId: chairCat.id,
    },
  ];
  return subCategories;
};
const subCat = async () => {
  createSubCat();
};
subCat();
module.exports = subCat;
