import db from "../models";
import "../config/config.js";
import { categories } from "../seeders/categories";

const assertDatabaseConnectionOk = async () => {
  console.log("========> Checking database connection...");
  try {
    await db.sequelize.sync();
    console.log(db.category);
    console.log(" ========> Database connection OK!");
  } catch (error) {
    console.log("xxxxxxxxx---> Unable to connect to the database:");
    console.log((error as Error).message);
    process.exit(1);
  }
};
const seed = async () => {
  // const createcategory = () => {
  //   categories.map((cat) => {
  //     db.category.create(cat);
  //   });
  // };
  // createcategory();
  // await db.category.create({
  //   categoryLabel: "hehe",
  //   categorySlug: "hheee",
  //   parentCategoryId: null,
  // });
};
async function init() {
  await assertDatabaseConnectionOk();
  console.log(db.category);
}

init();
