import { createContext, useContext, useEffect, useState } from 'react';
import React from 'react';

/**
 * @typedef Todo
 * @property {number} id
 * @property {string} text
 * @property {Date} createdAt 
 * 
 * @typedef TodoContextInitialState
 * @property {Todo[]} todos
 * @property {boolean} loadingTodos
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

function loadTodos() {
  const todos = window.localStorage.getItem('todos');
  
  if(!todos) {
    return undefined;
  }

  const parsedTodos = JSON.parse(todos);

  return parsedTodos.map((todo) => ({
    ...todo,
    createdAt: new Date(todo.createdAt)
  }));
}

function saveTodos(todos) {
  return window.localStorage.setItem('todos', JSON.stringify(todos));
}

export function TodoContextProvider(props) {
  const [loadingTodos, setLoadingTodos] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadedTodos = loadTodos();

    if(loadedTodos) {
      setTodos(loadedTodos);
    }

    setLoadingTodos(false);
  }, []);

  useEffect(() => {
    if(!loadingTodos) {
      saveTodos(todos);
    }
  }, [todos]);

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