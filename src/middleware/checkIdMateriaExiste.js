import { materiaService } from '../service/materia.service.js';
import { ApplicationError } from '../helpers/ApplicationError.js'

export const checkIdMateriaExiste = async (req, res, next) => {
  try {
    const res = await materiaService.auxExisteId(req.params.id);

    if (res.rowCount == 1) return next();

    throw new ApplicationError(404, `No se encontró el id ${req.params.dni} en el server!`);
  } catch (error) {
    next(error);
  }
}