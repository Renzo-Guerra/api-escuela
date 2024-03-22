import { salonService } from "../service/salon.service.js";
import { asyncErrorHandler } from "../helpers/asyncErrorHandler.js";

const crearSalon = asyncErrorHandler(async (req, res, next) => {
  const nombreSalon = req.body.nombre.toLowerCase().trim();
  const salonCreado = await salonService.crearSalon(nombreSalon);
  res.json(salonCreado.rows[0]);
})

const obtenerSalones = asyncErrorHandler(async (req, res, next) => {
  const salones = await salonService.obtenerSalones();
  res.json(salones.rows);
})

const obtenerSalon = asyncErrorHandler(async (req, res, next) => {
  const idSalon = Number(req.params.id);
  const salon = await salonService.obtenerSalon(idSalon);
  res.json(salon.rows[0]);
})

const eliminarSalon = asyncErrorHandler(async (req, res, next) => {
  const idSalon = Number(req.params.id);
  const salonEliminado = await salonService.eliminarSalon(idSalon);
  res.json(salonEliminado.rows[0]);
})

const editarSalon = asyncErrorHandler(async (req, res, next) => {
  const idSalon = Number(req.params.id);
  const nombreSalon = req.body.nombre.toLowerCase().trim();
  const salonEditado = await salonService.editarSalon(idSalon, nombreSalon);
  res.json(salonEditado.rows[0]);
})

const obtenerAlumnosDelSalon = asyncErrorHandler(async (req, res, next) => {
  const idSalon = Number(req.params.id);

  const alumnos = await salonService.obtenerAlumnosDelSalon(idSalon);
  res.json(alumnos.rows);
});

export const salonController = {
  crearSalon,
  obtenerSalones,
  obtenerSalon,
  eliminarSalon,
  editarSalon,
  obtenerAlumnosDelSalon,
}