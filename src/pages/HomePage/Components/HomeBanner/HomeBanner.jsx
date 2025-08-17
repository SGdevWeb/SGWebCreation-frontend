import styles from "./HomeBanner.module.scss";
import logo from "../../../../assets/logo.svg";
import Card from "../../../../components/Card/Card";
import {
  faArrowTrendUp,
  faPaintBrush,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import Btn from "../../../../components/Btn/Btn";
import { useEffect, useState } from "react";

const HomeBanner = ({ onGoToServices, onGoToAchievements }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [animateLogoText, setAnimateLogoText] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const pageTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 1500);

    const textTimer = setTimeout(() => {
      setAnimateLogoText(true);
    }, 2500);

    return () => {
      clearTimeout(pageTimer);
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
    };
  });

  return (
    <div
      className={`${styles.container} ${
        isVisible ? styles.fadeIn : styles.hidden
      }`}
    >
      <div className={styles.row}>
        <div className={styles.logo}>
          <img
            src={logo}
            alt="Logo de l'entreprise SG Web Creation"
            className={`${showLogo ? styles.visible : ""}`}
          />
          <p className={`${animateLogoText ? styles.animate : ""}`}>
            WEB CREATION
          </p>
        </div>
        <div className={styles.slogan}>
          <h1>
            Un site web <strong>professionnel</strong> pour une visibilité
            <strong> MAXIMALE</strong>
          </h1>
          <div className={styles.btnContainer}>
            <Btn onClick={onGoToServices}>Découvrez nos services</Btn>
            <Btn variant="secondary" onClick={onGoToAchievements}>
              Nos dernières réalisations
            </Btn>
          </div>
        </div>
      </div>

      <div className={styles.cards}>
        <Card
          icon={faPaintBrush}
          title="Site sur mesure"
          description="Offrez à votre entreprise un site web qui reflète parfaitement votre identité et répond à vos besoins spécifiques. Conçu pour vos objectifs, chaque détail est pensé pour optimiser l'expérience utilisateur et valoriser votre activité."
        />
        <Card
          icon={faShieldHalved}
          title="Sécurité et fiabilité"
          description="Protégez vos données et celles de vos clients grâce à des solutions robustes. Avec des sauvegardes régulières et une infrastructure fiable, votre site reste sécurisé et accessible en toutes circonstances."
        />
        <Card
          icon={faArrowTrendUp}
          title="Evolutivité"
          description="Faites grandir votre site en fonction des besoins de votre entreprise. Ajoutez de nouvelles fonctionnalités ou adaptez-le aux évolutions du marché sans compromettre sa performance ou sa stabilité."
        />
      </div>
    </div>
  );
};

export default HomeBanner;
