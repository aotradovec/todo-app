import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { TodoContextProvider } from './todo-context';

ReactDOM.render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);