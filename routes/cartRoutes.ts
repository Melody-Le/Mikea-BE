import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  showCart,
  addToCart,
  EditCartItem,
  removeFromCart,
} from "../controllers/cartController";

const router = Router();

router.get("/", authMiddleware, showCart);
router.post("/add", authMiddleware, addToCart);

router.put("/:lineItemId", authMiddleware, EditCartItem);
router.delete("/:lineItemId", authMiddleware, removeFromCart);

export default router;
