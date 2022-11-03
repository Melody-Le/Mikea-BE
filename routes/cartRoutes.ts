import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  findOrCreateCart,
  showCart,
  addItemToCart,
  updateCartItem,
  removeFromCart,
} from "../controllers/cartController";

const router = Router();

router.get("/", authMiddleware, showCart);
// router.post("/create", authMiddleware, findOrCreateCart);
//
router.post("/add/:variantId", authMiddleware, addItemToCart);

router.put("/:variantId", authMiddleware, updateCartItem);
router.delete("/:variantId", authMiddleware, removeFromCart);

export default router;
