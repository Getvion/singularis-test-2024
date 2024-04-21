import clsx from 'clsx';

import styles from './button.module.scss';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

export const Button = ({ onClick, onSubmit, children, disabled, type = 'button' }: ButtonProps) => (
  <button
    className={clsx(styles.button, {
      [styles.disabled]: disabled
    })}
    onClick={onClick}
    onSubmit={onSubmit}
    disabled={disabled}
    type={type}
  >
    {children}
  </button>
);
