import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  showProfile,
  editProfile,
  deleteAccount,
} from "../controllers/userController";

const router = Router();

router.get("/", authMiddleware, showProfile);

router.put("/", authMiddleware, editProfile);
router.delete("/", authMiddleware, deleteAccount);

export default router;
