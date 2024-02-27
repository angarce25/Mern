import express from "express";
import { db } from './dataBase/db.js' 
import todosRoutes from "./routes/routes.js"

const app = express();

app.use(express.json())
app.listen(3000);

db()

app.use("/todos", todosRoutes )