"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showProductVariants = exports.showProduct = exports.showProducts = void 0;
const models_1 = __importDefault(require("../models"));
const showProducts = async (req, res, next) => {
    try {
        const products = await models_1.default.product.findAll();
        return res.json(products);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to fetch products from database",
        });
    }
};
exports.showProducts = showProducts;
const showProduct = async (req, res, next) => {
    try {
        const productSlug = req.params.productSlug;
        const product = await models_1.default.product.findOne({
            where: {
                productSlug,
            },
        });
        return res.json(product);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to fetch product from database",
        });
    }
};
exports.showProduct = showProduct;
const showProductVariants = async (req, res, next) => {
    try {
        const productSlug = req.params.productSlug;
        const product = await models_1.default.product.findOne({
            attributes: ["id"],
            where: {
                productSlug,
            },
        });
        const variants = await models_1.default.variant.findAll({
            where: {
                productId: product.id,
            },
        });
        return res.json(variants);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to fetch variants from database",
        });
    }
};
exports.showProductVariants = showProductVariants;
