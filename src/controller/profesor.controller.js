import { profesorService } from "../service/profesor.service.js";
import { ApplicationError } from "../helpers/ApplicationError.js";

const crearProfesor = async (req, res, next) => {
  try {
    const profesor = {
      dni: Number(req.body.dni),
      nombre: req.body.nombre.toLowerCase().trim(),
      apellido: req.body.apellido.toLowerCase().trim(),
    }

    const profesorCreado = await profesorService.crearProfesor(profesor.dni, profesor.nombre, profesor.apellido);
    res.json(profesorCreado.rows[0]);
  } catch (error) {
    next(error);
  }
}

const obtenerProfesores = async (req, res, next) => {
  try {
    const profesores = await profesorService.obtenerProfesores();
    res.json(profesores.rows);
  } catch (error) {
    next(error);
  }
}

const obtenerProfesor = async (req, res, next) => {
  try {
    const idProfesor = Number(req.params.dni);

    const profesor = await profesorService.obtenerProfesor(idProfesor);
    if (profesor.rowCount == 0) throw new ApplicationError(404, `No existe profesor con el dni '${idAlumno}'.`);

    res.json(profesor.rows[0]);
  } catch (error) {
    next(error);
  }
}

const eliminarProfesor = async (req, res, next) => {
  try {
    const idProfesor = Number(req.params.dni);

    const profesorEliminado = await profesorService.eliminarProfesor(idProfesor);
    if (profesorEliminado.rowCount == 0) throw new ApplicationError(404, `No existe profesor con el dni '${idAlumno}'.`);
    res.json(profesorEliminado.rows[0]);
  } catch (error) {
    next(error);
  }
}

const editarProfesor = async (req, res, next) => {
  try {
    const profesor = {
      dniActual: Number(req.params.dni),
      dniNuevo: Number(req.body.dni),
      nombre: req.body.nombre.toLowerCase().trim(),
      apellido: req.body.apellido.toLowerCase().trim()
    }

    const profesorEditado = await profesorService.editarProfesor(profesor.dniActual, profesor.dniNuevo, profesor.nombre, profesor.apellido);
    if (profesorEditado.rowCount == 0) throw new ApplicationError(404, `No existe profesor con el dni '${profesor.dniActual}'.`);
    res.json(profesorEditado.rows[0]);
  } catch (error) {
    next(error);
  }
}

export const profesorController = {
  crearProfesor,
  obtenerProfesores,
  obtenerProfesor,
  eliminarProfesor,
  editarProfesor,
}