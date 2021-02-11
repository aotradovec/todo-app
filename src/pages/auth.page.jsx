import React, { useState } from 'react';
import { TextField } from '../components/text-field.component';
import { Button } from '../components/button.component';
import { useUserContext } from '../contexts/user-context';
import styles from './auth.module.css';
import { useHistory } from 'react-router-dom';

export function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const userContext = useUserContext();
  const history = useHistory();

  async function onSubmit(event) {
    event.preventDefault();

    const user = await userContext.login({ username, password });

    if(user) {
      history.push('/todos');
    }
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmit.bind(this)}>
        <div className={styles.text_field_wrapper}>
          <label htmlFor="username">Username</label>
          <TextField
            id="username"
            type="text"
            autoComplete="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div className={styles.text_field_wrapper}>
          <label htmlFor="password">Password</label>
          <TextField
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div className={styles.submit_button_wrapper}>
          <Button type="submit">
            Přihlásit se
          </Button>
        </div>
      </form>
    </div>
  );
}