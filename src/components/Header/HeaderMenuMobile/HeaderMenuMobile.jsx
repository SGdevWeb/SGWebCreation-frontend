import { Link } from "react-router-dom";
import styles from "./HeaderMenuMobile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faXmark } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import Btn from "../../Btn/Btn";
import { height, width } from "@fortawesome/free-brands-svg-icons/fa42Group";

const HeaderMenuMobile = ({
  showHeaderMenuMobile,
  setShowHeaderMenuMobile,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (showHeaderMenuMobile) {
      setIsVisible(true);
      // petit timeout pour déclencher l'animation
      setTimeout(() => setIsOpen(true), 10);
    } else if (isVisible) {
      setIsOpen(false);
      // après la durée de l'animation, on retire le menu du DOM
      const timer = setTimeout(() => setIsVisible(false), 400);
      return () => clearTimeout(timer);
    }
  }, [showHeaderMenuMobile]);

  if (!isVisible) return null;

  return (
    <div
      className={`${styles.menuMobileContainer} ${
        isOpen ? styles.open : styles.close
      }`}
    >
      <div className={styles.icons}>
        <Link
          onClick={() => setShowHeaderMenuMobile(false)}
          className={styles.home}
          to="/"
        >
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.xmark}
          onClick={() => setShowHeaderMenuMobile(false)}
        />
      </div>

      <ul className={styles.menuMobile}>
        <li
          onClick={() => setShowHeaderMenuMobile(false)}
          className={styles.menuMobileListItem}
        >
          <Link className={styles.link} to="/">
            Accueil
          </Link>
        </li>
        <li
          onClick={() => setShowHeaderMenuMobile(false)}
          className={styles.menuMobileListItem}
        >
          <HashLink className={styles.link} to="/#services">
            Services
          </HashLink>
        </li>
        <li
          onClick={() => setShowHeaderMenuMobile(false)}
          className={styles.menuMobileListItem}
        >
          <Link className={styles.link} to="/support">
            Support
          </Link>
        </li>
        <li
          onClick={() => setShowHeaderMenuMobile(false)}
          className={styles.menuMobileListItem}
        >
          <Link className={styles.link} to="/Contact">
            Contact
          </Link>
        </li>
      </ul>

      <div className={styles.btnContainer} to="/contact?type=quote">
        <Btn
          buttonStyle={{
            width: "100%",
            borderRadius: "5px",
            fontSize: "1.2rem",
            height: "50px",
          }}
        >
          Demander un devis
        </Btn>
      </div>
    </div>
  );
};

export default HeaderMenuMobile;
