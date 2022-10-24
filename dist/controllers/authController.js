"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.refresh = exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secrets_1 = require("../utils/secrets");
const models_1 = __importDefault(require("../models"));
const { user: User } = models_1.default;
const { refreshToken: RefreshTokenModel } = models_1.default;
const generatedAccessToken = (email) => {
    const accessToken = jsonwebtoken_1.default.sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 5,
        email: email,
    }, secrets_1.JWT_SECRET_ACCESS);
    return accessToken;
};
const register = async (req, res, next) => {
    let { email, password, username } = req.body;
    const passHash = await bcrypt_1.default.hash(password, 10);
    if (!username) {
        username = email.slice(0, email.indexOf("@"));
    }
    try {
        const [user, created] = await User.findOrCreate({
            where: { email },
            defaults: {
                email,
                username,
                password: passHash,
            },
        });
        if (created) {
            return res.status(201).json({ message: "New User Created", user });
        }
        else {
            return res.status(409).json("Email already exists");
        }
    }
    catch (error) {
        return res.status(500).json("Fail register");
    }
};
exports.register = register;
const login = async (req, res, next) => {
    const errMsg = "Incorrect username or password";
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            where: {
                email,
            },
        });
        console.log("user login:", user);
        if (!user) {
            return res.status(401).json({ error: errMsg });
        }
        const isPasswordCorrect = await bcrypt_1.default.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: errMsg });
        }
        const accessToken = generatedAccessToken(user.email);
        const refreshToken = jsonwebtoken_1.default.sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
            email: user.email,
        }, secrets_1.JWT_SECRET_REFRESH);
        await RefreshTokenModel.create({ token: refreshToken });
        res.json({ accessToken, refreshToken });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "failed to get user" });
    }
};
exports.login = login;
const refresh = async (req, res, next) => {
    try {
        const { refreshToken } = req.body;
        console.log("refreshToken:", refreshToken);
        const token = await RefreshTokenModel.findOne({
            where: {
                token: refreshToken,
            },
        });
        if (!token)
            return res.status(401).json({ error: "Unable to verify refresh token" });
        const verified = jsonwebtoken_1.default.verify(refreshToken, secrets_1.JWT_SECRET_REFRESH);
        if (verified) {
            const accessToken = generatedAccessToken(verified.email);
            return res.json({ accessToken });
        }
        else
            return res.status(401).json({ error: "Unable to verify refresh token" });
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({ error: "Unable to verify refresh token" });
    }
};
exports.refresh = refresh;
const logout = async (req, res, next) => {
    try {
        const { refreshToken } = req.body;
        await RefreshTokenModel.destroy({ where: { token: refreshToken } });
        return res.json({
            message: "Refresh Token deleted successfully",
        });
    }
    catch (err) {
        return res.status(409).json({
            error: "Unable to remove refresh token",
        });
    }
};
exports.logout = logout;
