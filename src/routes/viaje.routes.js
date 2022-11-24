import { Router } from "express";
import {getViajes, getViaje, createViaje, updateViaje, deleteViaje, getViajeOne, getFiltroViajeFecha} from "../controllers/viaje.controller.js";

const router = Router();

router.get("/viajes", getViajes);
router.get("/viajes/:id", getViaje);
router.get("/viajeOne/:id", getViajeOne);
router.get("/viajesFecha/:fecha", getFiltroViajeFecha)
router.post("/viajesAdd", createViaje);
router.put("/viajesUpdate/:id", updateViaje);
router.delete("/viajesRemove/:id", deleteViaje);


export default router;