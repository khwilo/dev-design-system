import styles from '../styles/Button.module.css';

const Button = ({ title }) => (
  <button className={styles.button}>{title}</button>
);

export default Button;
