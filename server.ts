// const express = require("express");
import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import bodyParser from "body-parser";
import db from "./models";

import { categories } from "./seeds/categories";

const app = express();
const PORT = process.env.PORT || 8800;

/// Connect to database by using sequelize
async function assertDatabaseConnectionOk() {
  console.log("========> Checking database connection...");
  try {
    await db.sequelize.sync();
    console.log(" ========> Database connection OK!");
  } catch (error) {
    console.log("xxxxxxxxx---> Unable to connect to the database:");
    console.log((error as Error).message); //NOTE: Read about generic type
    process.exit(1);
  }
}

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// const createCategories = () => {
//   categories.map((cat) => {
//     db.Categories.create(cat);
//   });
// };
// createCategories();

async function init() {
  await assertDatabaseConnectionOk();

  const newCat = await db.category.create({
    // id: 2,
    categoryLabel: "Chair And Sofas",
    categorySlug: "chair-and-sofas",
    parentCategory: null,
  });

  app.listen(PORT, () =>
    console.log(`========> Server started at port ${PORT}`)
  );
}

init();
