import React, { useState } from 'react';
import { useTodoContext } from '../contexts/todo-context';
import { classNames } from '../lib/classnames';
import { TodoDialog } from './todo-dialog.component';
import styles from './todo.module.css';
import { IconButton } from './icon-button.component';
import Icon from '@mdi/react';
import { mdiCheckCircle, mdiCircleOutline, mdiDeleteForeverOutline, mdiPencil } from '@mdi/js';
import { Loading } from './loading.component';

export const Todo = React.forwardRef(({ data, className }, ref) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const todoContext = useTodoContext();

  async function handleDoneButtonClick() {
    setLoading(true);

    await todoContext.update(data.id, { done: !data.done });

    setLoading(false);
  }

  async function handleRemoveButtonClick() {
    setLoading(true);

    await todoContext.remove(data.id);

    setLoading(false);
  }

  return (
    <div className={classNames(styles.todo, data.done && styles.done, className)} ref={ref}>
      {loading
        ? (<Loading className={styles.loading} size={1} />)
        : (
          <IconButton
            className={classNames(styles.action, styles.done_action)}
            onClick={handleDoneButtonClick}
          >
            <Icon
              path={data.done ? mdiCheckCircle : mdiCircleOutline}
              size={1}
              color="#50C878"
            />
          </IconButton>
        )
      }
      <div className={styles.text}>
        {data.text}
      </div>
      <div className={styles.time}>
        {data.createdAt.toLocaleString()}
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