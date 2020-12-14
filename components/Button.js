import styles from '../styles/Button.module.css';

const Button = ({
  title,
  variant,
  startIcon,
  endIcon,
  size,
  disabledShadow = false,
  disabled = false,
}) => {
  return (
    <button
      className={`${styles.button} ${variant ? styles[variant] : ''} ${
        disabledShadow ? styles.disabledShadow : ''
      } ${disabled ? styles.disabled : ''} ${
        startIcon || endIcon ? styles.iconBtnWrapper : ''
      } ${size ? styles[size] : ''}
      `}
    >
      {startIcon ? (
        <div className={styles.iconBtn}>
          <img src='assets/images/add_shopping_cart.svg' alt='' />
          <span>{title}</span>
        </div>
      ) : endIcon ? (
        <div className={styles.iconBtn}>
          <span>{title}</span>
          <img src='assets/images/add_shopping_cart.svg' alt='' />
        </div>
      ) : (
        <>{title}</>
      )}
    </button>
  );
};

export default Button;
