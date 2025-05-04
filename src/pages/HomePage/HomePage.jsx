import styles from "./HomePage.module.scss";
import HomeBanner from "./Components/HomeBanner/HomeBanner";
import Benefits from "./Components/Benefits/Benefits";
import Services from "./Components/Services/Services";
import Achievements from "./Components/Achievements/Achievements";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <section>
        <HomeBanner />
      </section>
      <section>
        <Benefits />
      </section>
      <section id="services">
        <Services />
      </section>
      <section>
        <Achievements />
      </section>
    </div>
  );
};

export default HomePage;
