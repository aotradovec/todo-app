import React, { useState } from 'react';
import { TextField } from './text-field.component';
import { Button } from './button.component';
import styles from './new-todo.module.css';
import { useTodoContext } from '../todo-context';

export function NewTodo() {
  const [newTodoText, setNewTodoText] = useState('');
  const { addTodo } = useTodoContext();

  function addNewTodoItem() {
    addTodo({ text: newTodoText });
    setNewTodoText('');
  }

  function handleTodoTextChange(event) {
    setNewTodoText(event.target.value);
  }

  function handleTodoTextKeyPress(event) {
    if(event.key === 'Enter') {
      addNewTodoItem();
    }
  }

  return (
    <div className={styles.newTodo}>
      <TextField
        className={styles.textField}
        label="Přidejte nový úkol.."
        value={newTodoText}
        onChange={handleTodoTextChange}
        onKeyPress={handleTodoTextKeyPress}
      />
      <Button
        className={styles.button}
        onClick={addNewTodoItem}
      >
        ➕
      </Button>
    </div>
  );
}
