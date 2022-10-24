import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {} from "../controllers/userController";

const router = Router();

router.get("/", authMiddleware, showCart);
router.post("/add", authMiddleware, addToCart);

router.put("/:lineItemId", authMiddleware, EditCartItem);
router.delete("/:lineItemId", authMiddleware, removeFromCart);

export default router;
