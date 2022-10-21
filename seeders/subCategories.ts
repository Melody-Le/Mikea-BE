import db from "../models";
// get categoryId from DB to create subCat
console.log("db.category is: ", db.category);

export const subCategories = [
  {
    categoryLabel: "Study Table",
    categorySlug: "study-table",
    parentCategoryId: null,
  },
  {
    categoryLabel: "Coffee table",
    categorySlug: "coffee-table",
    parentCategoryId: null,
  },
  {
    categoryLabel: "Dinning Table",
    categorySlug: "dinning-table",
    parentCategoryId: null,
  },
  {
    categoryLabel: "Office Chair",
    categorySlug: "office-chair",
    parentCategoryId: null,
  },
  {
    categoryLabel: "Dinning Chair",
    categorySlug: "dinning-chair",
    parentCategoryId: null,
  },
];
