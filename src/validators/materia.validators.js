import { check } from "express-validator";
import { validarResultado } from "../helpers/validation.helpers.js";

export const validacionCrearMateria = [
  check("nombre")
    .exists()
    .not()
    .isEmpty({ ignore_whitespace: true }),
  (req, res, next) => {
    validarResultado(req, res, next);
  }
];