import { alumnoService } from "../service/alumno.service.js";
import { asyncErrorHandler } from "../helpers/asyncErrorHandler.js";

const crearAlumno = asyncErrorHandler(async (req, res, next) => {
  const alumno = {
    dni: Number(req.body.dni),
    nombre: req.body.nombre.toLowerCase().trim(),
    apellido: req.body.apellido.toLowerCase().trim(),
    idSalon: Number(req.body.idSalon),
  }

  const alumnoCreado = await alumnoService.crearAlumno(alumno.dni, alumno.nombre, alumno.apellido, alumno.idSalon);
  res.json(alumnoCreado.rows[0]);
});

const obtenerAlumnos = asyncErrorHandler(async (req, res, next) => {
  const alumnos = await alumnoService.obtenerAlumnos();
  res.json(alumnos.rows);
})

const obtenerAlumno = asyncErrorHandler(async (req, res, next) => {
  const idAlumno = Number(req.params.dni);
  const alumno = await alumnoService.obtenerAlumno(idAlumno);
  res.json(alumno.rows[0]);
})

const eliminarAlumno = asyncErrorHandler(async (req, res, next) => {
  const idAlumno = Number(req.params.dni);
  const alumnoEliminado = await alumnoService.eliminarAlumno(idAlumno);
  res.json(alumnoEliminado.rows[0]);
})

const editarAlumno = asyncErrorHandler(async (req, res, next) => {
  const alumno = {
    dniActual: Number(req.params.dni),
    dniNuevo: Number(req.body.dni),
    nombre: req.body.nombre.toLowerCase().trim(),
    apellido: req.body.apellido.toLowerCase().trim(),
    idSalon: Number(req.body.idSalon),
  }

  const alumnoEditado = await alumnoService.editarAlumno(alumno.dniActual, alumno.dniNuevo, alumno.nombre, alumno.apellido, alumno.idSalon);
  res.json(alumnoEditado.rows[0]);
})

export const alumnoController = {
  crearAlumno,
  obtenerAlumnos,
  obtenerAlumno,
  eliminarAlumno,
  editarAlumno,
}