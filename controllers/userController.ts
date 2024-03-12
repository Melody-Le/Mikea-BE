import { RequestHandler } from "express";
import db from "../models";
import { where } from "sequelize";
const { user: User } = db;
import { UserAttributes } from "../models/user";
import { isTypeNode } from "typescript";

export const showUsers: RequestHandler = async (req, res, next) => {
  console.log("haha");

  try {
    let users = [];
    users = await User.findAll();
    // console.log(users.every((user: any) => user instanceof User));
    console.log("haha");
    if (!users) {
      return res.status(404).json();
    }
    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch users Profile from database",
    });
  }
};

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
    const { phone, address, postalCode, username } = req.body;
    if (
      // typeof phone === "number" &&
      // typeof address === "string" &&
      // typeof postalCode === "number" &&
      // typeof username === "string"
      1
    ) {
      console.log("===================> good");
      await User.update(
        { ...req.body },
        {
          where: { email: userAuth.email },
        }
      );
      return res.status(200).json("Profile edited");
    }
    console.log("===================>   BAD");
    return res.status(400).json({
      error: "Failed validate",
    });
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
