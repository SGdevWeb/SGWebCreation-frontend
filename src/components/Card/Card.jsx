import styles from "./Card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ title, description, icon }) {
  if (!icon) {
    console.error("L'icone est undefined");
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <FontAwesomeIcon icon={icon && icon} className={styles.icon} />
        <h2>{title}</h2>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
