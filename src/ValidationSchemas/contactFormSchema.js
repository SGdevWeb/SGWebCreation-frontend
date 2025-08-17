import * as Yup from "yup";

export const contactFormSchema = Yup.object().shape({
  lastName: Yup.string()
    .required("Oups... vous avez oublié votre nom !")
    .min(2, "Votre nom doit contenir au moins 2 caractères"),
  firstName: Yup.string()
    .required("Et votre prénom alors ? 😉")
    .min(2, "Votre prénom doit contenir au moins 2 lettres"),
  email: Yup.string()
    .email("Hmm... cet email n'a pas l'air valide")
    .required("Nous avons besoin de votre email pour vous répondre"),
  type: Yup.string().required("Choisissez le type de demande pour continuer"),

  // Champs spécifiques au type "quote"
  companyName: Yup.string().notRequired(),
  projectType: Yup.string().when("type", {
    is: "quote",
    then: (schema) => schema.required("Indiquez le type de projet"),
    otherwise: (schema) => schema.notRequired(),
  }),
  projectDescription: Yup.string().when("type", {
    is: "quote",
    then: (schema) =>
      schema.required("Donnez-nous une petite description du projet"),
    otherwise: (schema) => schema.notRequired(),
  }),
  budget: Yup.string().when("type", {
    is: "quote",
    then: (schema) =>
      schema
        .required("Un budget estimé nous aiderait 😉")
        .matches(/^\d+$/, "Le budget doit être uniquement en chiffres"),
    otherwise: (schema) => schema.notRequired(),
  }),
  deadline: Yup.string().notRequired(),
  otherDelay: Yup.string().when("deadline", {
    is: "other",
    then: (schema) => schema.required("Précise votre délai, s'il vous plaît"),
    otherwise: (schema) => schema.notRequired(),
  }),

  // Champs spécifiques au type "contact"
  subject: Yup.string().when("type", {
    is: "contact",
    then: (schema) => schema.required("Quel est le sujet de votre message ?"),
    otherwise: (schema) => schema.notRequired(),
  }),
  otherSubject: Yup.string().when(["type", "subject"], {
    is: (type, subject) => type === "contact" && subject?.value === "other",
    then: (schema) => schema.required("Précise le sujet, s'il vous plaît"),
    otherwise: (schema) => schema.notRequired(),
  }),
  contactMessage: Yup.string().when("type", {
    is: "contact",
    then: (schema) =>
      schema.required("N'oubliez pas de nous écrire un message"),
    otherwise: (schema) => schema.notRequired(),
  }),
});
