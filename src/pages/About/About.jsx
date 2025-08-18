import { faCheck, faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import styles from "./About.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Votre allié digital pour accélérer votre réussite
        </h1>

        <section className={`${styles.section} ${styles.apropos}`}>
          <h2 className={styles.sectionTitle}>À propos de moi</h2>
          <p className={styles.text}>
            "👋 Je suis Sam, développeur web & technicien d’exploitation.
          </p>
          <p className={styles.text}>
            Je code vos sites et applications et je m’assure qu’ils tournent
            parfaitement en production.
          </p>
          <p className={styles.text}>
            Un projet solide, rapide et sécurisé, du code au serveur. "
          </p>
        </section>

        <section className={`${styles.section} ${styles.mission}`}>
          <h2 className={styles.sectionTitle}>Ma mission</h2>
          <p className={styles.text}>
            🚀 Transformer vos idées en projets web{" "}
            <strong>fiables et performants</strong> :
          </p>
          <ul className={styles.list}>
            <li>
              <FontAwesomeIcon icon={faCheck} className={styles.icon} />
              Sites vitrines qui attirent, engagent et convertissent
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={styles.icon} />
              Applications web sur mesure
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className={styles.icon} />
              Infrastructures optimisées et sécurisées
            </li>
          </ul>
          <p className={styles.quotation}>
            " Mon rôle ne s’arrête pas à livrer un site. Je vous aide à gagner
            en visibilité, à attirer plus de clients et à contribuer à la
            croissance de votre entreprise. "
          </p>
        </section>

        <section className={`${styles.section} ${styles.expertise}`}>
          <h2 className={styles.sectionTitle}>Mon expertise</h2>
          <h3>Double compétence unique</h3>
          <div className={styles.row}>
            <div className={styles.expertiseCard}>
              <div className={styles.subtitle}>Développement web</div>
              <p>Du design au code sur-mesure.</p>
            </div>
            <div className={styles.expertiseCard}>
              <div className={styles.subtitle}>
                Exploitation serveur & réseau
              </div>
              Déploiement, sécurité, monitoring.
            </div>
          </div>

          <div className={styles.quotation}>
            " Besoin d’aller plus vite ou plus loin ? Je peux mobiliser mon{" "}
            <strong>réseau de développeurs</strong> tout en restant votre{" "}
            <strong>point de contact unique</strong>. "
          </div>
        </section>

        <section className={`${styles.section} ${styles.services}`}>
          <h2 className={styles.sectionTitle}>Mes services</h2>
          <div className={styles.service}>Développement web</div>
          <div className={styles.service}>Mise en production & déploiement</div>
          <div className={styles.service}>Serveur & réeaux sécurisés</div>
          <div className={styles.service}>Maintenance & optimisation</div>
        </section>

        <section className={`${styles.section} ${styles.pourquoi}`}>
          <h2 className={styles.sectionTitle}>Pourquoi me choisir</h2>
          <div className={styles.text}>
            <FontAwesomeIcon icon={faCheckDouble} className={styles.icon} />{" "}
            Qualité pro, prix juste : la valeur d’une agence, sans ses tarifs
            exorbitants.
          </div>
          <div className={styles.text}>
            <FontAwesomeIcon icon={faCheckDouble} className={styles.icon} /> Un
            interlocuteur unique qui connaît votre projet dans les moindres
            détails.
          </div>
          <div className={styles.text}>
            <FontAwesomeIcon icon={faCheckDouble} className={styles.icon} />{" "}
            Approche artisanale : sur-mesure, précise, durable.
          </div>
          <div className={styles.text}>
            <FontAwesomeIcon icon={faCheckDouble} className={styles.icon} />{" "}
            Transparence & confiance à chaque étape.
          </div>
        </section>

        <section className={styles.slogan}>
          <p>
            " Votre idée mérite plus qu’un simple site web. Elle mérite un
            projet qui fonctionne, qui dure et qui fait grandir votre business.
            "
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
