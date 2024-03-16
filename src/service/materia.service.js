import { pool } from "../database/dbConection.js"

const agregarMateria = async (nombreMateria) => {
  return pool.query(`INSERT INTO materia(nombre) VALUES ($1) RETURNING *`, [nombreMateria]);
}

const obtenerMaterias = async () => {
  return pool.query(`SELECT * FROM materia`);
}

export const materiaService = {
  agregarMateria,
  obtenerMaterias,
}