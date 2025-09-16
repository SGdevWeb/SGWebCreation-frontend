import { useEffect, useRef, useState } from "react";
import InputCustom from "../InputCustom/InputCustom";
import SelectCustom from "../SelectCustom/SelectCustom";
import styles from "./Form.module.scss";
import Btn from "../Btn/Btn";
import { useFormik } from "formik";
import { contactFormSchema } from "../../ValidationSchemas/contactFormSchema";
import { toast } from "react-toastify";
import HCaptcha from "@hcaptcha/react-hcaptcha";

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
  { value: "contact", label: "Demander des informations" },
  { value: "quote", label: "Demander un devis" },
];

const delayOptions = [
  { value: "", label: "-- Sélectionnez un délai --" },
  { value: "1 month", label: "1 mois" },
  { value: "3 month", label: "3 mois" },
  { value: "6 month", label: "6 mois" },
  { value: "More than 6 month", label: "plus de 6 mois" },
  { value: "other", label: "Autre" },
];

function Form({ initialType = "" }) {
  const [selectedSubject, setSelectedSubject] = useState(
    subjectOptionsContact[0]
  );
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedDelay, setSelectedDelay] = useState("");
  const formRef = useRef(null);
  const selectRef = useRef(null);
  const contactCaptchaRef = useRef(null);
  const quoteCaptchaRef = useRef(null);

  useEffect(() => {
    if (initialType) {
      setSelectedType(initialType);
      formik.setFieldValue("type", initialType);

      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (selectRef.current) {
        selectRef.current.focus();
      }
    }
  }, [initialType]);

  const formik = useFormik({
    initialValues: {
      lastName: "",
      firstName: "",
      email: "",
      type: "",
      companyName: "",
      projectType: "",
      projectDescription: "",
      budget: "",
      deadline: "",
      otherDelay: "",
      subject: "",
      otherSubject: "",
      contactMessage: "",
    },
    validationSchema: contactFormSchema,
    onSubmit: async (_, { setSubmitting }) => {
      try {
        if (selectedType === "contact") {
          await contactCaptchaRef.current.execute();
        } else if (selectedType === "quote") {
          await quoteCaptchaRef.current.execute();
        }
      } catch (err) {
        console.error("Erreur hCaptcha :", err);
        setSubmitting(false);
      }
    },
  });

  const handleVerify = async (token) => {
    const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = import.meta.env.VITE_API_URL;
    const values = formik.values;

    const subjectString =
      values.subject === "other"
        ? values.otherSubject
        : subjectOptionsContact.find((opt) => opt.value === values.subject)
            ?.label || "";

    const projectLabel =
      projectTypeOptions.find((opt) => opt.value === values.projectType)
        ?.label || "";

    const delayLabel =
      values.deadline === "other"
        ? values.otherDelay
        : delayOptions.find((opt) => opt.value === values.deadline)?.label ||
          "";

    const budgetValue = values.budget.replace(/[^\d]/g, "");

    const payload = {
      name: `${values.firstName} ${values.lastName}`,
      email: values.email,
      message:
        values.type === "quote"
          ? `Entreprise: ${values.companyName}\nProjet: ${projectLabel}\nDescription: ${values.projectDescription}\nBudget: ${budgetValue} euros\nDélai: ${delayLabel}`
          : `Sujet: ${subjectString}\nMessage:\n${values.contactMessage}`,
      hcaptchaToken: token,
    };

    const toastId = toast.loading("⏳ Envoi du message...");

    try {
      const response = await fetch(`${API_URL}/contact/${CLIENT_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log(result);
      console.log(response);
      if (response.ok) {
        toast.update(toastId, {
          render: "✅ Message envoyé avec succès !",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        formik.resetForm();
      } else {
        toast.update(toastId, {
          render: `❌ Erreur : ${result.error}`,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } catch (err) {
      console.error(err);
      toast.update(toastId, {
        render: "❌ Erreur lors de l'envoi du formulaire",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    } finally {
      formik.setSubmitting(false);
      if (selectedType === "contact") contactCaptchaRef.current.resetCaptcha();
      else if (selectedType === "quote") quoteCaptchaRef.current.resetCaptcha();
    }
  };

  const handleTypeChange = (value) => {
    setSelectedType(value);
    setSelectedSubject("");
    setSelectedDelay("");

    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={styles.container}>
      <form ref={formRef} onSubmit={formik.handleSubmit}>
        <div className={styles.row}>
          <div>
            <InputCustom
              id="lastName"
              name="lastName"
              placeholder="Nom"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className={styles.error}>{formik.errors.lastName}</div>
            )}
          </div>
          <div>
            <InputCustom
              id="firstName"
              name="firstName"
              placeholder="Prénom"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className={styles.error}>{formik.errors.firstName}</div>
            )}
          </div>
        </div>
        <div>
          <InputCustom
            id="email"
            name="email"
            placeholder="Email"
            style={{ marginTop: "15px" }}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className={styles.error}>{formik.errors.email}</div>
          )}
        </div>
        <div>
          <SelectCustom
            ref={selectRef}
            id="type"
            name="type"
            options={typeOptions}
            value={selectedType || ""}
            onChange={(e) => {
              const selectedOption = e.target.value;
              formik.setFieldValue("type", selectedOption);
              handleTypeChange(selectedOption);
              if (formRef.current) {
                formRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            onBlur={() => formik.setFieldTouched("type", true)}
            style={{ marginTop: "15px" }}
          />
        </div>

        {selectedType === "quote" && (
          <>
            <div>
              <InputCustom
                id="companyName"
                name="companyName"
                placeholder="Nom de l'entreprise / organisation"
                style={{ marginTop: "15px", width: "100%" }}
                value={formik.values.companyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.companyName && formik.errors.companyName && (
                <div className={styles.error}>{formik.errors.companyName}</div>
              )}
            </div>
            <SelectCustom
              id="projectType"
              name="projectType"
              options={projectTypeOptions}
              value={formik.values.projectType || ""}
              onChange={formik.handleChange}
              onBlur={() => formik.setFieldTouched("projectType", true)}
              style={{ marginTop: "15px", width: "100%" }}
            />
            {formik.touched.projectType && formik.errors.projectType && (
              <div className={styles.error}>{formik.errors.projectType}</div>
            )}
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
              value={formik.values.projectDescription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.projectDescription &&
              formik.errors.projectDescription && (
                <div className={styles.error} style={{ marginTop: "-2px" }}>
                  {formik.errors.projectDescription}
                </div>
              )}
            <InputCustom
              id="budget"
              name="budget"
              placeholder="Budget estimé (€)"
              style={{ marginTop: "15px", width: "100%" }}
              maxLength={5}
              value={formik.values.budget}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.budget && formik.errors.budget && (
              <div className={styles.error}>{formik.errors.budget}</div>
            )}
            <SelectCustom
              id="deadline"
              name="deadline"
              options={delayOptions}
              value={formik.values.deadline || ""}
              onChange={(e) => {
                setSelectedDelay(e.target.value);
                formik.handleChange(e);
              }}
              onBlur={() => formik.setFieldTouched("deadline", true)}
              style={{ marginTop: "15px", width: "100%", color: "white" }}
            />
            {formik.touched.deadline && formik.errors.deadline && (
              <div className={styles.error}>{formik.errors.deadline}</div>
            )}

            {selectedDelay === "other" && (
              <InputCustom
                id="otherDelay"
                name="otherDelay"
                placeholder="Précisez un délai"
                style={{
                  marginTop: "15px",
                }}
                value={formik.values.otherDelay}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            )}
            {formik.touched.otherDelay && formik.errors.otherDelay && (
              <div className={styles.error}>{formik.errors.otherDelay}</div>
            )}

            <HCaptcha
              sitekey={import.meta.env.VITE_HCAPTCHA_SITEKEY}
              size="invisible"
              ref={quoteCaptchaRef}
              onVerify={handleVerify}
            />

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
                  borderRadius: "0",
                  width: "40%",
                  opacity: formik.isSubmitting ? 0.6 : 1,
                  cursor: formik.isSubmitting ? "not-allowed" : "pointer",
                }}
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Envoi..." : "Envoyer"}
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
              value={formik.values.subject || ""}
              onChange={(e) => {
                setSelectedSubject(e.target.value);
                formik.handleChange(e);
              }}
              onBlur={() => formik.setFieldTouched("subject", true)}
              style={{ marginTop: "15px" }}
            />
            {formik.touched.subject && formik.errors.subject && (
              <div className={styles.error}>{formik.errors.subject}</div>
            )}
            {selectedSubject === "other" && (
              <div>
                <InputCustom
                  id="otherSubject"
                  name="otherSubject"
                  placeholder="Précisez votre sujet"
                  style={{ marginTop: "15px" }}
                  value={formik.values.otherSubject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.otherSubject && formik.errors.otherSubject && (
                  <div className={styles.error}>
                    {formik.errors.otherSubject}
                  </div>
                )}
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
              value={formik.values.contactMessage}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.contactMessage && formik.errors.contactMessage && (
              <div className={styles.error} style={{ marginTop: "-2px" }}>
                {formik.errors.contactMessage}
              </div>
            )}

            <HCaptcha
              sitekey={import.meta.env.VITE_HCAPTCHA_SITEKEY}
              size="invisible"
              ref={contactCaptchaRef}
              onVerify={handleVerify}
            />

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
                  borderRadius: "0",
                  width: "40%",
                  opacity: formik.isSubmitting ? 0.6 : 1,
                  cursor: formik.isSubmitting ? "not-allowed" : "pointer",
                }}
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Envoi..." : "Envoyer"}
              </Btn>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
