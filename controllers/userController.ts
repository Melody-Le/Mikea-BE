import { RequestHandler } from "express";
import db from "../models";
const { user: User } = db;

export const getCategories: RequestHandler = async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Failed to fetch topCategories from database",
    });
  }
};
