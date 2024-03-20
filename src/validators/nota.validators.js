import { check } from "express-validator";
import { validarResultado } from "../helpers/validation.helpers.js";

export const validacionCrearNota = [
  check("idAlumno")
    .exists()
    .isInt(),
  check("idMateria")
    .exists()
    .isInt(),
  check("anio")
    .exists()
    .isInt({ max: new Date().getFullYear() }),
  check("trimestre")
    .exists()
    .isInt({ min: 1, max: 3 }),
  check("nota")
    .exists()
    .isNumeric()
    .isFloat({ min: 1, max: 10 }),
  (req, res, next) => {
    validarResultado(req, res, next);
  }
];