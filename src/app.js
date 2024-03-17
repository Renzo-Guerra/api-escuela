import express from "express";
import dotenv from "dotenv";

import errorHandler from "./middleware/errorHandler.js";
import { materiaRouter } from "./routes/materia.routes.js";
import { salonRouter } from "./routes/salon.routes.js";

dotenv.config();

const applicationPort = process.env.APPLICATION_PORT || 5000;

const app = express();

app.use(express.json());

// Aqui iran las rutas
app.use("/api/v1/materia", materiaRouter);
app.use("/api/v1/salon", salonRouter);

app.use(errorHandler);

app.listen(applicationPort, () => {
  console.log(`Application running on port ${applicationPort}...`);
});
