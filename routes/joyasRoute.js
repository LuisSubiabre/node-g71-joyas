import { Router } from "express";
import {
  getJoyasController,
  getFiltrosController,
} from "../controllers/joyasController.js";
const router = Router();

router.get("/", getJoyasController);
router.get("/filtros", getFiltrosController);

export default router;
