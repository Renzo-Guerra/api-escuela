import { notaService } from "../service/nota.service.js";
import { asyncErrorHandler } from "../helpers/asyncErrorHandler.js";
import { ApplicationError } from "../helpers/ApplicationError.js";

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
});

const obtenerNotas = asyncErrorHandler(async (req, res, next) => {
  const salones = await notaService.obtenerNotas();
  res.json(salones.rows);
});

const obtenerNota = asyncErrorHandler(async (req, res, next) => {
  const pk = {
    idAlumno: Number(req.params.dniAlumno),
    idMateria: Number(req.params.idMateria),
    anio: Number(req.params.anio),
    trimestre: Number(req.params.trimestre)
  }
  const nota = await notaService.obtenerNota(pk.idAlumno, pk.idMateria, pk.anio, pk.trimestre);
  res.json(nota.rows[0]);
});

const eliminarNota = asyncErrorHandler(async (req, res, next) => {
  const pk = {
    idAlumno: Number(req.params.dniAlumno),
    idMateria: Number(req.params.idMateria),
    anio: Number(req.params.anio),
    trimestre: Number(req.params.trimestre)
  }
  const notaEliminada = await notaService.eliminarNota(pk.idAlumno, pk.idMateria, pk.anio, pk.trimestre);
  res.json(notaEliminada.rows[0]);
});

const editarNota = asyncErrorHandler(async (req, res, next) => {
  const datosViejos = {
    idAlumno: Number(req.params.dniAlumno),
    idMateria: Number(req.params.idMateria),
    anio: Number(req.params.anio),
    trimestre: Number(req.params.trimestre)
  }
  const nuevosDatos = {
    idAlumno: Number(req.body.dniAlumno),
    idMateria: Number(req.body.idMateria),
    anio: Number(req.body.anio),
    trimestre: Number(req.body.trimestre),
    nota: Number(req.body.nota)
  }
  const notaEditada = await notaService.editarNota(datosViejos.idAlumno, datosViejos.idMateria, datosViejos.anio, datosViejos.trimestre, nuevosDatos.idAlumno, nuevosDatos.idMateria, nuevosDatos.anio, nuevosDatos.trimestre, nuevosDatos.nota);
  if (notaEditada.rowCount == 0) throw new ApplicationError(400, `No se encontró el recurso dni: ${datosViejos.idAlumno}, materia: ${datosViejos.idMateria}, anio: ${datosViejos.trimestre} y anio: ${datosViejos.anio} en el server!`);
  res.json(notaEditada.rows[0]);
});

export const notaController = {
  crearNota,
  obtenerNotas,
  obtenerNota,
  eliminarNota,
  editarNota,
}