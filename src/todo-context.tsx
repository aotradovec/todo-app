import { createContext, PropsWithChildren, useContext, useState } from 'react';
import React from 'react';

export interface TodoItem {
  id: number;
  text: string;
  done: boolean;
  createdAt: Date;
}

export interface TodoContext {
  todos: TodoItem[];
  addTodo: (todo: Omit<TodoItem, 'id'>) => void;
  editTodo: (id: TodoItem['id'], todo: Omit<TodoItem, 'id'>) => void;
  removeTodo: (id: TodoItem['id']) => void;
}

let todoIdGenerator = 1;

const TodoContext = createContext<TodoContext>({
  todos: [],
  addTodo: () => ({}),
  editTodo: () => ({}),
  removeTodo: () => ({})
});
export const useTodoContext = () => useContext(TodoContext);

export function TodoContextProvider(props: PropsWithChildren<unknown>) {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo: (todo) => {
          setTodos((val) => (
            [...val, { id: todoIdGenerator++, ...todo }]
          ));
        },
        editTodo: (id, todo) => {
          const updatedTodos = [...todos];
          const index = updatedTodos.findIndex((t) => t.id === id);

          if(index >= 0) {
            updatedTodos[index] = { id, ...todo };
          }

          setTodos(updatedTodos);
        },
        removeTodo: (id) => {
          const updatedTodos = [...todos];
          const index = updatedTodos.findIndex((todo) => todo.id === id);

          if(index >= 0) {
            updatedTodos.splice(index, 1);
          }

          setTodos(updatedTodos);
        }
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}