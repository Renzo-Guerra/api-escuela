import { Router } from "express";
import { salonController } from "../controller/salon.controller.js";

export const salonRouter = Router();

salonRouter.post("/", salonController.crearSalon);
salonRouter.get("/", salonController.obtenerSalones);
salonRouter.get("/:id", salonController.obtenerSalon);
salonRouter.delete("/:id", salonController.eliminarSalon);
salonRouter.put("/:id", salonController.editarSalon);
