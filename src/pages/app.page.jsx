import React from 'react';
import styles from './app.module.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Home } from './home.page';
import { About } from './about.page';
import { AppBar } from '../components/app-bar.component';

export function App() {
  return (
    <div>
      <AppBar />
      <div className={styles.router}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}
