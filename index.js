const express = require('express');
const todoControllers = require('./controllers/todo-controller.js');

const app = express();
const port = 3000;

app.post('/todos', todoControllers.createTodo);
app.get('/todos', todoControllers.getTodos);
app.put('/todos/:id', todoControllers.completeTodos);

app.listen(port);