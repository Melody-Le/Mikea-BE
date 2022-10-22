import { RequestHandler } from "express";
import db from "../models";
const { user: User } = db;
import { getErrorMessage } from "../utils/errors.util";

export const register: RequestHandler = async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch topCategories from database",
    });
  }
};

export const login: RequestHandler = async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch topCategories from database",
    });
  }
};

export const refresh: RequestHandler = async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch topCategories from database",
    });
  }
};

export const logout: RequestHandler = async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).send(getErrorMessage(error));
  }
};
