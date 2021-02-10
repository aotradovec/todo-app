import React from 'react';
import styles from './app.module.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from './home.page';
import { About } from './about.page';

export function App() {
  return (
    <div id={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
