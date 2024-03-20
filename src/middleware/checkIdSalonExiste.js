import { salonService } from '../service/salon.service.js';
import { ApplicationError } from '../helpers/ApplicationError.js'

export const checkIdSalonExiste = async (req, res, next) => {
  try {
    const res = await salonService.auxExisteId(req.params.id);

    if (res.rowCount == 1) return next();

    throw new ApplicationError(404, `No se encontró el id ${req.params.id} en el server!`);
  } catch (error) {
    next(error);
  }
}