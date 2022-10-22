import { Router } from "express";

import { showProducts, showProduct } from "../controllers/productController";

const router = Router();

router.get("/", showProducts);
router.get("/:productSlug", showProduct);

export default router;
