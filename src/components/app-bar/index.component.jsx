import React from 'react';
import styles from './index.module.css';
import { NavMenu } from './nav-menu.component';
import { useUserContext } from '../../contexts/user-context';
import Icon from '@mdi/react';
import { mdiLogoutVariant } from '@mdi/js';
import { IconButton } from '../icon-button.component';

export function AppBar() {
  const userContext = useUserContext();

  return (
    <div className={styles.app_bar}>
      <NavMenu />
      <div className={styles.user_menu_wrapper}>
        <h4 className={styles.user_greeting}>
          Welcome, {userContext.currentUser.username}
        </h4>
        <IconButton onClick={userContext.logout}>
          <Icon path={mdiLogoutVariant} size={1} />
        </IconButton>
      </div>
    </div>
  );
}