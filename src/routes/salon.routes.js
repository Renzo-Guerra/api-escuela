import { Router } from "express";
import { salonController } from "../controller/salon.controller.js";

export const salonRouter = Router();

salonRouter.route("/")
  .post(salonController.crearSalon)
  .get(salonController.obtenerSalones);

salonRouter.route("/:id")
  .get(salonController.obtenerSalon)
  .delete(salonController.eliminarSalon)
  .put(salonController.editarSalon);
