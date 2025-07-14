import { useRef, useState } from "react";
import InputCustom from "../InputCustom/InputCustom";
import SelectCustom from "../SelectCustom/SelectCustom";
import styles from "./Form.module.scss";
import Btn from "../Btn/Btn";

function Form() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedDelay, setSelectedDelay] = useState("");

  const formRef = useRef(null);

  const handleTypeChange = (value) => {
    setSelectedType(value);
    setSelectedSubject("");
    setSelectedDelay("");

    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const subjectOptionsContact = [
    { value: "", label: "-- Sélectionnez un sujet --" },
    { value: "general", label: "Informations générales" },
    { value: "partnership", label: "Partenariat ou collaboration" },
    { value: "feedback", label: "Retours et suggestions" },
    { value: "technical", label: "Suivi d'un projet en cours" },
    { value: "other", label: "Autre sujet" },
  ];

  const projectTypeOptions = [
    { value: "", label: "-- Type de projet --" },
    { value: "website", label: "Site web" },
    { value: "mobileApp", label: "Landing-page" },
    { value: "redesign", label: "Site vitrine" },
    { value: "ecommerce", label: "E-commerce" },
  ];

  const typeOptions = [
    { value: "", label: "-- Choix du type de demande --" },
    { value: "quote", label: "Demander un devis" },
    { value: "contact", label: "Demander des informations" },
  ];

  const delayOptions = [
    { value: "", label: "-- Sélectionnez un délai --" },
    { value: "1 month", label: "1 mois" },
    { value: "3 month", label: "3 mois" },
    { value: "6 month", label: "6 mois" },
    { value: "More than 6 month", label: "plus de 6 mois" },
    { value: "other", label: "Autre" },
  ];

  return (
    <div className={styles.container}>
      <form ref={formRef}>
        <div className={styles.row}>
          <div>
            <InputCustom
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Nom"
            />
          </div>
          <div>
            <InputCustom
              id="firstName"
              type="text"
              name="firstName"
              placeholder="Prénom"
            />
          </div>
        </div>
        <div>
          <InputCustom
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            style={{ marginTop: "15px" }}
          />
        </div>
        <div>
          <SelectCustom
            id="type"
            name="type"
            options={typeOptions}
            value={selectedType}
            onChange={(e) => handleTypeChange(e.target.value)}
            style={{ marginTop: "15px" }}
          />
        </div>

        {selectedType === "quote" && (
          <>
            <div>
              <InputCustom
                id="companyName"
                type="text"
                name="companyName"
                placeholder="Nom de l'entreprise / organisation"
                style={{ marginTop: "15px", width: "100%" }}
              />
            </div>
            <SelectCustom
              id="projectType"
              name="projectType"
              options={projectTypeOptions}
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              style={{ marginTop: "15px", width: "100%" }}
            />
            <textarea
              id="projectDescription"
              name="projectDescription"
              placeholder="Description du projet"
              className={styles.textarea}
              style={{
                marginTop: "15px",
                width: "100%",
                height: "150px",
                padding: "10px",
                border: "1px solid #ccc",
                resize: "none",
              }}
            ></textarea>
            <InputCustom
              id="budget"
              type="text"
              name="budget"
              placeholder="Budget estimé (€)"
              style={{ marginTop: "15px", width: "100%" }}
              maxLength={5}
            />
            <SelectCustom
              id="deadline"
              name="deadline"
              options={delayOptions}
              onChange={(e) => setSelectedDelay(e.target.value)}
              style={{ marginTop: "15px", width: "100%", color: "white" }}
            />

            {selectedDelay === "other" && (
              <InputCustom
                id="otherDelay"
                type="text"
                name="otherDelay"
                placeholder="Précisez un délai"
                style={{
                  marginTop: "15px",
                }}
              />
            )}
            <div className={styles.btnContainer}>
              <Btn
                type="submit"
                buttonStyle={{
                  "--btn-bg": "rgba(2, 69, 103, 1)",
                  "--btn-color": "white",
                  "--btn-border": "rgba(2, 69, 103, 1)",
                  "--btn-hover-bg": "white",
                  "--btn-hover-color": "rgba(2, 69, 103, 1)",
                  "--btn-hover-border": "rgba(2, 69, 103, 1)",
                }}
              >
                ENVOYER
              </Btn>
            </div>
          </>
        )}

        {selectedType === "contact" && (
          <div>
            <SelectCustom
              id="subject"
              name="subject"
              options={subjectOptionsContact}
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              style={{ marginTop: "15px" }}
            />

            {selectedSubject === "other" && (
              <div>
                <InputCustom
                  id="otherSubject"
                  type="text"
                  name="otherSubject"
                  placeholder="Précisez votre sujet"
                  style={{ marginTop: "15px" }}
                />
              </div>
            )}
            <textarea
              id="contactMessage"
              name="contactMessage"
              placeholder="Votre message"
              className={styles.textarea}
              style={{
                marginTop: "15px",
                width: "100%",
                height: "150px",
                padding: "10px",
                border: "1px solid #ccc",
                resize: "none",
              }}
            ></textarea>
            <div className={styles.btnContainer}>
              <Btn
                type="submit"
                buttonStyle={{
                  "--btn-bg": "rgba(2, 69, 103, 1)",
                  "--btn-color": "white",
                  "--btn-border": "rgba(2, 69, 103, 1)",
                  "--btn-hover-bg": "white",
                  "--btn-hover-color": "rgba(2, 69, 103, 1)",
                  "--btn-hover-border": "rgba(2, 69, 103, 1)",
                }}
              >
                ENVOYER
              </Btn>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
