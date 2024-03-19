import { Router } from "express";

import { alumnoController } from "../controller/alumno.controller.js";
import { validacionCrearAlumno } from "../validators/alumno.validators.js";

export const alumnoRouter = Router();

alumnoRouter.route("/")
  .post(validacionCrearAlumno, alumnoController.crearAlumno)
  .get(alumnoController.obtenerAlumnos)

alumnoRouter.route("/:dni")
  .get(alumnoController.obtenerAlumno)
  .delete(alumnoController.eliminarAlumno)
  .put(alumnoController.editarAlumno)
