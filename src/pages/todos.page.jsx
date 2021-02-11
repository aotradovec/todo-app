import React, { useMemo, useState } from 'react';
import { Todo } from '../components/todo.component';
import { useTodoContext } from '../contexts/todo-context';
import styles from './todos.module.css';
import { Button } from '../components/button.component';
import { TodoDialog } from '../components/todo-dialog.component';

function sortTodos(a, b) {
  if(a.done && !b.done) {
    return 1;
  } else if(!a.done && b.done) {
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
        <h3>Todos</h3>
        {todoContext.loading
          ? (<div className={styles.loading}>Načítání..</div>)
          : (<Button onClick={() => setShowNewTodoDialog(true)}>➕</Button>)
        }
      </div>
      {sortedTodos.map((t) => <Todo key={t.id} className={styles.todo} data={t} />)}
      {showNewTodoDialog && (<TodoDialog onClose={() => setShowNewTodoDialog(false)} />)}
    </div>
  );
}