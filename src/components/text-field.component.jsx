import React from 'react';
import { classNames } from '../lib/classnames';
import styles from './text-field.module.css';

export function TextField({ label, className, ...rest }) {
  return (
    <input
      className={classNames(styles.text_field, className)}
      placeholder={label}
      type="text"
      {...rest}
    />
  );
}
