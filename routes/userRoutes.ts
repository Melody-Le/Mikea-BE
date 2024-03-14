import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  showProfile,
  editProfile,
  deleteAccount,
  showUsers,
} from "../controllers/userController";

const router = Router();

router.get("/all", showUsers);

router.get("/", authMiddleware, showProfile);

router.put("/", authMiddleware, editProfile);
router.delete("/", authMiddleware, deleteAccount);

export default router;
