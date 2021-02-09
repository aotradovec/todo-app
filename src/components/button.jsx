import React from 'react';

export function Button({ className, ...rest }) {
  return (
    <button
      className={'button ' + (className ?? '')}
      {...rest}
    />
  );
}