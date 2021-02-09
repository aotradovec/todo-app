import React, { useState } from 'react';
import { TextField } from './text-field.component';
import { Button } from './button.component';
import '../styles/new-todo.css';
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
    <div id="new-todo">
      <TextField
        id="new-todo__text-field"
        label="Přidejte nový úkol.."
        value={newTodoText}
        onChange={handleTodoTextChange}
        onKeyPress={handleTodoTextKeyPress}
      />
      <Button
        id="new-todo__button"
        onClick={addNewTodoItem}
      >
        ➕
      </Button>
    </div>
  );
}
