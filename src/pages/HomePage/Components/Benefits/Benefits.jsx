import { faEye } from "@fortawesome/free-regular-svg-icons";
import styles from "./Benefits.module.scss";
import KeyBenefits from "./KeyBenefits/KeyBenefits";
import {
  faChartLine,
  faDollarSign,
  faGlobe,
  faLaptop,
  faRotate,
  faStar,
  faTrophy,
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
    icon: faTrophy,
    title: "Avantage compétitif",
    description: [
      "Se démarquer de la concurrence : Si vos concurrents ont déjà un site, il est essentiel de ne pas rester en arrière. S’ils n’en ont pas, vous obtenez un avantage immédiat.",
      "Publicité en ligne : Avec un site web, vous pouvez utiliser des outils comme Google Ads ou Facebook Ads pour promouvoir vos services.",
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
    icon: faRotate,
    title: "Évolutivité",
    description: [
      "Adaptation aux besoins : Vous pouvez ajouter ou modifier des fonctionnalités (e-commerce, blog, espace client) à mesure que votre entreprise grandit.",
      "Flexibilité : Le site peut être régulièrement mis à jour pour rester en phase avec les tendances du marché et les attentes des clients.",
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
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>Pourquoi un site web est indispensable ?</h2>
      </div>

      {data.map((item, index) => (
        <KeyBenefits
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          impair={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default Benefits;
