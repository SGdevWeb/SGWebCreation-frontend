import styles from "./HomePage.module.scss";
import HomeBanner from "./Components/HomeBanner/HomeBanner";
import Benefits from "./Components/Benefits/Benefits";
import Services from "./Components/Services/Services";
import Achievements from "./Components/Achievements/Achievements";
import { useRef } from "react";
import ScrollTopButton from "../../components/ScrollTopButton/ScrollTopButton";

const HomePage = () => {
  const servicesRef = useRef(null);
  const achievementsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <section>
        <HomeBanner
          onGoToServices={() => scrollToSection(servicesRef)}
          onGoToAchievements={() => scrollToSection(achievementsRef)}
        />
      </section>
      <section>
        <Benefits />
      </section>
      <section id="services" ref={servicesRef}>
        <Services />
      </section>
      <section ref={achievementsRef}>
        <Achievements />
      </section>

      <ScrollTopButton />
    </div>
  );
};

export default HomePage;
