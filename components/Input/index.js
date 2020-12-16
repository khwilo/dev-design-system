import cn from 'classnames';

import styles from './Input.module.css';

const Input = ({
  id,
  name,
  error,
  helperText,
  iconSrc,
  startIcon,
  endIcon,
  disabled = false,
  label = 'Label',
  type = 'text',
  placeholder = 'Placeholder',
  ...props
}) => {
  const computedInputClassNames = cn(styles.Field___control, {
    [styles.Field___controlWithIconStart]: iconSrc && startIcon,
    [styles.Field___controlWithIconEnd]: iconSrc && endIcon,
    [styles.Field___controlError]: error,
    [styles.defaultHover]: props.defaultHover,
    [styles.defaultFocus]: props.defaultFocus,
    [styles.errorHover]: props.errorHover,
    [styles.Field___disabled]: disabled,
  });

  const computedFieldIconClassNames = cn({
    [styles.Field___IconStart]: iconSrc && startIcon,
    [styles.Field___IconEnd]: iconSrc && endIcon,
  });

  return (
    <div className={styles.Field}>
      <div className={styles.Field___wrapper}>
        <div className={styles.Field___inputIcons}>
          <img className={computedFieldIconClassNames} src={iconSrc} alt='' />
          <input
            className={computedInputClassNames}
            type={type}
            id={id}
            name={name || id}
            placeholder={placeholder}
          />
        </div>
        <label htmlFor={id}>
          <span className={styles.Field___label}>{label}</span>
        </label>
      </div>
      <span
        className={styles.Field___hint}
        style={{ color: error ? '#d32f2f' : '' }}
      >
        {helperText}
      </span>
    </div>
  );
};

export default Input;
