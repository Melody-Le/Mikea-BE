"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subCategories = void 0;
const models_1 = __importDefault(require("../models"));
console.log("db.category is: ", models_1.default.category);
exports.subCategories = [
    {
        categoryLabel: "Study Table",
        categorySlug: "study-table",
        parentCategoryId: null,
    },
    {
        categoryLabel: "Coffee table",
        categorySlug: "coffee-table",
        parentCategoryId: null,
    },
    {
        categoryLabel: "Dinning Table",
        categorySlug: "dinning-table",
        parentCategoryId: null,
    },
    {
        categoryLabel: "Office Chair",
        categorySlug: "office-chair",
        parentCategoryId: null,
    },
    {
        categoryLabel: "Dinning Chair",
        categorySlug: "dinning-chair",
        parentCategoryId: null,
    },
];
