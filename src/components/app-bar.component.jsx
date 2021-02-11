import React from 'react';
import styles from './app-bar.module.css';
import { NavMenu } from './app-bar/nav-menu.component';

export function AppBar() {
  return (
    <div className={styles.app_bar}>
      <NavMenu />
      <h4 className={styles.user_greet}>Welcome, Adam</h4>
    </div>
  );
}