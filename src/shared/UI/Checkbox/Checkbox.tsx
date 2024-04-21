import styles from './checkbox.module.scss';

interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
}

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => (
  <div className={styles.checkbox}>
    <input
      className={styles.input}
      type='checkbox'
      id={label}
      name={label}
      checked={checked}
      onChange={onChange}
    />
    <label className={styles.label} htmlFor={label}>
      {label}
    </label>
  </div>
);
