import { Router } from "express";
import { ApplicationError } from "../error/ApplicationError.js";

export const defaultRouter = Router();

defaultRouter.use('/', (req, res, next) => {
  console.log("default router");
  try {
    throw new ApplicationError(404, `No se puede encontrar la ruta ${req.url} en el server!`);
  } catch (error) {
    return next(error);
  }
});