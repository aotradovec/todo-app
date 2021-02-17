import React, { useMemo, useState } from 'react';
import { Modal } from './modal.component';
import styles from './todo-dialog.module.css';
import { Button } from './button.component';
import { TextField } from './text-field.component';
import { useTodoContext } from '../contexts/todo-context';
import { IconButton } from './icon-button.component';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

export function TodoDialog({ data, onClose }) {
  const [todoText, setTodoText] = useState(data?.text ?? '');
  const todoContext = useTodoContext();
  const isCreateMode = useMemo(() => !data, [!!data]);

  function crupdateTodoItem() {
    const todoItem = {
      text: todoText.trim()
    };

    if (isCreateMode) {
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
    <Modal onClickAway={onClose}>
      <div className={styles.dialog}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {isCreateMode ? 'Nový úkol' : 'Upravit úkol'}
          </h2>
          <div>
            <IconButton
              onClick={onClose}
            >
              <Icon path={mdiClose} size={1} />
            </IconButton>
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
    </Modal>
  );
}