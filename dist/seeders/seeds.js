"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../models"));
require("../config/config.js");
const assertDatabaseConnectionOk = async () => {
    console.log("========> Checking database connection...");
    try {
        await models_1.default.sequelize.sync();
        console.log(models_1.default.category);
        console.log(" ========> Database connection OK!");
    }
    catch (error) {
        console.log("xxxxxxxxx---> Unable to connect to the database:");
        console.log(error.message);
        process.exit(1);
    }
};
const seed = async () => {
};
async function init() {
    await assertDatabaseConnectionOk();
    console.log(models_1.default.category);
}
init();
