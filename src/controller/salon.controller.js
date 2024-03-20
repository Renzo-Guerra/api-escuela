import { salonService } from "../service/salon.service.js";
import { ApplicationError } from "../error/ApplicationError.js";

const crearSalon = async (req, res, next) => {
  try {
    const nombreSalon = req.body.nombre.toLowerCase().trim();

    const salonCreado = await salonService.crearSalon(nombreSalon);
    res.json(salonCreado.rows[0]);
  } catch (error) {
    next(error);
  }
}

const obtenerSalones = async (req, res, next) => {
  try {
    const salones = await salonService.obtenerSalones();
    res.json(salones.rows);
  } catch (error) {
    next(error);
  }
}

const obtenerSalon = async (req, res, next) => {
  try {
    const idSalon = Number(req.params.id);

    const salon = await salonService.obtenerSalon(idSalon);
    if (salon.rowCount == 0) throw new ApplicationError(404, `No existe salon con el id '${idSalon}'.`);

    res.json(salon.rows[0]);
  } catch (error) {
    next(error);
  }
}

const eliminarSalon = async (req, res, next) => {
  try {
    const idSalon = Number(req.params.id);

    const salonEliminado = await salonService.eliminarSalon(idSalon);
    if (salonEliminado.rowCount == 0) throw new ApplicationError(404, `No existe salon con el id '${idSalon}'.`);
    res.json(salonEliminado.rows[0]);
  } catch (error) {
    next(error);
  }
}

const editarSalon = async (req, res, next) => {
  try {
    const idSalon = Number(req.params.id);
    const nombreSalon = req.body.nombre;

    const salonEditado = await salonService.editarSalon(idSalon, nombreSalon);
    if (salonEditado.rowCount == 0) throw new ApplicationError(404, `No existe salon con el id '${idSalon}'.`);
    res.json(salonEditado.rows[0]);
  } catch (error) {
    next(error);
  }
}

export const salonController = {
  crearSalon,
  obtenerSalones,
  obtenerSalon,
  eliminarSalon,
  editarSalon,
}