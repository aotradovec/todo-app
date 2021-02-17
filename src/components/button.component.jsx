import React from 'react';
import styles from './button.module.css';

export function Button({ ...rest }) {
  return (
    <button
      className={styles.element}
      {...rest}
    />
  );
}