import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import Form from "../../components/Form/Form";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Une question ou un projet ?</h1>
        <div className={styles.column}>
          <h2>Nous sommes à votre écoute !</h2>
          <p>
            Vous avez une idée en tête ou une question à poser ? Que ce soit
            pour concrétiser un projet ou simplement obtenir des informations,
            nous sommes là pour vous accompagner à chaque étape.
          </p>
          <ul className={styles.puces}>
            <li>
              <div style={{ fontWeight: "bold" }}>
                Vous souhaitez des informations ?
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faHandPointRight}
                  className={styles.icon}
                />
                Sélectionnez le sujet qui vous intéresse.
              </div>
            </li>
            <div>
              <div style={{ fontWeight: "bold" }}>Vous avez un projet ?</div>
              <div>
                <FontAwesomeIcon
                  icon={faHandPointRight}
                  className={styles.icon}
                />
                Optez pour la demande de devis et décrivez-nous votre idée.
              </div>
            </div>
          </ul>
          <p>
            Nous vous répondrons dans les plus bref délais pour donner vie à vos
            projets ou répondre à toutes vos questions.
          </p>
        </div>
        <div className={styles.form}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
