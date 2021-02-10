import React, { useState } from 'react';
import { useTodoContext } from '../todo-context';
import { Button } from './button.component';
import { CrupdateTodoModal } from './crupdate-todo-modal.component';
import styles from './todo.module.css';

export function Todo({ todo, className }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const { editTodo, removeTodo } = useTodoContext();

  function handleDoneButtonClick() {
    editTodo(todo.id, { done: !todo.done });
  }

  function handleEditButtonClick() {
    setShowEditModal(true);
  }

  function handleEditModalClose() {
    setShowEditModal(false);
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
      <Button onClick={handleEditButtonClick}>
        ✏️
      </Button>
      <Button onClick={handleRemoveButtonClick}>
        ❌
      </Button>
      {showEditModal && (
        <CrupdateTodoModal
          todo={todo}
          onClose={handleEditModalClose}
        />
      )}
    </div>
  );
}