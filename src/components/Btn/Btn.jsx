import styles from "./Btn.module.scss";

function Btn({
  children,
  onClick,
  fontSize,
  buttonStyle,
  variant = "primary",
}) {
  const customStyle = {
    fontSize: fontSize,
    ...buttonStyle,
  };

  const buttonClass = variant === "primary" ? styles.primary : styles.secondary;

  return (
    <button
      className={`${styles.btn} ${buttonClass}`}
      onClick={onClick}
      style={customStyle}
    >
      {children}
    </button>
  );
}

export default Btn;
