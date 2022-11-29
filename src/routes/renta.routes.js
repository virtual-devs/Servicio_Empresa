import { Router } from "express";
import { getRentas, createRenta, updateRentas, deleteRentas, getRenta, getFiltroRenta, getRentaOne, getRentaPrecio, updateRentasDisp, getRentasDisp } from "../controllers/renta.controller.js";
import {verifyToken } from "../middlewares/authJwt.js";
const router = Router();

router.get("/rentas", getRentas);
router.get("/rentasDisponibles", getRentasDisp);
router.get("/rentas/:id", getRenta);
router.get("/rentasOne/:id", getRentaOne);
router.get("/rentas/:asientos/:transmision/:aire", getFiltroRenta);
router.get("/rentasPrecio", getRentaPrecio);
router.post("/rentasAdd", verifyToken, createRenta);
router.put("/rentasUpdate/:id", verifyToken, updateRentas);
router.put("/rentaDispUpdate/:id", updateRentasDisp);
router.delete("/rentasRemove/:id", verifyToken, deleteRentas);

export default router;
