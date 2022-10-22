import { Router } from "express";

import {
  showProducts,
  showProduct,
  showProductVariants,
} from "../controllers/productController";

const router = Router();

router.get("/", showProducts);
router.get("/:productSlug", showProduct);
router.get("/:productSlug/variants", showProductVariants);

export default router;
