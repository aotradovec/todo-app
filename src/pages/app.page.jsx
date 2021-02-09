import React from 'react';
import styles from './app.module.css';
import { NewTodo } from '../components/new-todo.component';
import { TodoList } from '../components/todo-list.component';

export function App() {
  return (
    <div id={styles.appRoot}>
      <h1>Todo</h1>
      <NewTodo />
      <TodoList />
    </div>
  );
}
