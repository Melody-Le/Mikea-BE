"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showProduct = exports.showProducts = void 0;
const models_1 = __importDefault(require("../models"));
const showProducts = async (req, res, next) => {
    try {
        const products = await models_1.default.product.findAll();
        return res.json(products);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to fetch topCategories from database",
        });
    }
};
exports.showProducts = showProducts;
const showProduct = async (req, res, next) => {
    try {
        const productSlug = req.params.productSlug;
        const product = await models_1.default.product.findAll({
            where: {
                productSlug,
            },
        });
        return res.json(product);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to fetch topCategories from database",
        });
    }
};
exports.showProduct = showProduct;
