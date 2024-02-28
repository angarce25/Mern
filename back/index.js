import express from "express";
import { db } from './dataBase/db.js' 
import todosRoutes from "./routes/routes.js"
import authRoutes from "./routes/authRoutes.js"

const app = express();

//rutas de uso
app.use(express.json())
app.use("/auth", authRoutes)
app.use("/todos", todosRoutes )

//puerto
app.listen(3000), console.log("Se conecta al servidor");
//conexión a la base de datos
db()