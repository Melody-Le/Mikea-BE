"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromCart = exports.EditCartItem = exports.addToCart = exports.showCart = void 0;
const models_1 = __importDefault(require("../models"));
const { user: User } = models_1.default;
const showCart = async (req, res, next) => {
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
exports.removeFromCart = removeFromCart;
