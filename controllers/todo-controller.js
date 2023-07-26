const TodoActions = require('../logic/todo-actions');
const todoActions = new TodoActions();

const createTodo = (req, res) => {
    try {
        const text = req.body.text;
        todoActions.createTodo(text);

        return res.send({
            message: 'Todo created successfully'
        });
    } catch (error) {
        return res.status(400).send({message: error.message });
    }
}

const getTodos = (req, res) => {
    try {
        const todos = todoActions.getAllTodos();
        return res.send({todos});
    } catch (error) {
        return res.status(400).send({message: error.message }); 
    }
}

const completeTodos = (req, res) => {
    try {
        const id = req.params.id;
        todoActions.markTodoComplete(id);
        return res.end({
            message: 'Todo completed successfully'
        })
    } catch (error) {
        return res.status(400).send({message: error.message });
    }
}

module.exports = {
    createTodo,
    getTodos,
    completeTodos
}