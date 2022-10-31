import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET_ACCESS, JWT_SECRET_REFRESH } from "../utils/secrets";
import { UserAttributes } from "../models/user";
import { RefreshTokenAttributes } from "../models/refreshtoken";

import db from "../models";
const { user: User } = db;
const { refreshToken: RefreshTokenModel } = db;
interface JwtPayload {
  email: string;
}
const generatedAccessToken = (email: string): string => {
  const accessToken = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 5000,
      email: email,
    },
    JWT_SECRET_ACCESS
  );

  return accessToken;
};

export const register: RequestHandler = async (req, res, next) => {
  let { email, password, username } = req.body as UserAttributes;
  const passHash = await bcrypt.hash(password, 10);
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
    } else {
      return res.status(409).json({ error: "Email already exists" });
    }
  } catch (error) {
    return res.status(500).json("Fail register");
  }
};

export const login: RequestHandler = async (req, res, next) => {
  const errMsg = "Incorrect username or password";
  const { email, password } = req.body as UserAttributes;

  // Authenticated user:
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(400).json({ error: errMsg });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: errMsg });
    }
    const accessToken = generatedAccessToken(user.email);
    const refreshToken = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 240,
        email: user.email,
      },
      JWT_SECRET_REFRESH
    );
    await RefreshTokenModel.create({ token: refreshToken });
    res.json({ accessToken, refreshToken });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "failed to get user" });
  }
};

export const refresh: RequestHandler = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    const token: RefreshTokenAttributes = await RefreshTokenModel.findOne({
      where: {
        token: refreshToken,
      },
    });
    if (!token)
      return res.status(401).json({ error: "Unable to verify refresh token" });
    // decnstructer
    const verified = jwt.verify(refreshToken, JWT_SECRET_REFRESH) as JwtPayload;
    if (verified) {
      const accessToken = generatedAccessToken(verified.email);
      return res.json({ accessToken });
    }
    return res.json({ accessToken: "random" });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Unable to verify refresh token" });
  }
};

export const logout: RequestHandler = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    await RefreshTokenModel.destroy({ where: { token: refreshToken } });
    return res.json({
      message: "Refresh Token deleted successfully",
    });
  } catch (err) {
    return res.status(409).json({
      error: "Unable to remove refresh token",
    });
  }
};
