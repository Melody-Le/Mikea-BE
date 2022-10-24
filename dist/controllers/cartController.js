"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromCart = exports.EditCartItem = exports.addToCart = exports.showCart = exports.createCart = void 0;
const models_1 = __importDefault(require("../models"));
const { user: User, cart: Cart, lineItem: LineItem, variant: Variant } = models_1.default;
const createCart = async (req, res, next) => {
    let userAuth = res.locals.userAuth;
    if (!userAuth) {
        return res.status(401);
    }
    try {
        const [cart, created] = await Cart.findOrCreate({
            where: { userId: userAuth.userId },
            defaults: {},
        });
        if (created) {
            return res.status(201).json({ message: "New User Created", cart });
        }
        else {
            return res.status(409).json("cart already exists");
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to load cart",
        });
    }
};
exports.createCart = createCart;
const showCart = async (req, res, next) => {
    let userAuth = res.locals.userAuth;
    if (!userAuth) {
        return res.status(401);
    }
    try {
        const userCart = await Cart.findOne({ where: { userId: userAuth.userId } });
        const lineItemCart = await LineItem.findAll({
            include: Variant,
            where: { cartId: userCart.id },
        });
        return res.json({ lineItemCart });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to load cart",
        });
    }
};
exports.showCart = showCart;
const addToCart = async (req, res, next) => {
    let user = null;
    let userAuth = res.locals.userAuth;
    if (!userAuth) {
        return res.status(401);
    }
    try {
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to load cart",
        });
    }
};
exports.addToCart = addToCart;
const EditCartItem = async (req, res, next) => {
    let user = null;
    let userAuth = res.locals.userAuth;
    if (!userAuth) {
        return res.status(401);
    }
    try {
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to load cart",
        });
    }
};
exports.EditCartItem = EditCartItem;
const removeFromCart = async (req, res, next) => {
    let userAuth = res.locals.userAuth;
    if (!userAuth) {
        return res.status(401);
    }
    try {
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to load cart",
        });
    }
};
exports.removeFromCart = removeFromCart;
