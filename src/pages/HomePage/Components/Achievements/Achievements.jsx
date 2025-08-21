import styles from "./Achievements.module.scss";
import homepage from "../../../../assets/Homepage.png";

const Achievements = () => {
  const handleVisitSite = () => {
    window.open("https://éclatdebeauté.fr", "_blank");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Mes réalisations</h2>
      <div className={styles.row}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={homepage}
            onClick={handleVisitSite}
          />
        </div>
        <div className={styles.description}>
          <h2>Site Web Bien-être</h2>
          <p>
            Création d'un site web moderne pour une esthéticienne, incluant une
            interface utilisateur élégante et une interface d'administration
            pour gérer les services, les réservations et les tarifs.
          </p>
          <p>
            Le design est optimisé pour tous les appareils, ce qui permet une
            navigation facile et confortable sur les écrans de toutes tailles,
            du téléphone à l'ordinateur
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
