import React, { useState } from 'react';
import { useTodoContext } from '../contexts/todo-context';
import { classNames } from '../lib/classnames';
import { TodoDialog } from './todo-dialog.component';
import styles from './todo.module.css';
import { IconButton } from './icon-button.component';
import Icon from '@mdi/react';
import { mdiCheckCircle, mdiCheckCircleOutline, mdiDeleteForeverOutline, mdiPencil } from '@mdi/js';

export const Todo = React.forwardRef(({ data, className }, ref) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const todoContext = useTodoContext();

  function handleDoneButtonClick() {
    todoContext.update(data.id, { done: !data.done });
  }

  function handleRemoveButtonClick() {
    todoContext.remove(data.id);
  }

  return (
    <div className={classNames(styles.todo, data.done && styles.done, className)} ref={ref}>
      <IconButton
        className={classNames(styles.action, styles.done_action)}
        onClick={handleDoneButtonClick}
      >
        <Icon
          path={data.done ? mdiCheckCircle : mdiCheckCircleOutline}
          size={1}
          color="#50C878"
        />
      </IconButton>
      <div className={styles.text}>
        {data.text}
      </div>
      <IconButton
        className={styles.action}
        disabled={data.done}
        onClick={() => setShowEditDialog(true)}
      >
        <Icon path={mdiPencil} size={1} color="#634919" />
      </IconButton>
      <IconButton
        className={styles.action}
        disabled={data.done}
        onClick={handleRemoveButtonClick}
      >
        <Icon path={mdiDeleteForeverOutline} size={1} color="red" />
      </IconButton>
      {showEditDialog && (<TodoDialog data={data} onClose={() => setShowEditDialog(false)} />)}
    </div>
  );
});