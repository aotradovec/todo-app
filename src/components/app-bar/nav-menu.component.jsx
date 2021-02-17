import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav-menu.module.css';

export function NavMenu() {
  return (
    <div className={styles.wrapper}>
      <NavLink className={styles.nav_link} activeClassName={styles.nav_link__active} exact to="/todos">
        Todos
      </NavLink>
      <NavLink className={styles.nav_link} activeClassName={styles.nav_link__active} exact to="/about">
        About
      </NavLink>
    </div>
  );
}