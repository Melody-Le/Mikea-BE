import { Router } from "express";

import {
  getCategories,
  getSubCategories,
  getCategoryByIds,
} from "../controllers/categoryController";

const router = Router();

router.get("/", getCategories);
router.get("/:id", getCategoryByIds);
router.get("/:catSlug", getSubCategories);

export default router;
