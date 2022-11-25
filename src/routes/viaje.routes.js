import { Router } from "express";
import {getViajes, getViaje, createViaje, updateViaje, deleteViaje, getViajeOne, getFiltroViajeFecha, getFiltroViaje, updateViajeAsientos, getViajesDisp} from "../controllers/viaje.controller.js";

const router = Router();

router.get("/viajes", getViajes);
router.get("/viajes/:id", getViaje);
router.get("/viajesDisponibles", getViajesDisp);
router.get("/viajeOne/:id", getViajeOne);
router.get("/viajesFecha/:fecha", getFiltroViajeFecha)
router.get("/viajes/:origen/:destino/:fecha", getFiltroViaje)
router.post("/viajesAdd", createViaje);
router.put("/viajesUpdate/:id", updateViaje);
router.put("/viajesUpdate/:id/:ocupado", updateViajeAsientos);
router.delete("/viajesRemove/:id", deleteViaje);


export default router;