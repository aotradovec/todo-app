import { createContext, useContext, useState } from 'react';
import React from 'react';

/**
 * @typedef Todo
 * @property {number} id
 * @property {string} text
 * @property {Date} createdAt 
 * 
 * @typedef TodoContextInitialState
 * @property {Todo[]} todos
 * @property {(todo: Todo) => void} addTodo
 * @property {(id: number, todo: Todo) => void} editTodo
 * @property {(id: number) => void} removeTodo
 */

/**
 * @type {TodoContextInitialState}
 */
const initState = {};
const TodoContext = createContext(initState);

export function useTodoContext() {
  const context = useContext(TodoContext);

  if(!context) {
    throw new Error('TodoContext not found');
  }

  return context;
}

export function TodoContextProvider(props) {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prev) => {
      const newTodo = {
        ...todo,
        id: new Date().valueOf(),
        createdAt: new Date()
      };

      return [...prev, newTodo];
    });
  }

  function editTodo(id, editedTodo) {
    setTodos((prev) => (
      prev.map((originalTodo) => (
        originalTodo.id === id
          ? { ...originalTodo, ...editedTodo }
          : originalTodo
      ))
    ));
  }

  function removeTodo(id) {
    setTodos((prev) => (
      prev.filter((todo) => todo.id !== id)
    ));
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        editTodo,
        removeTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}