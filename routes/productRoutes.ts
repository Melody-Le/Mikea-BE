import { Router } from "express";

import {
  showProducts,
  showProduct,
  showProductVariants,
  showProductVariant,
} from "../controllers/productController";

const router = Router();

router.get("/", showProducts);
router.get("/:productSlug", showProduct);
router.get("/:productSlug/variants", showProductVariants);
router.get("/:productSlug/variants/:id", showProductVariant);

export default router;
