import { notaService } from "../service/nota.service.js";
import { asyncErrorHandler } from "../helpers/asyncErrorHandler.js";

const crearNota = asyncErrorHandler(async (req, res, next) => {
  const nota = {
    idAlumno: Number(req.body.dniAlumno),
    idMateria: Number(req.body.idMateria),
    anio: Number(req.body.anio),
    trimestre: Number(req.body.trimestre),
    nota: Number(req.body.nota),
  }

  const notaCreada = await notaService.crearNota(nota.idAlumno, nota.idMateria, nota.anio, nota.trimestre, nota.nota);
  res.json(notaCreada.rows[0]);
})

const obtenerNotas = asyncErrorHandler(async (req, res, next) => {
  const salones = await notaService.obtenerNotas();
  res.json(salones.rows);
})

export const notaController = {
  crearNota,
  obtenerNotas,
}