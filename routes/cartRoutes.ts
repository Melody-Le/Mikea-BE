import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  showCart,
  addItemToCart,
  updateCartItem,
  removeFromCart,
  getLineItems,
} from "../controllers/cartController";

const router = Router();

router.get("/", authMiddleware, showCart);
router.get("/lineItems", authMiddleware, getLineItems);
router.post("/add/:variantId", authMiddleware, addItemToCart);
router.put("/:variantId", authMiddleware, updateCartItem);
router.delete("/:variantId", authMiddleware, removeFromCart);

export default router;
