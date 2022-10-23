"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAccount = exports.editProfile = exports.showProfile = void 0;
const models_1 = __importDefault(require("../models"));
const { user: User } = models_1.default;
const showProfile = async (req, res, next) => {
    let user = null;
    let userAuth = res.locals.userAuth;
    if (!userAuth) {
        return res.status(401);
    }
    try {
        user = await User.findOne({
            where: {
                username: userAuth.username,
            },
        });
        if (!user) {
            return res.status(404).json();
        }
        return res.json(user);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to fetch user Profile from database",
        });
    }
};
exports.showProfile = showProfile;
const editProfile = async (req, res, next) => {
    try {
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to edit user Profile",
        });
    }
};
exports.editProfile = editProfile;
const deleteAccount = async (req, res, next) => {
    try {
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to delete account",
        });
    }
};
exports.deleteAccount = deleteAccount;
