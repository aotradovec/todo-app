import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './pages/app.page';
import { TodoContextProvider } from './contexts/todo-context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app-root')
);