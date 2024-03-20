import express from "express";
import dotenv from "dotenv";

import errorHandler from "./middleware/errorHandler.js";
import { materiaRouter } from "./routes/materia.routes.js";
import { salonRouter } from "./routes/salon.routes.js";
import { alumnoRouter } from "./routes/alumno.routes.js";
import { profesorRouter } from "./routes/profesor.routes.js";
import { notaRouter } from "./routes/nota.routes.js";
import { defaultRouter } from "./routes/default.routes.js";
dotenv.config();

const applicationPort = process.env.APPLICATION_PORT || 5000;

const app = express();

app.use(express.json());

// Aqui iran las rutas
app.use("/api/v1/materia", materiaRouter);
app.use("/api/v1/salon", salonRouter);
app.use("/api/v1/alumno", alumnoRouter);
app.use("/api/v1/profesor", profesorRouter);
app.use("/api/v1/nota", notaRouter);
app.all('*', defaultRouter);
app.use(errorHandler);

app.listen(applicationPort, () => {
  console.log(`Application running on port ${applicationPort}...`);
});
