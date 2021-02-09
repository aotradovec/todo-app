import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export function Button(props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button
      className="button"
      {...props}
    />
  );
}