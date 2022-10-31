import { RequestHandler } from "express";
import db from "../models";
import { where } from "sequelize";
const { user: User } = db;

export const showProfile: RequestHandler = async (req, res, next) => {
  let user = null;
  let userAuth = res.locals.userAuth;
  if (!userAuth) {
    return res.status(401);
  }
  try {
    user = await User.findOne({
      where: {
        email: userAuth.email,
      },
    });
    if (!user) {
      return res.status(404).json();
    }
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch user Profile from database",
    });
  }
};
export const editProfile: RequestHandler = async (req, res, next) => {
  let user = null;
  let userAuth = res.locals.userAuth;
  if (!userAuth) {
    return res.status(401);
  }
  try {
    await User.update(
      { ...req.body },
      {
        where: { email: userAuth.email },
      }
    );
    return res.status(200).json("Profile edited");
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to edit user Profile",
    });
  }
};
export const deleteAccount: RequestHandler = async (req, res, next) => {
  let user = null;
  let userAuth = res.locals.userAuth;
  if (!userAuth) {
    return res.status(401);
  }
  try {
    await User.destroy({ where: { email: userAuth.email } });
    return res.status(200).json("Success delete account");
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to delete account",
    });
  }
};
