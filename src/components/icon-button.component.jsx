import React from 'react';
import styles from './icon-button.module.css';
import buttonStyles from './button.module.css';
import { classNames } from '../lib/classnames';

export function IconButton({ className, ...rest }) {
  return (
    <button
      className={classNames(buttonStyles.element, styles.element, className)}
      {...rest}
    />
  );
}