import { pool } from "../database/dbConection.js";

const crearNota = async (idAlumno, idMateria, anio, trimestre, nota) => {
  return pool.query(`
    INSERT INTO nota 
    VALUES($1, $2, $3, $4, $5) RETURNING *`,
    [idAlumno, idMateria, anio, trimestre, nota]);
}

const obtenerNotas = async () => {
  return pool.query(`SELECT * FROM nota`);
}

export const notaService = {
  crearNota,
  obtenerNotas,
}