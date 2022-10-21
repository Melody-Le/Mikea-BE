// const express = require("express");
import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import bodyParser from "body-parser";
import db from "./models";
import SequelizeSlugify from "sequelize-slugify";

import { categories } from "./seeders/categories";
import slug from "slug";

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
//   categories.map((cat) => {
//     db.category.create(cat);
//   });
// };
// createcategory();

async function init() {
  await assertDatabaseConnectionOk();

  await db.category.create({
    categoryLabel: "Study Table",
    categorySlug: "study-table",
  });

  app.listen(PORT, () =>
    console.log(`========> Server started at port ${PORT}`)
  );
}

init();
