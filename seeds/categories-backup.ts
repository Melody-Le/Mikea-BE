import SequelizeSlugify from "sequelize-slugify";

import { CategoryAttributes } from "../models/categories";

class Categories implements CategoryAttributes {
  constructor(
    public id: number,
    public categoryLabel: string,
    public categorySlug: string,
    public parentCategoryId?: number | undefined
  ) {}

  static create(category: CategoryAttributes) {
    return {
      id: category.id,
      categoryLabel: category.categoryLabel,
      categorySlug: category.categorySlug,
      parentCategoryId: category.parentCategoryId,
    };
  }
}

const test = Categories.create({
  id: 1,
  categoryLabel: "Chair",
  categorySlug: "chair",
  parentCategoryId: 1,
});
console.log(test);
const test2 = new Categories(2, "sofa", "sofa", 2);
console.log(test2);
//FIXME: what is the different of test and test 2

const createCategories = (category: CategoryAttributes) => {
  return Categories.create({
    id: category.id,
    categoryLabel: category.categoryLabel,
    categorySlug: category.categorySlug,
    parentCategoryId: category.parentCategoryId,
  });
};
