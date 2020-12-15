import cn from 'classnames';

import styles from './Button.module.css';
import {
  ButtonColors,
  ButtonIcons,
  ButtonSizes,
  ButtonVariants,
} from './buttonTypes';

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
    [styles.Button___primary]: color === ButtonColors.PRIMARY,
    [styles.Button___secondary]: color === ButtonColors.SECONDARY,
    [styles.Button___danger]: color === ButtonColors.DANGER,
    [styles.defaultHoverFocus]: props.defaultHoverFocus,
    [styles.primaryHoverFocus]: props.primaryHoverFocus,
    [styles.secondaryHoverFocus]: props.secondaryHoverFocus,
    [styles.dangerHoverFocus]: props.dangerHoverFocus,
    [styles.primaryOutlineHoverFocus]: props.primaryOutlineHoverFocus,
    [styles.primaryTextHoverFocus]: props.primaryTextHoverFocus,
    [styles.Button___sm]: size === ButtonSizes.SMALL,
    [styles.Button___md]: size === ButtonSizes.MEDIUM,
    [styles.Button___lg]: size === ButtonSizes.LARGE,
    [styles.Button___outline]: variant === ButtonVariants.OUTLINE,
    [styles.Button___outlineBlue]:
      variant === ButtonVariants.OUTLINE && color === ButtonColors.PRIMARY,
    [styles.Button___text]: variant === ButtonVariants.TEXT,
    [styles.Button___textBlue]:
      variant === ButtonVariants.TEXT && color === ButtonColors.PRIMARY,
    [styles.Button___disabledShadow]: disabledShadow,
    [styles.Button___disabled]: disabled,
  });

  const image =
    startIcon === ButtonIcons.LOCAL_GROCERY_STORE ||
    endIcon === ButtonIcons.LOCAL_GROCERY_STORE ? (
      <img
        className={styles.Button_iconTitle___img}
        src='assets/images/add_shopping_cart.svg'
        alt=''
      />
    ) : null;

  console.log('start: ', startIcon);

  return (
    <button className={computedClassNames} disabled={disabled}>
      {startIcon ? (
        <div className={styles.Button_iconTitle}>
          {image}
          <span>{title}</span>
        </div>
      ) : endIcon ? (
        <div className={styles.Button_iconTitle}>
          <span>{title}</span>
          {image}
        </div>
      ) : (
        <>{title}</>
      )}
    </button>
  );
};

export default Button;
