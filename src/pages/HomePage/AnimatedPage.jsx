import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../../assets/logo.svg";
import styles from "./AnimatedPage.module.scss";
import ScrollTopButton from "../../components/ScrollTopButton/ScrollTopButton";

const AnimatedPage = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // Date au format YYYY-MM-DD
    const lastSeenDate = localStorage.getItem("animationDate");

    // Si l'animation a déjà été vue aujourd'hui, redirige immédiatement
    if (lastSeenDate === today) {
      navigate("/home", { replace: true });
      return;
    }

    setIsChecking(false);

    // Met à jour la date de la dernière animation vue
    setTimeout(() => localStorage.setItem("animationDate", today), 1000);

    // Lancer l'animation et rediriger après 2 secondes
    setTimeout(() => setIsRevealed(true), 1000);
    setTimeout(() => navigate("/home", { replace: true }), 2000);
  }, [navigate]);

  if (isChecking) return null;

  return (
    <div
      className={`${styles.imageContainer} ${
        isRevealed ? styles.revealed : ""
      }`}
    >
      <img
        src={logo}
        alt="Logo"
        className={`${styles.image} ${styles.imageLeft} ${
          isRevealed ? styles.revealed : ""
        }`}
      />
      <img
        src={logo}
        alt="Logo"
        className={`${styles.image} ${styles.imageRight} ${
          isRevealed ? styles.revealed : ""
        }`}
      />

      <ScrollTopButton />
    </div>
  );
};

export default AnimatedPage;
