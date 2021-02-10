import React, { useState } from 'react';
import styles from './app.module.css';
import { TodoList } from '../components/todo-list.component';
import { Button } from '../components/button.component';
import { CrupdateTodoModal } from '../components/crupdate-todo-modal.component';

export function App() {
  const [showNewTodoModal, setShowNewTodoModal] = useState(false);

  function handleNewTodoModalOpen() {
    setShowNewTodoModal(true);
  }

  function handleNewTodoModalClose() {
    setShowNewTodoModal(false);
  }

  return (
    <div id={styles.app}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Todo
        </h1>
        <div>
          <Button onClick={handleNewTodoModalOpen}>
            ➕
          </Button>
        </div>
      </div>
      <TodoList />
      {showNewTodoModal && (<CrupdateTodoModal onClose={handleNewTodoModalClose} />)}
    </div>
  );
}
