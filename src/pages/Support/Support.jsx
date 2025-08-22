import { useEffect } from "react";
import Btn from "../../components/Btn/Btn";
import Dropdown from "../../components/Dropdown/Dropdown";
import styles from "./Support.module.scss";

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Support & Maintenance</h1>
        <div className={styles.subtitle}>
          Un site fiable, sans mauvaise surprise
        </div>
        <p className={styles.lead}>
          Un site, ce n’est pas un projet qu’on met en ligne et qu’on oublie.
          Comme une voiture, il a besoin de révisions régulières pour rester{" "}
          <strong>sécurisé</strong>, <strong>performant</strong>, et{" "}
          <strong>disponible 24/7</strong>. Pendant que vous vous concentrez sur
          votre activité, nous veillons sur votre site.
        </p>
      </header>

      <div className={styles.plans}>
        <article className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.badge}>Essentiel</span>
            <h2>Forfait de base</h2>
          </div>
          <p className={styles.cardIntro}>
            Inclut déjà tout le nécessaire pour un site stable et sécurisé.
          </p>
          <ul className={styles.list}>
            <li>Mises à jour régulières du serveur</li>
            <li>Mise à jour du code (sécurité & compatibilité)</li>
            <li>Sauvegarde de la base de données</li>
            <li>Hébergement inclus</li>
            <li>Nom de domaine inclus</li>
          </ul>
        </article>

        <article className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={`${styles.badge} ${styles.badgePrimary}`}>
              Sérénité
            </span>
            <h2>Pack complet</h2>
          </div>
          <p className={styles.cardIntro}>
            Ajoute une tranquillité totale avec supervision et support
            utilisateur.
          </p>
          <ul className={styles.list}>
            <li>Toutes les prestations du forfait de base</li>
            <li>Supervision continue du serveur (monitoring & alertes)</li>
            <li>Support utilisateur dédié</li>
            <li>Hébergement inclus</li>
            <li>Nom de domaine inclus</li>
          </ul>
        </article>
      </div>

      <section className={styles.ticketing}>
        <div className={styles.ticketingContent}>
          <h2>Un support clair et réactif avec GLPI</h2>
          <p>
            Fini les mails perdus ou les demandes floues. Grâce à notre outil de{" "}
            <strong>ticketing GLPI</strong>, vous disposez d’un accès
            personnalisé pour créer vos tickets, suivre l’avancement en temps
            réel et échanger directement avec notre équipe.
          </p>
          <div className={styles.actions}>
            <Btn
              onClick={() =>
                window.open(import.meta.env.VITE_SUPPORT_URL, "_blank")
              }
              buttonStyle={{ minWidth: "135px" }}
            >
              Ouvrir un ticket
            </Btn>
            <div className={styles.meta}>
              Traçabilité complète • Prise en charge rapide
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <h2>Questions fréquentes</h2>
        <div className={styles.dropdowns}>
          <Dropdown title="Quelle est la différence entre maintenance et support ?">
            La maintenance, c’est la <strong>prévention</strong> (mises à jour,
            sauvegardes, supervision). Le support, c’est l’
            <strong>accompagnement</strong> quand vous avez un problème ou une
            question.
          </Dropdown>

          <Dropdown title="Si je prends seulement le forfait de base, suis-je couvert ?">
            Oui, vous avez déjà l’essentiel pour un site <strong>stable</strong>{" "}
            et
            <strong> sécurisé</strong>. Le pack complet ajoute une{" "}
            <strong>supervision continue</strong> et une{" "}
            <strong>assistance utilisateur</strong>.
          </Dropdown>

          <Dropdown title="Comment signaler un problème ?">
            Connectez-vous à votre espace GLPI, ouvrez un ticket, et nous
            intervenons rapidement.
          </Dropdown>

          <Dropdown title="Puis-je évoluer vers le pack complet plus tard ?">
            Bien sûr, vous pouvez passer d’une formule à l’autre à tout moment
            sans interruption de service.
          </Dropdown>
        </div>
      </section>
    </div>
  );
};

export default Support;
