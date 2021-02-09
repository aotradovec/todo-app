import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export function TextField(props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  label?: string;
}) {
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