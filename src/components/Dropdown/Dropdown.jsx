import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./Dropdown.module.scss";

export default function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button
        type="button"
        className={styles.summary}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className={`${styles.arrow} fa-md`}
        />
      </button>
      {isOpen && <div className={styles.answer}>{children}</div>}
    </div>
  );
}
