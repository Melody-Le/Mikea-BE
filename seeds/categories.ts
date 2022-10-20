import SequelizeSlugify from "sequelize-slugify";

import { CategoryAttributes } from "../models/categories";

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
    id: 1,
    categoryLabel: "Tables And Desk",
    categorySlug: "table-and-desk",
    parentCategoryId: null,
  },
  {
    id: 2,
    categoryLabel: "Chairs And Sofas",
    categorySlug: "chairs-and-sofas",
    parentCategoryId: null,
  },
  {
    id: 3,
    categoryLabel: "Wadrobe",
    categorySlug: "wadrobe",
    parentCategoryId: null,
  },
  {
    id: 4,
    categoryLabel: "Hometool",
    categorySlug: "hometool",
    parentCategoryId: null,
  },
  {
    id: 5,
    categoryLabel: "Decoration",
    categorySlug: "decoration",
    parentCategoryId: null,
  },
  {
    id: 5,
    categoryLabel: "Lighting",
    categorySlug: "lighting",
    parentCategoryId: null,
  },
];
