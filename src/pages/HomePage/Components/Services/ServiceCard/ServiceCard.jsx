import styles from "./ServiceCard.module.scss";

function ServiceCard({ title, description, price, items }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.prices}>
        <div className={styles.price}>{price}€</div>
        <div className={styles.monthly}>
          Payable en 20 fois : {price / 20}€ /mois
        </div>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={index} className={styles.item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ServiceCard;
