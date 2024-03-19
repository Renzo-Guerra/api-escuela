import { alumnoService } from "../service/alumno.service.js";
import { ApplicationError } from "../error/ApplicationError.js";

const crearAlumno = async (req, res, next) => {
  try {
    const alumno = {
      dni: Number(req.body.dni),
      nombre: req.body.nombre.toLowerCase().trim(),
      apellido: req.body.apellido.toLowerCase().trim(),
      idSalon: Number(req.body.idSalon),
    }

    const alumnoCreado = await alumnoService.crearAlumno(alumno.dni, alumno.nombre, alumno.apellido, alumno.idSalon);
    res.json(alumnoCreado.rows[0]);
  } catch (error) {
    next(error);
  }
}

const obtenerAlumnos = async (req, res, next) => {
  try {
    const alumnos = await alumnoService.obtenerAlumnos();
    res.json(alumnos.rows);
  } catch (error) {
    next(error);
  }
}

const obtenerAlumno = async (req, res, next) => {
  try {
    const idAlumno = Number(req.params.dni);

    const alumno = await alumnoService.obtenerAlumno(idAlumno);
    if (alumno.rowCount == 0) throw new ApplicationError(404, `No existe alumno con el dni '${idAlumno}'.`);

    res.json(alumno.rows[0]);
  } catch (error) {
    next(error);
  }
}

const eliminarAlumno = async (req, res, next) => {
  try {
    const idAlumno = Number(req.params.dni);

    const alumnoEliminado = await alumnoService.eliminarAlumno(idAlumno);
    if (alumnoEliminado.rowCount == 0) throw new ApplicationError(404, `No existe alumno con el dni '${idAlumno}'.`);
    res.json(alumnoEliminado.rows[0]);
  } catch (error) {
    next(error);
  }
}

const editarAlumno = async (req, res, next) => {
  try {
    const alumno = {
      dniActual: Number(req.params.dni),
      dniNuevo: Number(req.body.dni),
      nombre: req.body.nombre.toLowerCase().trim(),
      apellido: req.body.apellido.toLowerCase().trim(),
      idSalon: Number(req.body.idSalon),
    }

    const alumnoEditado = await alumnoService.editarAlumno(alumno.dniActual, alumno.dniNuevo, alumno.nombre, alumno.apellido, alumno.idSalon);
    if (alumnoEditado.rowCount == 0) throw new ApplicationError(404, `No existe alumno con el dni '${alumno.dniActual}'.`);
    res.json(alumnoEditado.rows[0]);
  } catch (error) {
    next(error);
  }
}

export const alumnoController = {
  crearAlumno,
  obtenerAlumnos,
  obtenerAlumno,
  eliminarAlumno,
  editarAlumno,
}