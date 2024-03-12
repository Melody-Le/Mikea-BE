"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secrets_1 = require("../utils/secrets");
const models_1 = __importDefault(require("../models"));
const { user: User } = models_1.default;
const authMiddleware = async (req, res, next) => {
    const authzHeader = req.header("Authorization");
    if (!authzHeader) {
        return res.status(401).json({
            message: "Authentication details empty",
        });
    }
    if (authzHeader.slice(0, 7) !== "Bearer ") {
        return res.status(401).json({
            message: "Invalid auth type",
        });
    }
    const token = authzHeader.slice(7);
    if (token.length === 0) {
        return res.status(401).json({
            message: "Invalid auth token",
        });
    }
    const verified = jsonwebtoken_1.default.verify(token, secrets_1.JWT_SECRET_ACCESS);
    if (verified) {
        res.locals.userAuth = verified;
        let authUser = null;
        authUser = await User.findOne({
            attributes: ["id"],
            where: {
                email: res.locals.userAuth.email,
            },
        });
        if (!authUser) {
            return res.status(404).json();
        }
        res.locals.userAuth.userId = authUser.id;
        next();
        return;
    }
    return res.status(401).json({
        message: "Invalid auth token",
    });
};
exports.authMiddleware = authMiddleware;
