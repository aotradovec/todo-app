import React from 'react';
import styles from './app.module.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from './home.page';

export function App() {
  return (
    <div id={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
