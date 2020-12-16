import cn from 'classnames';

import styles from './Input.module.css';

const Input = ({
  id,
  name,
  label = 'Label',
  type = 'text',
  placeholder = 'Placeholder',
  ...props
}) => {
  const computedInputClassNames = cn(styles.field___control, {
    [styles.defaultHover]: props.defaultHover,
    [styles.defaultFocus]: props.defaultFocus,
  });

  return (
    <div className={styles.field}>
      <input
        className={computedInputClassNames}
        type={type}
        id={id}
        name={name || id}
        placeholder={placeholder}
      />
      <label htmlFor={id}>
        <span className={styles.field___label}>{label}</span>
      </label>
    </div>
  );
};

export default Input;
