import styles from "./Legal.module.scss";

const Legal = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <header>
          <h1>Mentions légales</h1>
          <p className={styles.subtitle}>
            Informations légales relatives au site{" "}
            <strong>sgwebcreation.fr</strong>
          </p>
        </header>

        <section>
          <h2>1. Éditeur du site</h2>
          <ul>
            <li>
              <strong>Nom / Dénomination : </strong>SG Web Creation
            </li>
            <li>
              <strong>Statut juridique :</strong> Auto-entrepreneur
            </li>
            <li>
              <strong>SIRET : </strong>98363737200019
            </li>
            <li>
              <strong>Adresse :</strong> 3 chemin des Noyers, 59990 Saultain
            </li>
            <li>
              <strong>Téléphone :</strong> 06 04 15 78 13
            </li>
            <li>
              <strong>Email :</strong>{" "}
              <a href="mailto:samuel.gustin.dev@gmail.com">
                samuel.gustin.dev@gmail.com
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>2. Hébergement</h2>
          <ul>
            <li>
              <strong>Hébergeur : </strong>OVH
            </li>
            <li>
              <strong>Adresse de l’hébergeur : </strong>2 rue Kellermann, 59100
              Roubaix
            </li>
            <li>
              <strong>Contact : </strong>
              <a href="https://www.ovhcloud.com" target="about_blank">
                https://www.ovhcloud.com/
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Propriété intellectuelle</h2>
          <p>
            Tous les contenus du site <strong>sgwebcreation.fr</strong> (textes,
            images, logo, graphismes, vidéos, icônes, code source, etc.) sont
            protégés par le droit d'auteur et la propriété intellectuelle. Toute
            reproduction, représentation, modification ou utilisation, totale ou
            partielle, est strictement interdite sans l'accord écrit préalable
            de l'éditeur.
          </p>
        </section>

        <section>
          <h2>4. Responsabilité</h2>
          <p>
            L’éditeur s’efforce d’assurer l’exactitude et la mise à jour des
            informations publiées sur le site, mais ne peut garantir leur
            exhaustivité. L’éditeur décline toute responsabilité en cas de
            dommages directs ou indirects résultant de l’utilisation du site.
          </p>
        </section>

        <section>
          <h2>5. Données personnelles (RGPD)</h2>

          <p>
            Les données collectées via le formulaire de contact peuvent inclure
            le nom, l’email, le téléphone, le message et les éventuelles pièces
            jointes. Ces données sont utilisées uniquement pour répondre aux
            demandes et gérer la relation commerciale.
          </p>
          <p>
            <strong>Droits :</strong> Vous pouvez demander l’accès, la
            rectification, la suppression, la limitation du traitement, la
            portabilité et l’opposition de vos données. Contactez :{" "}
            <a href="mailto:[email@example.com]">samuel.gustin.dev@gmail.com</a>
            .
          </p>
        </section>

        <section>
          <h2>6. Cookies et traceurs</h2>
          <p>
            Le site <strong>sgwebcreation.fr</strong> n'utilise pas de cookies
            ni de traceurs pour l’analyse ou la mesure d’audience.
          </p>
        </section>

        <section>
          <h2>7. Liens externes</h2>
          <p>
            Le site peut contenir des liens vers d'autres sites externes.
            L’éditeur n’exerce aucun contrôle sur ces sites et décline toute
            responsabilité quant à leur contenu ou leurs pratiques.
          </p>
        </section>

        <section>
          <h2>8. Droit applicable</h2>
          <p>
            Le site et les présentes mentions légales sont soumis au droit
            français. Tout litige relève de la compétence exclusive des
            tribunaux français.
          </p>
        </section>

        <footer>
          <p className={styles.small}>
            Dernière mise à jour : <strong>15/09/2025</strong>
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Legal;
