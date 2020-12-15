import cn from 'classnames';

import styles from './Button.module.css';

const Button = ({
  title,
  variant,
  startIcon,
  endIcon,
  size,
  color,
  disabledShadow = false,
  disabled = false,
  ...props
}) => {
  const computedClassNames = cn(styles.Button, {
    [styles.Button___primary]: color === 'primary',
    [styles.Button___secondary]: color === 'secondary',
    [styles.Button___danger]: color === 'danger',
    [styles.defaultHoverFocus]: props.defaultHoverFocus,
    [styles.primaryHoverFocus]: props.primaryHoverFocus,
    [styles.secondaryHoverFocus]: props.secondaryHoverFocus,
    [styles.dangerHoverFocus]: props.dangerHoverFocus,
    [styles.primaryOutlineHoverFocus]: props.primaryOutlineHoverFocus,
    [styles.primaryTextHoverFocus]: props.primaryTextHoverFocus,
    [styles.Button___sm]: size === 'sm',
    [styles.Button___md]: size === 'md',
    [styles.Button___lg]: size === 'lg',
    [styles.Button___outline]: variant === 'outline',
    [styles.Button___outlineBlue]: variant === 'outline' && color === 'primary',
    [styles.Button___text]: variant === 'text',
    [styles.Button___textBlue]: variant === 'text' && color === 'primary',
    [styles.Button___disabledShadow]: disabledShadow,
    [styles.Button___disabled]: disabled,
  });

  return (
    <button className={computedClassNames} disabled={disabled}>
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
