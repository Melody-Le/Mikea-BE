import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET_ACCESS, JWT_SECRET_REFRESH } from "../utils/secrets";
import { UserAttributes } from "../models/user";
// import {
//   NotFoundError,
//   BadRequestError,
//   InternalServerError,
// } from "../utils/apiError";
// import ApiError from "../utils/apiError";

import db from "../models";
const { user: User } = db;
const generatedAccessToken = (username: string): string => {
  const accessToken = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 5,
      username: { username },
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
      return res.status(409).json("Email already exists");
    }
  } catch (error) {
    return res.status(500).json("Fail register");
  }
};

export const login: RequestHandler = async (req, res, next) => {
  const errMsg = "Incorrect username or password";
  const { username, password } = req.body as UserAttributes;

  // Authenticated user:
  try {
    const user = await User.findOne({
      where: {
        username,
      },
    });
    if (!user) {
      return res.status(401).json({ error: errMsg });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ error: errMsg });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "failed to get user" });
  }
  const accessToken = generatedAccessToken(username);
  const refreshToken = jwt.sign({ username: username }, JWT_SECRET_REFRESH);
  res.json({ accessToken, refreshToken });
};

export const refresh: RequestHandler = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
  } catch (error) {
    console.log(error);
    return res.status(500).json({});
  }
};

export const logout: RequestHandler = async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({});
  }
};
