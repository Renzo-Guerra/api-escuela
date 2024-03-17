import { pool } from "../database/dbConection.js";

const crearProfesor = async (dniProfesor, nombre, apellido) => {
  return pool.query(`INSERT INTO profesor VALUES($1, $2, $3) RETURNING *`,
    [dniProfesor, nombre, apellido]);
}

const obtenerProfesores = async () => {
  return pool.query(`SELECT * FROM profesor`);
}

const obtenerProfesor = async (idProfesor) => {
  return pool.query(`SELECT * FROM profesor WHERE dni_profesor = $1`,
    [idProfesor]);
}

const eliminarProfesor = async (idProfesor) => {
  return pool.query(`DELETE FROM profesor WHERE dni_profesor = $1 RETURNING *`,
    [idProfesor]);
}

const editarProfesor = async (viejoDniProfesor, nuevoDniProfesor, nombre, apellido) => {
  return pool.query(`UPDATE profesor SET dni_profesor = $2, nombre = $3, apellido = $4 WHERE dni_profesor = $1 RETURNING *`,
    [viejoDniProfesor, nuevoDniProfesor, nombre, apellido]);
}

export const profesorService = {
  crearProfesor,
  obtenerProfesores,
  obtenerProfesor,
  eliminarProfesor,
  editarProfesor,
}