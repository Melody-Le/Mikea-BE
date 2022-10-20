"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.category = void 0;
class category {
  constructor(id, categoryLabel, categorySlug, parentCategoryId) {
    this.id = id;
    this.categoryLabel = categoryLabel;
    this.categorySlug = categorySlug;
    this.parentCategoryId = parentCategoryId;
  }
  static create(category) {
    return {
      id: category.id,
      categoryLabel: category.categoryLabel,
      categorySlug: category.categorySlug,
      parentCategoryId: category.parentCategoryId,
    };
  }
}
exports.category = [
  {
    categoryLabel: "Tables And Desk",
    categorySlug: "table-and-desk",
  },
  {
    categoryLabel: "Chairs And Sofas",
    categorySlug: "chairs-and-sofas",
  },
  {
    categoryLabel: "Wadrobe",
    categorySlug: "wadrobe",
  },
  {
    categoryLabel: "Hometool",
    categorySlug: "hometool",
  },
  {
    categoryLabel: "Decoration",
    categorySlug: "decoration",
  },
  {
    categoryLabel: "Lighting",
    categorySlug: "lighting",
  },
];
