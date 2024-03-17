import { Router } from "express";

import { alumnoController } from "../controller/alumno.controller.js";

export const alumnoRouter = Router();

alumnoRouter.post("/", alumnoController.crearAlumno);
alumnoRouter.get("/", alumnoController.obtenerAlumnos);
alumnoRouter.get("/:dni", alumnoController.obtenerAlumno);
alumnoRouter.delete("/:dni", alumnoController.eliminarAlumno);
alumnoRouter.put("/:dni", alumnoController.editarAlumno);
