import React from 'react';
import styles from './app.module.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Todos } from './todos.page';
import { About } from './about.page';
import { AppBar } from '../components/app-bar.component';
import { ProtectedRoute } from '../components/protected-route.component';
import { Auth } from './auth.page';
import { useUserContext } from '../contexts/user-context';

export function App() {
  const userContext = useUserContext();

  return (
    <div>
      {userContext.isLoggedIn && <AppBar />}
      <div className={styles.router}>
        <Switch>
          <Route path="/auth" exact component={Auth} />
          <ProtectedRoute path="/todos" exact component={Todos} />
          <ProtectedRoute path="/about" exact component={About} />
          <Redirect to="/todos" />
        </Switch>
      </div>
    </div>
  );
}
