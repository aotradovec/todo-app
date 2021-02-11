import { createContext, useContext, useEffect, useState } from 'react';
import React from 'react';
import { todoApi } from './lib/todo-api';

/**
 * @typedef Todo
 * @property {number} id
 * @property {string} text
 * @property {Date} createdAt 
 * 
 * @typedef TodoContextInitialState
 * @property {Todo[]} data
 * @property {boolean} loading
 * @property {Error} error
 * @property {(todo: Todo) => void} create
 * @property {(id: number, todo: Todo) => void} update
 * @property {(id: number) => void} remove
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
  const [result, setResult] = useState({ data: null, loading: true, error: null });

  useEffect(async () => {
    setResult({ data: null, loading: true, error: null });

    const loadedTodos = await todoApi.get();

    setResult({ data: loadedTodos, loading: false, error: null });
  }, []);

  async function create(data) {
    setResult((prev) => ({ ...prev, loading: true, error: null }));

    const newData = await todoApi.create(data);

    setResult((prev) => ({ data: [...prev.data, newData], loading: false, error: null }));
  }

  async function update(id, data) {
    setResult((prev) => ({ ...prev, loading: true, error: null }));

    const newData = await todoApi.update(id, data);

    setResult((prev) => ({ 
      data: prev.data.map((d) => d.id === id ? newData : d), 
      loading: false,
      error: null
    }));
  }

  async function remove(id) {
    setResult((prev) => ({ ...prev, loading: true, error: null }));

    await todoApi.remove(id);

    setResult((prev) => ({ 
      data: prev.data.filter((d) => d.id !== id), 
      loading: false,
      error: null
    }));
  }

  return (
    <TodoContext.Provider
      value={{
        data: result.data,
        loading: result.loading,
        error: result.error,
        create,
        update,
        remove
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}