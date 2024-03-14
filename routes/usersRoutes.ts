import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  showAllUsers,
  showUserById,
  editUserById,
  deleteUserById,
} from "../controllers/usersController";

const router = Router();

router.get("/", showAllUsers);

router.get("/:id", showUserById);

router.put("/:id", editUserById);
router.delete("/:id", deleteUserById);

export default router;
