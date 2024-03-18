import { Router } from "express";
import { materiaController } from "../controller/materia.controller.js";

export const materiaRouter = Router();

materiaRouter.route("/")
  .post(materiaController.crearMateria)
  .get(materiaController.obtenerMaterias);

materiaRouter.route("/:id")
  .get(materiaController.obtenerMateria)
  .delete(materiaController.eliminarMateria)
  .put(materiaController.editarMateria);