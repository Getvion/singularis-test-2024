import clsx from 'clsx';
import { forwardRef } from 'react';
import { InputTypeFields } from 'types/Enums';

import styles from './input.module.scss';

interface InputProps extends React.ComponentPropsWithRef<'input'> {
  type: InputTypeFields;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, onChange, value, placeholder, required }, ref) => (
    <input
      className={clsx(styles.input, {
        [styles.number]: type === 'number',
        [styles.email]: type === 'email'
      })}
      ref={ref}
      required={required}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
);
