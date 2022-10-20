// const express = require("express");
import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import bodyParser from "body-parser";
import db from "./models";

// import { category } from "./seeds/category";

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

// const createcategory = () => {
//   category.map((cat) => {
//     db.category.create(cat);
//   });
// };
// createcategory();

async function init() {
  await assertDatabaseConnectionOk();

  const newCat = await db.category.create({
    categoryLabel: "kitchen",
    categorySlug: "kitchen",
    parentCategory: null,
  });

  app.listen(PORT, () =>
    console.log(`========> Server started at port ${PORT}`)
  );
}

init();
