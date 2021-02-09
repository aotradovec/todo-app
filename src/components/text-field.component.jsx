import React from 'react';
import styles from './text-field.module.css';

export function TextField({ label, className, ...rest }) {
  return (
    <input
      className={[styles.textField, className ?? ''].join(' ')}
      placeholder={label}
      type="text"
      {...rest}
    />
  );
}
