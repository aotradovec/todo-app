import React from 'react';

export function TextField(props) {
  return (
    <input
      id={props.id}
      className="text-field"
      placeholder={props.label}
      type="text"
      {...props}
    />
  );
}
