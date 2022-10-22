import { Router } from "express";

import { products } from "../controllers/productController";

const router = Router();

router.get("/", products);

export default router;
