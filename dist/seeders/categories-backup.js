"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const test = Categories.create({
    id: 1,
    categoryLabel: "Chair",
    categorySlug: "chair",
    parentCategoryId: 1,
});
console.log(test);
const test2 = new Categories(2, "sofa", "sofa", 2);
console.log(test2);
const createCategories = (category) => {
    return Categories.create({
        id: category.id,
        categoryLabel: category.categoryLabel,
        categorySlug: category.categorySlug,
        parentCategoryId: category.parentCategoryId,
    });
};
