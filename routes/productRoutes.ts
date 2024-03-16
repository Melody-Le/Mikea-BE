import { Router } from "express";

import {
  showProducts,
  showProduct,
  showProductVariants,
  showProductVariant,
  showProductById,
  editProductById,
} from "../controllers/productController";

const router = Router();

router.get("/", showProducts);
router.get("/:id", showProductById);
router.get("/:productSlug", showProduct);
router.put("/:id", editProductById);
router.get("/:productSlug/variants", showProductVariants);
router.get("/:productSlug/variants/:id", showProductVariant);

export default router;
