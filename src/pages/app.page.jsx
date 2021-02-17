import React from 'react';
import styles from './app.module.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Todos } from './todos.page';
import { About } from './about.page';
import { AppBar } from '../components/app-bar/index.component';
import { Auth } from './auth.page';
import { useUserContext } from '../contexts/user-context';
import { ProtectedRoute } from '../components/protected-route.component';

export function App() {
  const userContext = useUserContext();

  return (
    <React.Fragment>
      {userContext.isLoggedIn && <AppBar />}
      <main className={styles.main}>
        <Switch>
          <Route path="/auth" exact component={Auth} />
          <ProtectedRoute path="/todos" exact component={Todos} />
          <ProtectedRoute path="/about" exact component={About} />
          <Redirect to="/todos" />
        </Switch>
      </main>
    </React.Fragment>
  );
}
