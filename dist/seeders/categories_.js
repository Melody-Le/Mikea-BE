"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductCategory {
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
const test = ProductCategory.create({
    id: 1,
    categoryLabel: "Chair",
    categorySlug: "chair",
    parentCategoryId: 1,
});
console.log(test);
