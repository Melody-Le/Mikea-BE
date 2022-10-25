import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET_ACCESS } from "../utils/secrets";
import db from "../models";
const { user: User } = db;

export const authMiddleware: RequestHandler = async (req, res, next) => {
  // get Authentication header value
  const authzHeader = req.header("Authorization"); //NOTE: TO GET THE TOKEN FROM FRONTEND
  if (!authzHeader) {
    return res.status(401).json({
      message: "Authentication details empty",
    });
  }

  // check for "Bearer "
  if (authzHeader.slice(0, 7) !== "Bearer ") {
    return res.status(401).json({
      message: "Invalid auth type",
    });
  }

  // get value after "Bearer ", the actual JWT token
  const token = authzHeader.slice(7);
  if (token.length === 0) {
    return res.status(401).json({
      message: "Invalid auth token",
    });
  }

  // set global var userAuth if JWT is valid
  const verified = jwt.verify(token, JWT_SECRET_ACCESS);
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
