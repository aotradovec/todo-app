import React, { useState } from 'react';
import { useTodoContext } from '../contexts/todo-context';
import { classNames } from '../lib/classnames';
import { TodoDialog } from './todo-dialog.component';
import styles from './todo.module.css';
import { IconButton } from './icon-button.component';
import Icon from '@mdi/react';
import { mdiBackupRestore, mdiCheck, mdiDelete, mdiPencil } from '@mdi/js';

export const Todo = React.memo(function({ data, className }) {
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
      <IconButton className={styles.action} onClick={handleDoneButtonClick}>
        <Icon path={data.done ? mdiBackupRestore : mdiCheck} size={1} />
      </IconButton>
      <IconButton className={styles.action} onClick={() => setShowEditDialog(true)}>
        <Icon path={mdiPencil} size={1} />
      </IconButton>
      <IconButton className={styles.action} onClick={handleRemoveButtonClick}>
        <Icon path={mdiDelete} size={1} />
      </IconButton>
      {showEditDialog && (<TodoDialog data={data} onClose={() => setShowEditDialog(false)} />)}
    </div>
  );
});