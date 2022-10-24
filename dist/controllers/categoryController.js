"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubCategories = exports.getCategories = void 0;
const models_1 = __importDefault(require("../models"));
const { category: Category } = models_1.default;
const getCategories = async (req, res, next) => {
    try {
        const topCategories = await Category.findAll({
            where: {
                parentCategoryId: null,
            },
        });
        const allCategories = await Category.findAll({
            include: { model: Category, as: "subCategory", required: false },
        });
        return res.json(allCategories);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to fetch topCategories from database",
        });
    }
};
exports.getCategories = getCategories;
const getSubCategories = async (req, res, next) => {
    try {
        const catSlug = req.params.catSlug;
        const subCategories = await Category.findAll({
            where: {
                categorySlug: catSlug,
            },
        });
        return res.json(subCategories);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to fetch topCategories from database",
        });
    }
};
exports.getSubCategories = getSubCategories;
