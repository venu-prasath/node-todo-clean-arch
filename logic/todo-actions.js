const Todo = require('../entities/todo');

class TodoActions {
    constructor() {
        this.todos = [];
    }

    createTodo(text) {
        const todo = new Todo(text);
        this.todos.push(todo);
        return this.todos.length;
    }

    markTodoComplete(id) {
        const todo = this.todos[id];
        todo.markComplete();
    }

    getAllTodos() {
        return this.todos;
    }
}

module.exports = TodoActions;