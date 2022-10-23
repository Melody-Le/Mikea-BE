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
const generatedAccessToken = (username) => {
    const accessToken = jsonwebtoken_1.default.sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 5,
        username: { username },
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
    const { username, password } = req.body;
    try {
        const user = await User.findOne({
            where: {
                username,
            },
        });
        if (!user) {
            return res.status(401).json({ error: errMsg });
        }
        const isPasswordCorrect = await bcrypt_1.default.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: errMsg });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "failed to get user" });
    }
    const accessToken = generatedAccessToken(username);
    const refreshToken = jsonwebtoken_1.default.sign({ username: username }, secrets_1.JWT_SECRET_REFRESH);
    res.json({ accessToken, refreshToken });
};
exports.login = login;
const refresh = async (req, res, next) => {
    try {
        const { refreshToken } = req.body;
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({});
    }
};
exports.refresh = refresh;
const logout = async (req, res, next) => {
    try {
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({});
    }
};
exports.logout = logout;
