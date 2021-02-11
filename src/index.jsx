import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './pages/app.page';
import { TodoContextProvider } from './contexts/todo-context';
import { UserContextProvider } from './contexts/user-context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </TodoContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app-root')
);