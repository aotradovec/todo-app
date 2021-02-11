import React, { useMemo } from 'react';
import { Todo } from './todo.component';
import { useTodoContext } from '../todo-context';
import styles from './todo-list.module.css';

function sortTodos(a, b) {
  if(a.done && !b.done) {
    return 1;
  } else if(!a.done && b.done) {
    return -1;
  }

  return b.createdAt - a.createdAt;
}

export function TodoList() {
  const { todos } = useTodoContext();
  const sortedTodos = useMemo(() => todos.sort(sortTodos), [todos]);

  return (
    <div className={styles.todoList}>
      {sortedTodos.map((t) => <Todo key={t.id} className={styles.todo} todo={t} />)}
    </div>
  );
}