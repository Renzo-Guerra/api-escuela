import { pool } from "../database/dbConection.js";

const crearSalon = async (nombre) => {
  return pool.query(`INSERT INTO salon(nombre) VALUES($1) RETURNING *`, [nombre]);
}

const obtenerSalones = async () => {
  return pool.query(`SELECT * FROM salon`);
}

const obtenerSalon = async (id) => {
  return pool.query(`SELECT * FROM salon WHERE id_salon = $1`, [id]);
}

const eliminarSalon = async (id) => {
  return pool.query(`DELETE FROM salon WHERE id_salon = $1 RETURNING *`, [id]);
}

const editarSalon = async (id, nombre) => {
  return pool.query(`UPDATE salon SET nombre = $1 WHERE id_salon = $2 RETURNING *`, [nombre, id]);
}

const auxExisteId = async (idSalon) => {
  return pool.query(`SELECT 1 FROM salon WHERE id_salon = $1`, [idSalon]);
}

const obtenerAlumnosDelSalon = async (idSalon) => {
  return pool.query(`
    SELECT a.dni_alumno, a.nombre, a.apellido
    FROM alumno a
    WHERE a.id_salon = $1
  `, [idSalon]);
}

export const salonService = {
  crearSalon,
  obtenerSalones,
  obtenerSalon,
  eliminarSalon,
  editarSalon,
  auxExisteId,
  obtenerAlumnosDelSalon,
}