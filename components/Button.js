import styles from '../styles/Button.module.css';

const Button = ({
  title,
  variant = '',
  disabledShadow = false,
  disabled = false,
}) => {
  const disabledShadowBtn = disabledShadow ? 'disabledShadowBtn' : '';
  const disabledBtn = disabled ? 'disabledBtn' : '';

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[disabledShadowBtn]} ${styles[disabledBtn]}`}
    >
      {title}
    </button>
  );
};

export default Button;
