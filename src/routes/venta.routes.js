import { Router } from "express";
import { getHistorialR, getHistorialV, getHistorialRE, getHistorialVE, createHistorialR, createHistorialV } from "../controllers/venta.controller.js";

const router = Router();

router.get("/historialR", getHistorialR);
router.get("/historialV", getHistorialV);
router.get("/historialRE/:id", getHistorialRE);
router.get("/historialRV/:id", getHistorialVE);
router.post("/historialRAdd", createHistorialR);
router.post("/historialVAdd", createHistorialV);


export default router;
