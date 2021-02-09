import React, { useState } from 'react';
import { TextField } from './text-field';
import { Button } from './button';
import '../styles/new-todo.css';
import { useTodoContext } from '../todo-context';

export function NewTodo() {
  const [newTodoText, setNewTodoText] = useState('');

  const { addTodo } = useTodoContext();

  function addNewTodoItem() {
    addTodo({
      text: newTodoText,
      done: false,
      createdAt: new Date()
    });
    setNewTodoText('');
  }

  return (
    <div id="new-todo">
      <TextField
        id="new-todo__text-field"
        label="Přidejte nový úkol.."
        value={newTodoText}
        onChange={({ target }) => setNewTodoText(target.value)}
        onKeyPress={({ key }) => {
          if (key === 'Enter') {
            addNewTodoItem();
          }
        }}
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
