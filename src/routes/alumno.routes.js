import { Router } from "express";

import { alumnoController } from "../controller/alumno.controller.js";

export const alumnoRouter = Router();

alumnoRouter.route("/")
  .post(alumnoController.crearAlumno)
  .get(alumnoController.obtenerAlumnos)

alumnoRouter.route("/:dni")
  .get(alumnoController.obtenerAlumno)
  .delete(alumnoController.eliminarAlumno)
  .put(alumnoController.editarAlumno)
