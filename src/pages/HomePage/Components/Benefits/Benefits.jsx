import { useState } from "react";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import styles from "./Benefits.module.scss";
import KeyBenefits from "./KeyBenefits/KeyBenefits";
import {
  faChartLine,
  faDollarSign,
  faGlobe,
  faLaptop,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    icon: faEye,
    title: "Visibilité accrue",
    description: [
      "Accès 24h/24, 7j/7 : Un site web permet à vos clients potentiels de vous trouver à tout moment, sans être limité par les horaires d'ouverture.",
      "Présence mondiale : Internet élimine les frontières géographiques et vous permet de toucher un public local, national ou international.",
      "Optimisation SEO : Grâce au référencement, vous pouvez apparaître en tête des résultats de recherche et capter des prospects déjà intéressés par vos services.",
    ],
  },
  {
    icon: faStar,
    title: "Renforcement de la crédibilité",
    description: [
      "Preuve de professionnalisme : Un site bien conçu reflète la qualité et la fiabilité de vos services ou produits.",
      "Avis et témoignages : Afficher des retours clients améliore votre crédibilité et rassure vos prospects.",
      "Portefeuille ou catalogue : Mettre en avant vos réalisations ou produits permet de montrer votre savoir-faire directement en ligne.",
    ],
  },
  {
    icon: faLaptop,
    title: "Un outil de communication clé",
    description: [
      "Centralisation de l’information : Un site web regroupe toutes les informations nécessaires : coordonnées, services, horaires, et actualités.",
      "Interactivité : Un blog, une section FAQ ou un formulaire de contact permettent d’engager la conversation avec vos clients.",
      "Intégration des réseaux sociaux : Le site devient une plaque tournante pour diriger les visiteurs vers vos pages sociales ou autres canaux.",
    ],
  },
  {
    icon: faGlobe,
    title: "Accessibilité à tous types de clients",
    description: [
      "Multi-supports : Un site responsive permet d’être accessible sur ordinateur, tablette et smartphone.",
      "Personnalisation : Vous pouvez adapter votre contenu à différents publics cibles en fonction de leurs besoins.",
      "Langues : Si votre marché est international, un site multilingue peut faire la différence.",
    ],
  },
  {
    icon: faDollarSign,
    title: "Rentabilité",
    description: [
      "Coût réduit : Comparé à la publicité traditionnelle (TV, radio, flyers), un site web est un investissement peu coûteux et durable.",
      "Automatisation : Intégrez des fonctionnalités comme des prises de rendez-vous, des paiements en ligne ou des chatbots pour simplifier vos interactions client.",
    ],
  },
  {
    icon: faChartLine,
    title: "Statistiques et analyses",
    description: [
      "Données mesurables : Un site web vous permet de suivre les visites, les pages populaires, et les conversions grâce à des outils comme Google Analytics.",
      "Optimisation continue : Ces données aident à ajuster votre stratégie marketing pour maximiser l’impact de votre site.",
    ],
  },
];

const Benefits = () => {
  const [activeBenefit, setActiveBenefit] = useState(data[0]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Pourquoi un site web est indispensable ?</h2>
      <div className={styles.hexagonContainer}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`${styles.hex} ${styles[`hex${index + 1}`]}`}
            onClick={() => setActiveBenefit(item)}
          >
            <KeyBenefits
              icon={item.icon}
              title={item.title}
              description={item.description}
              isActive={activeBenefit?.title === item.title}
            />
          </div>
        ))}
      </div>

      <div className={styles.detailsContainer}>
        {activeBenefit && (
          <div>
            {activeBenefit.description.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Benefits;
