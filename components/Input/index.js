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
  value,
  size,
  fullWidth,
  multiline,
  rows,
  cols = 12,
  disabled = false,
  label = 'Label',
  type = 'text',
  placeholder = 'Placeholder',
  onChangeInputHandler = () => {},
  ...props
}) => {
  const computedInputClassNames = cn(styles.Field___control, {
    [styles.Field___controlMultiline]: multiline,
    [styles.Field___controlSizeSmall]: size === 'sm',
    [styles.Field___controlSizeMedium]: size === 'md',
    [styles.Field___controlFullWidth]: fullWidth,
    [styles.Field___controlWithIconStart]: iconSrc && startIcon,
    [styles.Field___controlWithIconEnd]: iconSrc && endIcon,
    [styles.Field___controlError]: error,
    [styles.defaultHover]: props.defaultHover,
    [styles.defaultFocus]: props.defaultFocus,
    [styles.errorHover]: props.errorHover,
    [styles.Field___disabled]: disabled,
  });

  const computedFieldIconClassNames = cn(styles.Field___icon, {
    [styles.Field___IconStart]: iconSrc && startIcon,
    [styles.Field___IconEnd]: iconSrc && endIcon,
  });

  return (
    <div className={styles.Field}>
      <div className={styles.Field___inputIcons}>
        <img className={computedFieldIconClassNames} src={iconSrc} alt='' />
        <div className={styles.Field___wrapper}>
          {multiline ? (
            <textarea
              className={computedInputClassNames}
              id={id}
              name={name || id}
              rows={rows}
              cols={cols}
              placeholder={placeholder}
            ></textarea>
          ) : (
            <>
              <input
                className={computedInputClassNames}
                type={type}
                id={id}
                name={name || id}
                value={value}
                onChange={(event) => onChangeInputHandler(event)}
                placeholder={placeholder}
              />
              <label htmlFor={id}>
                <span className={styles.Field___label}>{label}</span>
              </label>
            </>
          )}
        </div>
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
