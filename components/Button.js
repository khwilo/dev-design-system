import styles from '../styles/Button.module.css';

const Button = ({ title, variant = '', disabledShadow }) => {
  const disabledShadowBtn = disabledShadow ? 'disabledShadowBtn' : '';

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[disabledShadowBtn]}`}
      disabled
    >
      {title}
    </button>
  );
};

export default Button;
