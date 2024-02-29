import express from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo, getATodo } from '../controllers/todo.controller.js'; // Importa createTodo también
import { authMiddleware } from '../middelwares/authMiddelware.js';
import { verifyRole } from '../middelwares/roleMiddleware.js';



const router = express.Router();
router.get("/", authMiddleware, verifyRole, getTodos);
router.post("/", createTodo); 
router.put("/update/:id", updateTodo); 
router.delete("/:id", deleteTodo);
router.get("/:id",getATodo);

export default router;
