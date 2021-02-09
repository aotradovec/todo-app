import React, { useMemo } from 'react';
import { Todo } from './todo';
import '../styles/todo-list.css';
import { useTodoContext } from '../todo-context';

export function TodoList() {
  const { todos } = useTodoContext();

  const sortedTodos = useMemo(() => {
    const sortTodos = (todo1, todo2) => (
      todo2.createdAt.getTime() - todo1.createdAt.getTime()
    );

    const completedTodos = todos.filter((todo) => todo.done);
    const notCompletedTodos = todos.filter((todo) => !todo.done);

    completedTodos.sort(sortTodos);
    notCompletedTodos.sort(sortTodos);

    return [...notCompletedTodos, ...completedTodos];
  }, [todos]);

  return (
    <div id="todo-list">
      {sortedTodos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
}