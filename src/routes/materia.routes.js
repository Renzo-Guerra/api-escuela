import { Router } from "express";
import { materiaController } from "../controller/materia.controller.js";

export const materiaRouter = Router();

materiaRouter.post("/", materiaController.agregarMateria);
materiaRouter.get("/", materiaController.obtenerMaterias);
materiaRouter.get("/:id", materiaController.obtenerMateria);
materiaRouter.delete("/:id", materiaController.eliminarMateria);
materiaRouter.put("/:id", materiaController.editarMateria);