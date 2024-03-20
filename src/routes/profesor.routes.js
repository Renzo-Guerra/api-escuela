import { Router } from "express";

import { profesorController } from "../controller/profesor.controller.js";
import { validacionCrearProfesor } from "../validators/profesor.validators.js";
import { checkIdProfesorExiste } from "../middleware/checkIdProfesorExiste.js";

export const profesorRouter = Router();

profesorRouter.param('dni', checkIdProfesorExiste);

profesorRouter.route("/")
  .post(validacionCrearProfesor, profesorController.crearProfesor)
  .get(profesorController.obtenerProfesores);

profesorRouter.route("/:dni")
  .get(profesorController.obtenerProfesor)
  .delete(profesorController.eliminarProfesor)
  .put(validacionCrearProfesor, profesorController.editarProfesor);
