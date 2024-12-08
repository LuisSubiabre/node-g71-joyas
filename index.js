import express from "express";
import "dotenv/config";
import cors from "cors";

import joyasRoute from "./routes/joyasRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Servidor lanzado 🚀 en: http://localhost:${PORT} `);
});

app.use("/joyas", joyasRoute);
