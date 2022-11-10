import { Router } from "express";
import { getRentas, createRenta, updateRentas, deleteRentas, getRenta, getFiltroRenta, getRentaOne } from "../controllers/renta.controller.js";

const router = Router();

router.get("/rentas", getRentas);
router.get("/rentas/:id", getRenta);
router.get("/rentasOne/:id", getRentaOne);
router.get("/rentas/:asientos/:transmision/:aire", getFiltroRenta);
router.post("/rentasAdd", createRenta);
router.put("/rentasUpdate/:id", updateRentas);
router.delete("/rentasRemove/:id", deleteRentas);

export default router;
