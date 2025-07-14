import styles from "./SelectCustom.module.scss";

function SelectCustom({ id, name, options, value, onChange, style }) {
  return (
    <select id={id} name={name} value={value} onChange={onChange} style={style}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default SelectCustom;
