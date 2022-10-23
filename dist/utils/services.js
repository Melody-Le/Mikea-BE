"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
async function register(user) {
    try {
        await user_model_1.default.create(user);
    }
    catch (error) {
        throw error;
    }
}
exports.register = register;
async function login(user) {
    try {
        const foundUser = await user_model_1.default.findOne({
            name: user.name,
            password: user.password,
        });
    }
    catch (error) {
        throw error;
    }
}
exports.login = login;
