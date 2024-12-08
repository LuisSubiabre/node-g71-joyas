import { Router } from "express";
import { getJoyas, getFiltros } from "../controllers/joyasController.js";
const router = Router();

router.get("/", getJoyas);
router.get("/filtros", getFiltros);

export default router;
