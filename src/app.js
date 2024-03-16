import express from "express";
import ErrorHandler from "./middleware/errorHandler";
import dotenv from "dotenv";
dotenv.config();

const applicationPort = process.env.APPLICATION_PORT || 5000;

const app = express();

app.use(express.json());

// Aqui iran las rutas

app.use(ErrorHandler);

app.use(applicationPort, () => {
  console.log(`Application running on port ${applicationPort}...`);
});
