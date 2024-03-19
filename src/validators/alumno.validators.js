import { check } from "express-validator";
import { validarResultado } from "../helpers/validation.helpers.js";

export const validacionCrearAlumno = [
  check("dni")
    .exists()
    .isNumeric(),
  check("nombre")
    .exists()
    .not()
    .isEmpty({ ignore_whitespace: true }),
  check("apellido")
    .exists()
    .not()
    .isEmpty({ ignore_whitespace: true }),
  check("idSalon")
    .exists()
    .isNumeric(),
  (req, res, next) => {
    validarResultado(req, res, next);
  }
];