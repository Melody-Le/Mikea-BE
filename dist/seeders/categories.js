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
    id: 1,
    categoryLabel: "Tables And Desk",
    categorySlug: "table-and-desk",
  },
  {
    id: 2,
    categoryLabel: "Chairs And Sofas",
    categorySlug: "chairs-and-sofas",
  },
  {
    id: 3,
    categoryLabel: "Wadrobe",
    categorySlug: "wadrobe",
  },
  {
    id: 4,
    categoryLabel: "Hometool",
    categorySlug: "hometool",
  },
  {
    id: 5,
    categoryLabel: "Decoration",
    categorySlug: "decoration",
  },
  {
    id: 5,
    categoryLabel: "Lighting",
    categorySlug: "lighting",
  },
];
