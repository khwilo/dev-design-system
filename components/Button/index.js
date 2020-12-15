import styles from './Button.module.css';
import cn from 'classnames';

const Button = ({
  title,
  variant,
  startIcon,
  endIcon,
  size,
  color,
  disabledShadow = false,
  disabled = false,
}) => {
  const computedClassNames = cn(styles.Button, {
    [styles.Button___outline]: variant === 'outline',
    [styles.Button___text]: variant === 'text',
    [styles.Button___disabledShadow]: disabledShadow,
    [styles.Button___disabled]: disabled,
    [styles.Button___textDisabled]: variant === 'text' && disabled,
    [styles.Button_iconTitleWrapper]: startIcon || endIcon,
    [styles.Button___sm]: size === 'sm',
    [styles.Button___md]: size === 'md',
    [styles.Button___lg]: size === 'lg',
    [styles.Button___primary]: color === 'primary',
    [styles.Button___secondary]: color === 'secondary',
    [styles.Button___danger]: color === 'danger',
  });

  return (
    <button className={computedClassNames}>
      {startIcon ? (
        <div className={styles.Button_iconTitle}>
          <img
            className={styles.Button_iconTitle___img}
            src='assets/images/add_shopping_cart.svg'
            alt=''
          />
          <span>{title}</span>
        </div>
      ) : endIcon ? (
        <div className={styles.Button_iconTitle}>
          <span>{title}</span>
          <img
            className={styles.Button_iconTitle___img}
            src='assets/images/add_shopping_cart.svg'
            alt=''
          />
        </div>
      ) : (
        <>{title}</>
      )}
    </button>
  );
};

export default Button;
