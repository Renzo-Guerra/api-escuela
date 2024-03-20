import { profesorService } from '../service/profesor.service.js';
import { ApplicationError } from '../helpers/ApplicationError.js'

export const checkIdProfesorExiste = async (req, res, next) => {
  try {
    const res = await profesorService.auxExisteId(req.params.dni);

    if (res.rowCount == 1) return next();

    throw new ApplicationError(404, `No se encontró el id ${req.params.dni} en el server!`);
  } catch (error) {
    next(error);
  }
}