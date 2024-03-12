"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showProductVariant = exports.showProductVariants = exports.showProduct = exports.showProducts = void 0;
const models_1 = __importDefault(require("../models"));
const { category: Category, product: Product, variant: Variant } = models_1.default;
const showProducts = async (req, res, next) => {
    try {
        const products = await Product.findAll({
            attributes: [
                "productName",
                "productSlug",
                "productDescription",
                "productImages",
                "room",
            ],
            include: [
                { model: Category, attributes: ["categoryLabel"] },
                {
                    model: Variant,
                    attributes: ["id", "variantImage", "price", "qtyInStock"],
                },
            ],
        });
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
        const product = await Product.findOne({
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
        const product = await Product.findOne({
            attributes: ["id"],
            where: {
                productSlug,
            },
        });
        const variants = await Variant.findAll({
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
const showProductVariant = async (req, res, next) => {
    try {
        const { id } = req.params;
        const variant = await Variant.findByPk(id);
        return res.json(variant);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to fetch variants from database",
        });
    }
};
exports.showProductVariant = showProductVariant;
