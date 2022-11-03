import { Router } from "express";
import {getViajes, getViaje, createViaje, updateViaje, deleteViaje} from "../controllers/viaje.controller.js";

const router = Router();

router.get("/viajes", getViajes);
router.get("/viajes/:id", getViaje);
router.post("/viajesAdd", createViaje);
router.put("/viajesUpdate/:id", updateViaje);
router.delete("/viajesRemove/:id", deleteViaje);


export default router;