import { Router } from "express";

import {
  login,
  register,
  refresh,
  logout,
} from "../controllers/authController";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/refresh", refresh);
router.delete("/logout", logout);

export default router;
