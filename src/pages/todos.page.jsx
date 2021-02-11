import React, { useState } from 'react';
import { Button } from '../components/button.component';
import { CrupdateTodoModal } from '../components/crupdate-todo-modal.component';
import { TodoList } from '../components/todo-list.component';
import styles from './todos.module.css';

export function Todos() {
  const [showNewTodoModal, setShowNewTodoModal] = useState(false);

  return (
    <div>
      <div className={styles.header}>
        <Button onClick={() => setShowNewTodoModal(true)}>
          ➕
        </Button>
      </div>
      <TodoList />
      {showNewTodoModal && (<CrupdateTodoModal onClose={() => setShowNewTodoModal(false)} />)}
    </div>
  );
}