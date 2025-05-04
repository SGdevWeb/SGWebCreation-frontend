import { faCopyright, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.row}>
        <div className={styles.left}>
          <div>Copyright&nbsp;</div>
          <FontAwesomeIcon icon={faCopyright} />
          <div>&nbsp;2025 - Tous droits réservés</div>
        </div>
        <div className={styles.right}>
          <a href="mailto:contact@sgwebcreation.fr" className={styles.icon}>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a href="tel:+33604157813" className={styles.icon}>
            <FontAwesomeIcon icon={faSquarePhone} size="2x" />
          </a>
          <Link to="/a-propos">A propos</Link>
          <div>Mentions légales</div>
        </div>
      </div>

      <div></div>
    </footer>
  );
};

export default Footer;
