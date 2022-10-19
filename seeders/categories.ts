import SequelizeSlugify from "sequelize-slugify";

import { CategoryAttributes } from "../models/category";

class ProductCategory implements CategoryAttributes {
  constructor() {}
  static create(category: CategoryAttributes) {
    return {
      id: category.id,
      categoryLabel: category.categoryLabel,
      categorySlug: category.categorySlug,
      parentCategoryId: category.parentCategoryId,
    };
  }
}
const test = ProductCategory.create({
  id: 1,
  categoryLabel: "Chair",
  categorySlug: "chair",
  parentCategoryId: 1,
});
console.log(test);
