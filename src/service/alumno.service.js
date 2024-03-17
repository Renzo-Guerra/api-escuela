import { pool } from "../database/dbConection.js";

const crearAlumno = async (dniAlumno, nombre, apellido, idSalon) => {
  return pool.query(`INSERT INTO alumno VALUES($1, $2, $3, $4) RETURNING *`, [dniAlumno, nombre, apellido, idSalon]);
}

const obtenerAlumnos = async () => {
  return pool.query(`SELECT * FROM alumno`);
}

const obtenerAlumno = async (idAlumno) => {
  return pool.query(`SELECT * FROM alumno WHERE dni_alumno = $1`, [idAlumno]);
}

const eliminarAlumno = async (idAlumno) => {
  return pool.query(`DELETE FROM alumno WHERE dni_alumno = $1 RETURNING *`, [idAlumno]);
}

const editarAlumno = async (viejoDniAlumno, nuevoDniAlumno, nombre, apellido, idSalon) => {
  return pool.query(`UPDATE alumno SET dni_alumno = $2, nombre = $3, apellido = $4, id_salon = $5 WHERE id_salon = $1 RETURNING *`,
    [viejoDniAlumno, nuevoDniAlumno, nombre, apellido, idSalon]);
}

export const alumnoService = {
  crearAlumno,
  obtenerAlumnos,
  obtenerAlumno,
  eliminarAlumno,
  editarAlumno,
}