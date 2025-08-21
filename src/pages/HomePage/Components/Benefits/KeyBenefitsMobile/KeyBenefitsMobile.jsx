import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./KeyBenefitsMobile.module.scss";
import Dropdown from "../../../../../components/Dropdown/Dropdown";

export default function KeyBenefitsMobile({ item, isFirst }) {
  return (
    <div className={styles.mobileItem}>
      <Dropdown
        title={
          <div className={styles.summaryContent}>
            <FontAwesomeIcon icon={item.icon} className={styles.icon} />
            <span>{item.title}</span>
          </div>
        }
        defaultOpen={isFirst}
      >
        <div className={styles.answerContent}>
          {item.description.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
        </div>
      </Dropdown>
    </div>
  );
}
