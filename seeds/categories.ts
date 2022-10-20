import SequelizeSlugify from "sequelize-slugify";

// import { CategoryAttributes } from "../models/categories";

// class Categories implements CategoryAttributes {
//   constructor(
//     public id: number,
//     public categoryLabel: string,
//     public categorySlug: string,
//     public parentCategoryId?: number | undefined
//   ) {}

//   static create(category: CategoryAttributes) {
//     return {
//       id: category.id,
//       categoryLabel: category.categoryLabel,
//       categorySlug: category.categorySlug,
//       parentCategoryId: category.parentCategoryId,
//     };
//   }
// }

export const categories = [
  {
    categoryLabel: "Tables And Desk",
    categorySlug: "table-and-desk",
    parentCategoryId: null,
  },
  {
    categoryLabel: "Chairs And Sofas",
    categorySlug: "chairs-and-sofas",
    parentCategoryId: null,
  },
  {
    categoryLabel: "Wadrobe",
    categorySlug: "wadrobe",
    parentCategoryId: null,
  },
  {
    categoryLabel: "Hometool",
    categorySlug: "hometool",
    parentCategoryId: null,
  },
  {
    categoryLabel: "Decoration",
    categorySlug: "decoration",
    parentCategoryId: null,
  },
  {
    categoryLabel: "Lighting",
    categorySlug: "lighting",
    parentCategoryId: null,
  },
];
