import { Router } from "express";

import { profesorController } from "../controller/profesor.controller.js";

export const profesorRouter = Router();

profesorRouter.post("/", profesorController.crearProfesor);
profesorRouter.get("/", profesorController.obtenerProfesores);
profesorRouter.get("/:dni", profesorController.obtenerProfesor);
profesorRouter.delete("/:dni", profesorController.eliminarProfesor);
profesorRouter.put("/:dni", profesorController.editarProfesor);
