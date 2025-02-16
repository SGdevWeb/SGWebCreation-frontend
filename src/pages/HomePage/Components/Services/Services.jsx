import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServiceCard from "./ServiceCard/ServiceCard";
import styles from "./Services.module.scss";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import PackCard from "./PackCard/PackCard";

const Services = () => {
  return (
    <div className={styles.container}>
      <h2>Services & Tarifs</h2>
      <div className={styles.cardContainer}>
        <div className={styles.price}>
          <ServiceCard
            title="Landing-page"
            description="Une page simple et efficace, conçue pour capter l'attention des visiteurs"
            price="700"
            items={[
              "Conception graphique de la page",
              "Optimisation SEO",
              "Formulaire de contact",
              "Optimisation mobile",
              "Design personnalisé",
            ]}
          />
          <ServiceCard
            title="Site vitrine"
            description="Un site vitrine simple et professionnel pour présenter votre entreprise et vos services en ligne"
            price="1900"
            items={[
              "Présentation de l'entreprise",
              "5 à 8 pages",
              "Liste des services",
              "Galerie de réalisations ou produits",
              "Formulaire de contact",
              "Intégration des réseaux sociaux",
              "Optimisation SEO",
              "Optimisation mobile",
              "Design personnalisé",
            ]}
          />
          <ServiceCard
            title="Site web complet"
            description="Un site complet avec interface administrateur et base de données"
            price="2800"
            items={[
              "Pages multiples dynamiques",
              "Formulaire de contact",
              "Système de gestion de contenu",
              "Optimisation SEO",
              "Intégration des réseaux sociaux",
              "Suivi des statistiques",
              "Interface administrateur",
              "Optimisation mobile",
              "Design personnalisé",
            ]}
          />
        </div>
        <div className={styles.support}>
          <div className={styles.titleSupport}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faCirclePlus} />
            </div>
            <h2>Support et maintenance</h2>
          </div>
          <div className={styles.description}>
            Des services complets pour garantir la sécurité, la performance et
            le bon fonctionnement de votre infrastructure
          </div>
          <div className={styles.packs}>
            <PackCard
              title="Pack de base"
              items={[
                "Mises à jour régulières du serveur",
                "Mise à jour du code",
                "Sauvegarde de la base de données",
                "Hébergement inclus",
                "Nom de domaine inclus",
              ]}
              price="55"
            />
            <PackCard
              title="Pack complet"
              items={[
                "Mises à jour régulières du serveur",
                "Mise à jour du code",
                "Sauvegarde de la base de données",
                "Supervision continue du serveur",
                "Support utilisateur",
                "Hébergement inclus",
                "Nom de domaine inclus",
              ]}
              price="120"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
