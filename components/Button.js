import styles from '../styles/Button.module.css';

const Button = ({ title, variant = '' }) => (
  <button className={`${styles.button} ${styles[variant]}`}>{title}</button>
);

export default Button;
