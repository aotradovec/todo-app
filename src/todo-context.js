import { createContext, useContext, useState } from 'react';
import React from 'react';

let todoIdGenerator = 1;

const TodoContext = createContext({
  todos: [],
  addTodo: () => ({}),
  editTodo: () => ({}),
  removeTodo: () => ({})
});
export const useTodoContext = () => useContext(TodoContext);

export function TodoContextProvider(props) {
  const [todos, setTodos] = useState([]);

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