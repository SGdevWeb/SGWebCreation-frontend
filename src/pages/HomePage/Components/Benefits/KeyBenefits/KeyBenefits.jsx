import { useState } from "react";
import styles from "./KeyBenefits.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function KeyBenefits({ icon, title, description, impair }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.row} ${impair && styles.right} }`}>
        <div>
          <div className={styles.chineseHatR}></div>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleTop}></div>
            <div className={styles.rectangleBottom}>
              <FontAwesomeIcon icon={icon} />
            </div>
          </div>
          <div className={styles.chineseHat}></div>
        </div>
        <div
          className={`${styles.texteContainer} ${isOpen ? styles.active : ""}`}
          onClick={toggleDetails}
        >
          {title}
        </div>
      </div>
      <div
        className={`${styles.detailsContainer} ${isOpen ? styles.open : ""} ${
          impair && styles.right
        } }`}
      >
        <div className={styles.detailsContent}>
          {description.map((d, index) => (
            <div key={index} className={styles.content}>
              <p>
                {/* {index + 1} - {d} */}
                <FontAwesomeIcon icon={faCheck} className={styles.icon} />
                {d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KeyBenefits;
