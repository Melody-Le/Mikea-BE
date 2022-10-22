"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./config/config.js");
const models_1 = __importDefault(require("./models"));
const cors_1 = __importDefault(require("cors"));
const catRoutes_1 = __importDefault(require("./routes/catRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8800;
const assertDatabaseConnectionOk = async () => {
    console.log("========> Checking database connection...");
    try {
        await models_1.default.sequelize.sync();
        console.log(" ========> Database connection OK!");
    }
    catch (error) {
        console.log("xxxxxxxxx---> Unable to connect to the database:");
        console.log(error.message);
        process.exit();
    }
};
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "*" }));
app.use("/categories", catRoutes_1.default);
async function init() {
    await assertDatabaseConnectionOk();
    app.listen(PORT, () => console.log(`========> Server started at port ${PORT}`));
}
init();
