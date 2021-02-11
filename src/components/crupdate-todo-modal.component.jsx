import React, { useMemo, useState } from 'react';
import { Portal } from './portal.component';
import styles from './crupdate-todo-modal.module.css';
import { Button } from './button.component';
import { TextField } from './text-field.component';
import { useTodoContext } from '../contexts/todo-context';

export function CrupdateTodoModal({ 
  data,
  onClose
}) {
  const [todoText, setTodoText] = useState(data?.text ?? '');
  const todoContext = useTodoContext();
  const isCreateMode = useMemo(() => !data, [!!data]);

  function crupdateTodoItem() {
    const todoItem = {
      text: todoText.trim()
    };

    if(isCreateMode) {
      todoContext.create(todoItem);
    } else {
      todoContext.update(data.id, { ...data, ...todoItem });
    }

    setTodoText('');
    onClose();
  }

  function handleTodoTextChange(event) {
    setTodoText(event.target.value);
  }

  return (
    <Portal onClickAway={onClose}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {isCreateMode ? 'Nový úkol' : 'Upravit úkol'}
          </h2>
          <div>
            <Button
              className={styles.closeButton}
              onClick={onClose}
            >
            ❌
            </Button>
          </div>
        </div>
        <div className={styles.content}>
          <TextField
            className={styles.textField}
            label={isCreateMode ? 'Přidejte nový úkol..' : undefined}
            value={todoText}
            onChange={handleTodoTextChange}
          />
        </div>
        <div className={styles.actions}>
          <Button onClick={crupdateTodoItem}>
            {isCreateMode ? 'Přidat' : 'Upravit'}
          </Button>
        </div>
      </div>
    </Portal>
  );
}