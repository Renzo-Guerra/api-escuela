import { Router } from "express";

import { profesorController } from "../controller/profesor.controller.js";

export const profesorRouter = Router();

profesorRouter.route("/")
  .post(profesorController.crearProfesor)
  .get(profesorController.obtenerProfesores);

profesorRouter.route("/:dni")
  .get(profesorController.obtenerProfesor)
  .delete(profesorController.eliminarProfesor)
  .put(profesorController.editarProfesor);
