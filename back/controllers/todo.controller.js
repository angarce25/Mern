import { Todo } from '../models/todo.model.js';

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "No muestra datos del servidor" }, error);
    }
};

export const createTodo = async (req, res) => {
    const { title, task, type } = req.body;
    try {
        const todo = new Todo({
            title: title,
            task: task,
            type: type
        });
        console.log(todo);
        
        await todo.save();
        res.status(200).json({ message: "Todo ok", todo });
    } catch (error) {
        res.status(500).json({ message: "No muestra datos del servidor" }, error);
    }
};