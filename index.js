import express from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";

import joyasRoute from "./routes/joyasRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

//middleware "morgan" para generar informes o reportes de alguna actividad o evento especíco que ocurra en cada una de las rutas.
app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`Servidor lanzado 🚀 en: http://localhost:${PORT} `);
});

app.use("/joyas", joyasRoute);
