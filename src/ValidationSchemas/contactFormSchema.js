import * as Yup from "yup";

export const contactFormSchema = Yup.object().shape({
  lastName: Yup.string()
    .required("Oups... tu as oublié ton nom !")
    .min(2, "Ton nom doit contenir au moins 2 caractères"),
  firstName: Yup.string()
    .required("Hey, on veut aussi ton prénom 😉")
    .min(2, "Ton prénom doit contenir au moins 2 lettres"),
  email: Yup.string()
    .email("Hmm... cet email n'a pas l'air valide")
    .required("On a besoin de ton email pour te répondre"),
  type: Yup.string().required("Choisis le type de demande pour continuer"),

  // Champs spécifiques au type "quote"
  companyName: Yup.string().when("type", {
    is: "quote",
    then: (schema) => schema.required("Le nom de ton entreprise est requis"),
    otherwise: (schema) => schema.notRequired(),
  }),
  projectType: Yup.string().when("type", {
    is: "quote",
    then: (schema) => schema.required("Indique le type de projet"),
    otherwise: (schema) => schema.notRequired(),
  }),
  projectDescription: Yup.string().when("type", {
    is: "quote",
    then: (schema) =>
      schema.required("Donne-nous une petite description du projet"),
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
    then: (schema) => schema.required("Précise ton délai, stp"),
    otherwise: (schema) => schema.notRequired(),
  }),

  // Champs spécifiques au type "contact"
  subject: Yup.string().when("type", {
    is: "contact",
    then: (schema) => schema.required("Quel est le sujet de ton message ?"),
    otherwise: (schema) => schema.notRequired(),
  }),
  otherSubject: Yup.string().when(["type", "subject"], {
    is: (type, subject) => type === "contact" && subject?.value === "other",
    then: (schema) => schema.required("Précise le sujet, stp"),
    otherwise: (schema) => schema.notRequired(),
  }),
  contactMessage: Yup.string().when("type", {
    is: "contact",
    then: (schema) => schema.required("N'oublie pas de nous écrire un message"),
    otherwise: (schema) => schema.notRequired(),
  }),
});
