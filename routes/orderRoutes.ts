import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  showOrders,
  showOneOrder,
  createOrder,
} from "../controllers/orderController";

const router = Router();

router.get("/", authMiddleware, showOrders);
router.get("/:orderId", authMiddleware, showOneOrder);
//
router.post("/", authMiddleware, createOrder);

export default router;
