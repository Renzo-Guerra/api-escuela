import { materiaService } from "../service/materia.service.js";
import { ApplicationError } from "../error/ApplicationError.js";

const crearMateria = async (req, res, next) => {
  try {
    const materia = req.body.nombre.toLowerCase().trim();

    const response = await materiaService.crearMateria(materia);
    res.json(response.rows[0]);
  } catch (error) {
    next(error);
  }
}

const obtenerMaterias = async (req, res, next) => {
  try {
    const materias = await materiaService.obtenerMaterias();
    res.json(materias.rows);
  } catch (error) {
    next(error);
  }
}

const eliminarMateria = async (req, res, next) => {
  try {
    // Verificando que el argumento pasado no sea null, de paso, en caso de haber pasado una string la pasa a numero
    const idMateria = Number(req.params.id);
    const materiaEliminada = await materiaService.eliminarMateria(idMateria);
    // Verificando que el id haya eliminado algo
    if (materiaEliminada.rowCount == 0) throw new ApplicationError(404, `No existe materia con el id '${idMateria}'.`);

    res.json(materiaEliminada[0]);
  } catch (error) {
    next(error);
  }
}

const editarMateria = async (req, res, next) => {
  try {
    // Verificando que el argumento pasado no sea null, de paso, en caso de haber pasado una string la pasa a numero
    const idMateria = Number(req.params.id);
    // Pasamos a minuscula y quitamos los espacios en blanco del comienzo y fin.
    const nombreMateria = req.body.nombre.toLowerCase().trim();

    if (nombreMateria.length == 0) throw new ApplicationError(400, "No puede ingresar texto vacio!");

    const materiaEditada = await materiaService.editarMateria(idMateria, nombreMateria);

    if (materiaEditada.rowCount == 0) throw new ApplicationError(404, `No existe materia con el id '${idMateria}'.`);

    res.json(materiaEditada.rows[0]);
  } catch (error) {
    next(error);
  }
}

const obtenerMateria = async (req, res, next) => {
  try {
    // Verificando que el argumento pasado no sea null, de paso, en caso de haber pasado una string la pasa a numero
    const idMateria = Number(req.params.id);
    const materia = await materiaService.obtenerMateria(idMateria);

    // Verificando que el id haya eliminado algo
    if (materia.rowCount == 0) throw new ApplicationError(404, `No existe materia con el id '${idMateria}'.`);

    res.json(materia.rows[0]);
  } catch (error) {
    next(error);
  }
}

export const materiaController = {
  crearMateria,
  obtenerMaterias,
  obtenerMateria,
  eliminarMateria,
  editarMateria,
}