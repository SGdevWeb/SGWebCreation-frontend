import { forwardRef } from "react";
import styles from "./SelectCustom.module.scss";

const SelectCustom = forwardRef(
  ({ id, name, options, value, onChange, style }, ref) => {
    return (
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        style={style}
        ref={ref}
        className={styles.selectCustom}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

export default SelectCustom;
