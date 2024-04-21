import styles from './title.module.scss';

interface TitleProps extends React.ComponentPropsWithoutRef<'h1'> {}

export const Title = ({ children }: TitleProps) => <h1 className={styles.title}>{children}</h1>;
