"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromCart = exports.updateCartItem = exports.addItemToCart = exports.showCart = exports.findOrCreateCart = void 0;
const models_1 = __importDefault(require("../models"));
const { user: User, cart: Cart, lineItem: LineItem, variant: Variant, product: Product, } = models_1.default;
const findOrCreateCart = async (req, res, next) => {
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
            return res
                .status(201)
                .json({ message: "Cart have just created for new user", cart });
        }
        else {
            return res.status(200).json("cart already exists");
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to load cart",
        });
    }
};
exports.findOrCreateCart = findOrCreateCart;
const showCart = async (req, res, next) => {
    let userAuth = res.locals.userAuth;
    if (!userAuth) {
        return res.status(401);
    }
    try {
        const [userCart, created] = await Cart.findOrCreate({
            where: { userId: userAuth.userId },
            defaults: {},
        });
        const { count, rows: lineItems } = await LineItem.findAndCountAll({
            include: {
                model: Variant,
                include: { model: Product, attributes: ["productName"] },
            },
            where: { cartId: userCart.id },
        });
        return res.json({ count, lineItems });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to load cart",
        });
    }
};
exports.showCart = showCart;
const addItemToCart = async (req, res, next) => {
    let user = null;
    let userAuth = res.locals.userAuth;
    if (!userAuth) {
        return res.status(401);
    }
    try {
        const { variantId } = req.params;
        const [userCart, cartCreated] = await Cart.findOrCreate({
            where: { userId: userAuth.userId },
            defaults: {},
        });
        const [lineItem, lineItemCreated] = await LineItem.findOrCreate({
            where: { cartId: userCart.id, variantId: variantId },
            defaults: { qty: 1 },
        });
        if (lineItemCreated) {
            console.log("==============================>add to cart");
            return res.json({ message: "Success to add cart" });
        }
        const targetVariant = await Variant.findOne({
            where: { id: lineItem.variantId },
            attributes: ["qtyInStock"],
        });
        if (!targetVariant) {
            return res.status(401).json({ message: "can not get product variant" });
        }
        if (lineItem.qty < targetVariant.qtyInStock) {
            await LineItem.increment({ qty: +1 }, { where: { id: lineItem.id } });
            console.log("increased");
            res.json({ message: "Success increase quantity in cart" });
        }
        else
            res.json({ message: "Order Limit Reached" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to add to cart",
        });
    }
};
exports.addItemToCart = addItemToCart;
const updateCartItem = async (req, res, next) => {
    let user = null;
    let userAuth = res.locals.userAuth;
    if (!userAuth) {
        return res.status(401);
    }
    try {
        const { updateQty } = req.body;
        const { variantId } = req.params;
        const cart = await Cart.findOne({
            where: { userId: userAuth.userId },
            attributes: ["id"],
        });
        const lineItem = await LineItem.findOne({
            where: { cartId: cart.id, variantId: variantId },
        });
        const targetVariant = await Variant.findOne({
            where: { id: lineItem.variantId },
            attributes: ["qtyInStock"],
        });
        if (!targetVariant) {
            return res.status(401).json({ message: "can not get product variant" });
        }
        const qtyInStock = targetVariant.qtyInStock;
        if (updateQty > qtyInStock) {
            return res.status(400).json({
                error: `Only ${qtyInStock} left, adjust quantity`,
            });
        }
        else {
            await LineItem.update({ qty: updateQty }, {
                where: {
                    id: lineItem.id,
                },
            });
            return res.json({ message: "Success to update cart" });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to update cart",
        });
    }
};
exports.updateCartItem = updateCartItem;
const removeFromCart = async (req, res, next) => {
    let userAuth = res.locals.userAuth;
    if (!userAuth) {
        return res.status(401);
    }
    try {
        const { variantId } = req.params;
        const cart = await Cart.findOne({
            where: { userId: userAuth.userId },
            attributes: ["id"],
        });
        await LineItem.destroy({
            where: { cartId: cart.id, variantId: variantId },
        });
        res.json({ message: "Success to remove item from cart" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to remove item from cart",
        });
    }
};
exports.removeFromCart = removeFromCart;
