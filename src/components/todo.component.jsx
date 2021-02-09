import React from 'react';
import { useTodoContext } from '../todo-context';
import { Button } from './button.component';
import styles from './todo.module.css';

export function Todo({ todo, className }) {
  const { editTodo, removeTodo } = useTodoContext();

  function handleDoneButtonClick() {
    editTodo(todo.id, { done: !todo.done });
  }

  function handleRemoveButtonClick() {
    removeTodo(todo.id);
  }

  return (
    <div className={[styles.todo, todo.done && styles.done, className].filter(Boolean).join(' ')}>
      <div className={styles.text}>
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