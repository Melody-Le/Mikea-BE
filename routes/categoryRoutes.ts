import { Router } from "express";

import {
  getCategories,
  getSubCategories,
} from "../controllers/categoryController";

const router = Router();

router.get("/", getCategories);
router.get("/:catSlug", getSubCategories);

export default router;
