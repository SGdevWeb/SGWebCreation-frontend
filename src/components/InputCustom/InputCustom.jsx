import styles from "./InputCustom.module.scss";

function InputCustom({
  id,
  type,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  maxLength,
  min,
  max,
  style,
}) {
  return (
    <div className={styles.container} style={style}>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={maxLength}
        min={min}
        max={max}
      />
    </div>
  );
}

export default InputCustom;
