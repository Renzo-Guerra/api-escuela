import { Router } from "express";
import { notaController } from "../controller/nota.controller.js";
import { validacionCrearNota } from "../validators/nota.validators.js";

export const notaRouter = Router();

notaRouter.route('/')
  .get(notaController.obtenerNotas)
  .post(validacionCrearNota, notaController.crearNota);

notaRouter.route('/dniAlumno/:idAlumno/idMateria/:idMateria/anio/:anio/trimestre/:trimestre')
  .get(notaController.obtenerNota)
  .delete(notaController.eliminarNota)
