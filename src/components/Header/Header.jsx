import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo2.png";
const Header = () => {
  return (
    <header className={styles.container}>
      <Link className={styles.logo} to="/">
        <img src={logo} alt="logo de l'entreprise SG Web Creation" />
      </Link>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <NavLink to="/" className={styles.navLink}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="#Services" className={styles.navLink}>
              Services
            </NavLink>
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
      </nav>
      <Link to="/devis" className={styles.quotationButton}>
        <button>Demander un devis</button>
      </Link>
    </header>
  );
};

export default Header;
