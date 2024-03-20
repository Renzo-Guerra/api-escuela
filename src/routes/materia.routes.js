import { Router } from "express";
import { materiaController } from "../controller/materia.controller.js";
import { validacionCrearMateria } from "../validators/materia.validators.js";
import { checkIdMateriaExiste } from "../middleware/checkIdMateriaExiste.js";

export const materiaRouter = Router();

materiaRouter.param('id', checkIdMateriaExiste)

materiaRouter.route("/")
  .post(validacionCrearMateria, materiaController.crearMateria)
  .get(materiaController.obtenerMaterias);

materiaRouter.route("/:id")
  .get(materiaController.obtenerMateria)
  .delete(materiaController.eliminarMateria)
  .put(validacionCrearMateria, materiaController.editarMateria);