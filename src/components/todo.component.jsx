import React, { useState } from 'react';
import { useTodoContext } from '../todo-context';
import { Button } from './button.component';
import { CrupdateTodoModal } from './crupdate-todo-modal.component';
import styles from './todo.module.css';

export function Todo({ data, className }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const todoContext = useTodoContext();

  function handleDoneButtonClick() {
    todoContext.update(data.id, { done: !data.done });
  }

  function handleRemoveButtonClick() {
    todoContext.remove(data.id);
  }

  return (
    <div className={[styles.todo, data.done && styles.done, className].filter(Boolean).join(' ')}>
      <div className={styles.text}>
        {data.text}
      </div>
      <Button onClick={(handleDoneButtonClick)}>
        {data.done ? '↩️' : '✔️'}
      </Button>
      <Button onClick={() => setShowEditModal(true)}>
        ✏️
      </Button>
      <Button onClick={handleRemoveButtonClick}>
        ❌
      </Button>
      {showEditModal && (<CrupdateTodoModal data={data} onClose={() => setShowEditModal(false)} />)}
    </div>
  );
}