import React, { useState } from 'react';
import { useTodoContext } from '../contexts/todo-context';
import { classNames } from '../lib/classnames';
import { Button } from './button.component';
import { TodoDialog } from './todo-dialog.component';
import styles from './todo.module.css';

export function Todo({ data, className }) {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const todoContext = useTodoContext();

  function handleDoneButtonClick() {
    todoContext.update(data.id, { done: !data.done });
  }

  function handleRemoveButtonClick() {
    todoContext.remove(data.id);
  }

  return (
    <div className={classNames(styles.todo, data.done && styles.done, className)}>
      <div className={styles.text}>
        {data.text}
      </div>
      <Button onClick={(handleDoneButtonClick)}>
        {data.done ? '↩️' : '✔️'}
      </Button>
      <Button onClick={() => setShowEditDialog(true)}>
        ✏️
      </Button>
      <Button onClick={handleRemoveButtonClick}>
        ❌
      </Button>
      {showEditDialog && (<TodoDialog data={data} onClose={() => setShowEditDialog(false)} />)}
    </div>
  );
}