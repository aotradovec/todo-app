import React from 'react';
import { Todo } from './todo.component';
import { useTodoContext } from '../todo-context';
import styles from './todo-list.module.css';

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
        className={styles.todo}
        todo={todo}
      />
    );
  }

  return (
    <div className={styles.todoList}>
      {todos.sort(sortTodos).map(renderTodo)}
    </div>
  );
}