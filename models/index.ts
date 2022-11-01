"use strict";

import { Console } from "console";
import { CLIENT_RENEG_LIMIT } from "tls";

const fs = require("fs");
require("dotenv").config();
const path = require("path");
const Sequelize = require("sequelize");
// const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config")[env];
const db: any = {};

let sequelize: any;
// sequelize = new Sequelize(process.env.DB_URL);

if (config.use_env_variable) {
  console.log("can get config");
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  console.log("can NOT get config");
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}
fs.readdirSync(__dirname)
  .filter((file: string) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
    );
  })
  .forEach((file: any) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
