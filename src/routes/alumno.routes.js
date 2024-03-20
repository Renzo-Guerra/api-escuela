import { Router } from "express";

import { alumnoController } from "../controller/alumno.controller.js";
import { validacionCrearAlumno } from "../validators/alumno.validators.js";
import { checkIdAlumnoExiste } from "../middleware/checkIdAlumnoExiste.js";

export const alumnoRouter = Router();

alumnoRouter.param('dni', checkIdAlumnoExiste);

alumnoRouter.route("/")
  .post(validacionCrearAlumno, alumnoController.crearAlumno)
  .get(alumnoController.obtenerAlumnos)

alumnoRouter.route("/:dni")
  .get(alumnoController.obtenerAlumno)
  .delete(alumnoController.eliminarAlumno)
  .put(validacionCrearAlumno, alumnoController.editarAlumno)
