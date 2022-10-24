// const express = require("express");
import express, { Request, Response, NextFunction } from "express";
import "./config/config.js";
import db from "./models";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes";
import productRoutes from "./routes/productRoutes";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import cartRoutes from "./routes/cartRoutes";

const app = express();
const PORT = process.env.PORT || 8800;

/// Connect to database by using sequelize
const assertDatabaseConnectionOk = async () => {
  console.log("========> Checking database connection...");
  try {
    await db.sequelize.sync();
    console.log(" ========> Database connection OK!");
  } catch (error) {
    console.log("xxxxxxxxx---> Unable to connect to the database:");
    console.log((error as Error).message);
    process.exit();
  }
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/cart", cartRoutes);

async function init() {
  await assertDatabaseConnectionOk();

  app.listen(PORT, () =>
    console.log(`========> Server started at port ${PORT}`)
  );
}

init();
