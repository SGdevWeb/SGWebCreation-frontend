import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import HeaderMenuMobile from "./HeaderMenuMobile/HeaderMenuMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showHeaderMenuMobile, setShowHeaderMenuMobile] = useState(false);

  useEffect(() => {
    if (showHeaderMenuMobile) {
      document.body.style.overflow = "hidden"; // page bloquée
    } else {
      document.body.style.overflow = "auto"; // page débloquée
    }

    // Nettoyage si le composant est démonté
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showHeaderMenuMobile]);

  return (
    <header className={`${styles.container} ${styles.animate}`}>
      <Link className={styles.logo} to="/">
        <img src={logo} alt="logo de l'entreprise SG Web Creation" />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.headerMenu}>
          <li>
            <NavLink to="/" className={styles.navLink}>
              Accueil
            </NavLink>
          </li>
          <li>
            <HashLink smooth to="/#services" className={styles.navLink}>
              Services
            </HashLink>
          </li>
          <li>
            <NavLink to="/support" className={styles.navLink}>
              Support
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={styles.navLink}>
              Contact
            </NavLink>
          </li>
        </ul>
        <FontAwesomeIcon
          icon={showHeaderMenuMobile ? faXmark : faBars}
          className={styles.headerMenuMobileIcon}
          onClick={() => setShowHeaderMenuMobile(!showHeaderMenuMobile)}
        />

        <HeaderMenuMobile
          showHeaderMenuMobile={showHeaderMenuMobile}
          setShowHeaderMenuMobile={setShowHeaderMenuMobile}
        />
      </nav>
      <Link to="/contact?type=quote" className={styles.quotationButton}>
        <button>Demander un devis</button>
      </Link>
    </header>
  );
};

// const Header = () => {
//   const [showMenu, setShowMenu] = useState(true);

//   return (
//     <header>
//       <button onClick={() => setShowMenu(!showMenu)}>Toggle Menu</button>
//       {showMenu && <HeaderMenuMobile />}
//     </header>
//   );
// };

export default Header;
