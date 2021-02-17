import React from 'react';
import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';
import styles from './loading.module.css';

export function Loading({ ...rest }) {
  return (
    <Icon
      className={styles.icon}
      path={mdiLoading}
      size={1.5}
      spin={1}
      color="#42a5f5"
      {...rest}
    />
  );
}