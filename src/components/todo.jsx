import React from 'react';
import '../styles/todo.css';
import { useTodoContext } from '../todo-context';
import { Button } from './button';

export function Todo({ todo }) {
  const { editTodo, removeTodo } = useTodoContext();

  function handleDoneButtonClick() {
    editTodo(todo.id, { done: !todo.done });
  }

  function handleRemoveButtonClick() {
    removeTodo(todo.id);
  }

  return (
    <div className={`todo ${todo.done ? 'todo--done' : ''}`}>
      <div className="todo__text">
        {todo.text}
      </div>
      <Button onClick={handleDoneButtonClick}>
        {todo.done ? '↩️' : '✔️'}
      </Button>
      <Button onClick={handleRemoveButtonClick}>
        ❌
      </Button>
    </div>
  );
}