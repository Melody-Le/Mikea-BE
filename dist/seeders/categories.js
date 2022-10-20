"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categories = void 0;
class Categories {
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
exports.categories = [
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