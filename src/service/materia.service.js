import { pool } from "../database/dbConection.js"

const crearMateria = async (nombreMateria) => {
  return pool.query(`INSERT INTO materia(nombre) VALUES ($1) RETURNING *`, [nombreMateria]);
}

const obtenerMaterias = async () => {
  return pool.query(`SELECT * FROM materia`);
}

const eliminarMateria = async (idMateria) => {
  return pool.query(`DELETE FROM materia WHERE id_materia = $1 RETURNING *`, [idMateria]);
}

const editarMateria = async (idMateria, nombreMateria) => {
  return pool.query(`UPDATE materia SET nombre = $1 WHERE id_materia = $2 RETURNING *`, [nombreMateria, idMateria]);
}

const obtenerMateria = async (idMateria) => {
  return pool.query(`SELECT * FROM materia WHERE id_materia = $1`, [idMateria]);
}

const auxExisteId = async (idMateria) => {
  return pool.query(`SELECT 1 FROM materia WHERE id_materia = $1`, [idMateria]);
}

export const materiaService = {
  crearMateria,
  obtenerMaterias,
  obtenerMateria,
  eliminarMateria,
  editarMateria,
  auxExisteId,
}