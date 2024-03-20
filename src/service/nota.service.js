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

const obtenerNota = async (idAlumno, idMateria, anio, trimestre) => {
  return pool.query(`SELECT * FROM nota WHERE id_alumno = $1 AND id_materia = $2 AND anio = $3 AND trimestre = $4`,
    [idAlumno, idMateria, anio, trimestre]);
}

const eliminarNota = async (idAlumno, idMateria, anio, trimestre) => {
  return pool.query(`DELETE FROM nota WHERE id_alumno = $1 AND id_materia = $2 AND anio = $3 AND trimestre = $4 RETURNING *`,
    [idAlumno, idMateria, anio, trimestre]);
}

const editarNota = async (idAlumnoActual, idAlumno, idMateria, anio, trimestre) => {
  return pool.query(`UPDATE nota SET id_alumno = $2 id_materia = $3 anio = $4 trimestre = $5 WHERE id_alumno = $1 RETURNING *`),
    [idAlumnoActual, idAlumno, idMateria, anio, trimestre];
}

export const notaService = {
  crearNota,
  obtenerNotas,
  obtenerNota,
  eliminarNota,
  editarNota,
}