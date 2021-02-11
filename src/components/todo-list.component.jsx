import React, { useMemo, useState } from 'react';
import { Todo } from './todo.component';
import { useTodoContext } from '../todo-context';
import styles from './todo-list.module.css';
import { CrupdateTodoModal } from './crupdate-todo-modal.component';
import { Button } from './button.component';

function sortTodos(a, b) {
  if(a.done && !b.done) {
    return 1;
  } else if(!a.done && b.done) {
    return -1;
  }

  return b.createdAt - a.createdAt;
}

export function TodoList() {
  const [showNewTodoModal, setShowNewTodoModal] = useState(false);
  const todoContext = useTodoContext();
  const sortedTodos = useMemo(() => (todoContext.data ?? []).sort(sortTodos), [todoContext.data]);

  return (
    <div className={styles.todoList}>
      <div className={styles.header}>
        <h3>Todos</h3>
        {todoContext.loading ? (
          <div className={styles.loading}>Načítání..</div>
        ) : (
          <Button onClick={() => setShowNewTodoModal(true)}>
            ➕
          </Button>
        )}
      </div>
      {sortedTodos.map((t) => <Todo key={t.id} className={styles.todo} data={t} />)}
      {showNewTodoModal && (<CrupdateTodoModal onClose={() => setShowNewTodoModal(false)} />)}
    </div>
  );
}