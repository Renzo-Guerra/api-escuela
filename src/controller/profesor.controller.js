import { profesorService } from "../service/profesor.service.js";
import { ApplicationError } from "../helpers/ApplicationError.js";
import { asyncErrorHandler } from "../helpers/asyncErrorHandler.js"

const crearProfesor = asyncErrorHandler(async (req, res, next) => {
  const profesor = {
    dni: Number(req.body.dni),
    nombre: req.body.nombre.toLowerCase().trim(),
    apellido: req.body.apellido.toLowerCase().trim(),
  }

  const profesorCreado = await profesorService.crearProfesor(profesor.dni, profesor.nombre, profesor.apellido);
  res.json(profesorCreado.rows[0]);
})

const obtenerProfesores = asyncErrorHandler(async (req, res, next) => {
  const profesores = await profesorService.obtenerProfesores();
  res.json(profesores.rows);
})

const obtenerProfesor = asyncErrorHandler(async (req, res, next) => {
  const idProfesor = Number(req.params.dni);
  const profesor = await profesorService.obtenerProfesor(idProfesor);
  res.json(profesor.rows[0]);
})

const eliminarProfesor = asyncErrorHandler(async (req, res, next) => {
  const idProfesor = Number(req.params.dni);
  const profesorEliminado = await profesorService.eliminarProfesor(idProfesor);
  res.json(profesorEliminado.rows[0]);
});

const editarProfesor = asyncErrorHandler(async (req, res, next) => {
  const profesor = {
    dniActual: Number(req.params.dni),
    dniNuevo: Number(req.body.dni),
    nombre: req.body.nombre.toLowerCase().trim(),
    apellido: req.body.apellido.toLowerCase().trim()
  }

  const profesorEditado = await profesorService.editarProfesor(profesor.dniActual, profesor.dniNuevo, profesor.nombre, profesor.apellido);
  res.json(profesorEditado.rows[0]);
});

const asignarCursoAProfesor = asyncErrorHandler(async (req, res, next) => {
  const datos = {
    dniProfesor: Number(req.params.dni),
    idMateria: Number(req.body.idMateria),
    idSalon: Number(req.body.idSalon)
  }

  const cursoProfesor = await profesorService.asignarCursoAProfesor(datos.dniProfesor, datos.idMateria, datos.idSalon);
  res.json(cursoProfesor.rows[0]);
});

const eliminarCursoAProfesor = asyncErrorHandler(async (req, res, next) => {
  const pks = {
    dniProfesor: Number(req.params.dni),
    idMateria: Number(req.params.idMateria),
    idSalon: Number(req.params.idSalon)
  }

  const cursoProfesorEliminado = await profesorService.eliminarCursoAProfesor(pks.dniProfesor, pks.idMateria, pks.idSalon);
  res.json(cursoProfesorEliminado.rows[0]);
});

export const profesorController = {
  crearProfesor,
  obtenerProfesores,
  obtenerProfesor,
  eliminarProfesor,
  editarProfesor,
  asignarCursoAProfesor,
  eliminarCursoAProfesor,
}