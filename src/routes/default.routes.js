import { Router } from "express";
import { ApplicationError } from "../error/ApplicationError.js";

export const defaultRouter = Router();

defaultRouter.use('/', (req, res, next) => {
  const error = new ApplicationError(404, `No se puede encontrar la ruta ${req.url} en el server!`);
  next(error);
});