"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const models_1 = __importDefault(require("./models"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8800;
/// Connect to database by using sequelize
async function assertDatabaseConnectionOk() {
    console.log("Checking database connection...");
    try {
        await models_1.default.sequelize.sync();
        console.log("Database connection OK!");
    }
    catch (error) {
        console.log("Unable to connect to the database:");
        console.log(error.message); //NOTE: Read about generic type
        process.exit(1);
    }
}
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
async function init() {
    await assertDatabaseConnectionOk();
    app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
}
init();
