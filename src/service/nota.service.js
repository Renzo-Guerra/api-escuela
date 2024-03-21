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

const editarNota = async (dniAlumnoActual, idMateriaActual, anioActual, trimestreActual, idAlumnoNuevo, idMateriaNuevo, anioNuevo, trimestreNuevo, nota) => {
  return await pool.query(`
    UPDATE nota
    SET id_alumno = $5, id_materia = $6, anio = $7, trimestre = $8, nota = $9 
    WHERE id_alumno = $1 AND id_materia = $2 AND anio = $3 AND trimestre = $4 RETURNING *`,
    [dniAlumnoActual, idMateriaActual, anioActual, trimestreActual, idAlumnoNuevo, idMateriaNuevo, anioNuevo, trimestreNuevo, nota]);
}

export const notaService = {
  crearNota,
  obtenerNotas,
  obtenerNota,
  eliminarNota,
  editarNota,
}