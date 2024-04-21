import styles from './input.module.scss';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {}

export const Input = ({ type, name, onChange, value, placeholder, onBlur }: InputProps) => (
  <input
    className={styles.input}
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
  />
);
