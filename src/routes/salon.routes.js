import { Router } from "express";
import { salonController } from "../controller/salon.controller.js";
import { validacionCrearSalon } from "../validators/salon.validators.js";

export const salonRouter = Router();

salonRouter.route("/")
  .post(validacionCrearSalon, salonController.crearSalon)
  .get(salonController.obtenerSalones);

salonRouter.route("/:id")
  .get(salonController.obtenerSalon)
  .delete(salonController.eliminarSalon)
  .put(validacionCrearSalon, salonController.editarSalon);
