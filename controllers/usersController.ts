import { RequestHandler } from "express";
import db from "../models";
import { where } from "sequelize";
const { user: User } = db;
import { UserAttributes } from "../models/user";
import { isTypeNode } from "typescript";
import { error } from "console";

export const showAllUsers: RequestHandler = async (req, res, next) => {
  console.log("--------------------------------showAllUser");
  try {
    let users = [];
    users = await User.findAll();
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

export const showUserById: RequestHandler = async (req, res, next) => {
  let user = null;
  // let userAuth = res.locals.userAuth;
  // if (!userAuth) {
  //   return res.status(401);
  // }
  const { id } = req.params;
  try {
    user = await User.findByPk(id);
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

export const editUserById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { address, username } = req.body;
    const phone = Number(req.body.phone);
    const postalCode = Number(req.body.postalCode);
    // console.log(typeof phone);
    // console.log(typeof address);
    // console.log(typeof postalCode);
    // console.log(typeof username);
    if (
      typeof phone === "number" &&
      // typeof address === "string" &&
      typeof postalCode === "number" &&
      typeof username === "string"
    ) {
      const returnData = await User.update(
        { phone, address, postalCode },
        {
          where: { id: id },
          returning: true,
          plain: true,
        }
      );
      const updatedUser = returnData[1].dataValues;
      console.log("---------a is: ,", updatedUser);
      return res.status(200).json(updatedUser);
    } else {
      return res.status(400).json({
        error: "Failed validate",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to edit user Profile",
    });
  }
};
export const deleteUserById: RequestHandler = async (req, res, next) => {
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
