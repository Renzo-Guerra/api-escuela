import pkg from 'pg';
import dotenv from 'dotenv';  // Permite que el Pool autoconfigure los valores de la db del .env 
dotenv.config();
const { Pool } = pkg;

export const pool = new Pool({
  allowExitOnIdle: true
});

try {
  pool.query("SELECT NOW()");
  console.log('Base de datos conectada exitosamente!');
} catch (error) {
  console.error("Hubo un error al conectarse a la abse de datos!");
  console.log(error);
}