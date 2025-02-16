import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./PackCard.module.scss";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

function PackCard({ title, items, price }) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.price}>
        {price}€ <span>/mois</span>
      </div>
      <div className={styles.items}>
        {items.map((item, index) => (
          <p key={index}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default PackCard;
