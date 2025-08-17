import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import Form from "../../components/Form/Form";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const typeFromUrl = queryParams.get("type");

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
          <p>
            Même si vous n’avez pas encore d’idée précise, nous pouvons vous
            aider à définir votre projet, vous conseiller sur les meilleures
            solutions et créer un site qui correspond vraiment à vos besoins.
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
          <Form initialType={typeFromUrl} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
