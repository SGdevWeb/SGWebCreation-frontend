import styles from "./KeyBenefits.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function KeyBenefits({ icon, title, isActive }) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div>
          <div className={styles.chineseHatR}></div>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleTop}></div>
            <div className={styles.rectangleBottom}>
              <FontAwesomeIcon
                icon={icon}
                className={isActive ? styles.activeIcon : ""}
              />
            </div>
          </div>
          <div className={styles.chineseHat}></div>
        </div>
        <div
          className={`${styles.textContainer} ${isActive ? styles.active : ""}`}
        >
          {title}
        </div>
      </div>
    </div>
  );
}

export default KeyBenefits;
