import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  showOrders,
  showOrderByOrderId,
  createOrder,
} from "../controllers/orderController";

const router = Router();

router.get("/", authMiddleware, showOrders);
router.get("/:orderId", authMiddleware, showOrderByOrderId);
//
router.post("/", authMiddleware, createOrder);

export default router;
