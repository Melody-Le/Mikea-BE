"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductCategory {
    constructor() { }
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
