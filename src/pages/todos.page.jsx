import React, { useMemo, useState } from 'react';
import { Todo } from '../components/todo.component';
import { useTodoContext } from '../contexts/todo-context';
import styles from './todos.module.css';
import { TodoDialog } from '../components/todo-dialog.component';
import Icon from '@mdi/react';
import { mdiPlusBox } from '@mdi/js';
import { IconButton } from '../components/icon-button.component';
import FlipMove from 'react-flip-move';

function sortTodos(a, b) {
  if (a.done && !b.done) {
    return 1;
  } else if (!a.done && b.done) {
    return -1;
  }

  return b.createdAt - a.createdAt;
}

export function Todos() {
  const [showNewTodoDialog, setShowNewTodoDialog] = useState(false);
  const todoContext = useTodoContext();
  const sortedTodos = useMemo(() => (todoContext.data ?? []).sort(sortTodos), [todoContext.data]);

  return (
    <div className={styles.todo_list}>
      <div className={styles.header}>
        <h3 className={styles.header_text}>Todos</h3>
        <IconButton onClick={() => setShowNewTodoDialog(true)}>
          <Icon path={mdiPlusBox} size={1.15} />
        </IconButton>
      </div>
      <FlipMove duration={250}>
        {sortedTodos.map((t) => <Todo key={t.id} className={styles.todo} data={t} />)}
      </FlipMove>
      {showNewTodoDialog && (<TodoDialog onClose={() => setShowNewTodoDialog(false)} />)}
    </div>
  );
}