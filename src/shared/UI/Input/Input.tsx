import clsx from 'clsx';

import { InputTypeFields } from '../../../@types/Enums';

import styles from './input.module.scss';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  type: InputTypeFields;
}

export const Input = ({ type, name, onChange, value, placeholder }: InputProps) => (
  <input
    className={clsx(styles.input, {
      [styles.number]: type === 'number',
      [styles.email]: type === 'email'
    })}
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);
