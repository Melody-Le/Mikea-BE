import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  findOrCreateCart,
  showCart,
  addToCart,
  editCartItem,
  removeFromCart,
} from "../controllers/cartController";

const router = Router();

router.get("/", authMiddleware, showCart);
router.post("/create", authMiddleware, findOrCreateCart);
//
router.post("/add", authMiddleware, addToCart);

router.put("/:variantId", authMiddleware, editCartItem);
router.delete("/:variantId", authMiddleware, removeFromCart);

export default router;
