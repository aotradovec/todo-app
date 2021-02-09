import React from 'react';
import './styles/app.css';
import { NewTodo } from './components/new-todo';
import { TodoList } from './components/todo-list';

export function App() {
  return (
    <div id="app">
      <h1>Todo</h1>
      <NewTodo />
      <TodoList />
    </div>
  );
}
