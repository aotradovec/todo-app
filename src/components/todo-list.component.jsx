import React from 'react';
import { Todo } from './todo.component';
import '../styles/todo-list.css';
import { useTodoContext } from '../todo-context';

function sortTodos(a, b) {
  if(a.done && !b.done) {
    return 1;
  } else if(!a.done && b.done) {
    return -1;
  }

  return b.createdAt - a.createdAt;
}

export function TodoList() {
  const { todos } = useTodoContext();

  function renderTodo(todo) {
    return (
      <Todo
        key={todo.id}
        todo={todo}
      />
    );
  }

  return (
    <div id="todo-list">
      {todos.sort(sortTodos).map(renderTodo)}
    </div>
  );
}