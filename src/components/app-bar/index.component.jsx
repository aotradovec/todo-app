import React from 'react';
import styles from './index.module.css';
import { NavMenu } from './nav-menu.component';
import { useUserContext } from '../../contexts/user-context';
import { Button } from '../button.component';

export function AppBar() {
  const userContext = useUserContext();

  return (
    <div className={styles.app_bar}>
      <NavMenu />
      <div className={styles.user_menu_wrapper}>
        <h4 className={styles.user_greeting}>
          Welcome, {userContext.currentUser.username}
        </h4>
        <Button onClick={userContext.logout}>
          🚪
        </Button>
      </div>
    </div>
  );
}