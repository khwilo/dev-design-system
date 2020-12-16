import cn from 'classnames';

import styles from './Input.module.css';

const Input = ({
  id,
  name,
  error,
  disabled = false,
  label = 'Label',
  type = 'text',
  placeholder = 'Placeholder',
  ...props
}) => {
  const computedInputClassNames = cn(styles.Field___control, {
    [styles.Field___controlError]: error,
    [styles.defaultHover]: props.defaultHover,
    [styles.defaultFocus]: props.defaultFocus,
    [styles.errorHover]: props.errorHover,
    [styles.Field___disabled]: disabled,
  });

  return (
    <div className={styles.Field}>
      <input
        className={computedInputClassNames}
        type={type}
        id={id}
        name={name || id}
        placeholder={placeholder}
      />
      <label htmlFor={id}>
        <span className={styles.Field___label}>{label}</span>
      </label>
    </div>
  );
};

export default Input;
