import React from 'react';
import '../styles/todo.css';
import { TodoItem, useTodoContext } from '../todo-context';
import { Button } from './button';

export function Todo(props: {
  todo: TodoItem;
}) {
  const { todo } = props;
  const { editTodo, removeTodo } = useTodoContext();

  return (
    <div
      className={`todo ${todo.done ? 'todo--done' : ''}`}
    >
      <div className="todo__text">
        {props.todo.text}
      </div>
      <Button
        onClick={() => {
          editTodo(todo.id, {
            ...todo,
            done: !todo.done
          });
        }}
      >
        {todo.done ? '↩️' : '✔️'}
      </Button>
      <Button onClick={() => removeTodo(todo.id)}>
        ❌
      </Button>
    </div>
  );
}