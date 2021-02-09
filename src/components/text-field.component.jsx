import React from 'react';

export function TextField({ id, label, className, ...rest }) {
  return (
    <input
      id={id}
      className={'text-field ' + className ?? ''}
      placeholder={label}
      type="text"
      {...rest}
    />
  );
}
