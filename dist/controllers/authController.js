"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.refresh = exports.login = exports.register = void 0;
const models_1 = __importDefault(require("../models"));
const { user: User } = models_1.default;
const errors_util_1 = require("../utils/errors.util");
const register = async (req, res, next) => {
    try {
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to fetch topCategories from database",
        });
    }
};
exports.register = register;
const login = async (req, res, next) => {
    try {
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to fetch topCategories from database",
        });
    }
};
exports.login = login;
const refresh = async (req, res, next) => {
    try {
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to fetch topCategories from database",
        });
    }
};
exports.refresh = refresh;
const logout = async (req, res, next) => {
    try {
    }
    catch (error) {
        console.log(error);
        return res.status(500).send((0, errors_util_1.getErrorMessage)(error));
    }
};
exports.logout = logout;
