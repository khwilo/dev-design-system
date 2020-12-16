import cn from 'classnames';

import styles from './Input.module.css';
import { InputSizes } from './inputTypes';

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
  const computedInputClassNames = cn(styles.Field_control, {
    [styles.Field_control___multiline]: multiline,
    [styles.Field_control___small]: size === InputSizes.SMALL,
    [styles.Field_control___medium]: size === InputSizes.MEDIUM,
    [styles.Field_control___fullWidth]: fullWidth,
    [styles.Field_control___iconStart]: iconSrc && startIcon,
    [styles.Field_control___iconEnd]: iconSrc && endIcon,
    [styles.Field_control___error]: error,
    [styles.defaultHover]: props.defaultHover,
    [styles.defaultFocus]: props.defaultFocus,
    [styles.errorHover]: props.errorHover,
    [styles.Field_control___disabled]: disabled,
  });

  const computedFieldIconClassNames = cn(styles.Field_icon, {
    [styles.Field_icon___start]: iconSrc && startIcon,
    [styles.Field_icon___end]: iconSrc && endIcon,
  });

  return (
    <div className={styles.Field}>
      <div className={styles.Field_inputIcons}>
        <img className={computedFieldIconClassNames} src={iconSrc} alt='' />
        <div className={styles.Field_wrapper}>
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
                <span className={styles.Field_label}>{label}</span>
              </label>
            </>
          )}
        </div>
      </div>
      <span
        className={styles.Field_hint}
        style={{ color: error ? '#d32f2f' : '' }}
      >
        {helperText}
      </span>
    </div>
  );
};

export default Input;
