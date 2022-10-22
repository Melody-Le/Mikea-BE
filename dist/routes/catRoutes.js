"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const catController_1 = require("../controllers/catController");
const router = (0, express_1.Router)();
router.get("/", catController_1.getCategories);
router.get("/:catSlug", catController_1.getSubCategories);
exports.default = router;
