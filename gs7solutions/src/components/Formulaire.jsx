import React from "react";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { At, ChatCenteredText } from "@phosphor-icons/react";
import { Toast } from "primereact/toast";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

const Formulaire = () => {
  const { t } = useTranslation();
  const toast = useRef(null);
  const showSticky = () => {
    toast.current.show({
      severity: "success",
      summary: "Message envoyé !",
      detail: "Nous vous recontacterons bientôt. !",
    });
  
   
  };

  const sendMail = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3030/sendmail/validationMail",
        data
      );
      console.log(response.data); // Afficher la réponse du serveur si nécessaire
      window.scrollTo(0, 100)
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail:", error);
    }
  };
  // Fonction de soumission du formulaire
  const onSubmit = (data) => {
    console.log("Données du formulaire:", data);
    sendMail(data);
    showSticky();
    
  };

  // send Mail
  const initialValues = {
    email: "",
    message: "",
    objet: "",
  };

  return (
    <div className="form-contact" data-aos="fade-right">
      <Toast ref={toast} />
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="m-3  bg-gray-100 md:pb-4 flex justify-center items-center flex-col">
          <h1 className=" text-2xl font-bold text-red-700 my-4">
            {t("Envoyer nous un message !")}
          </h1>
          <div className="flex flex-col  bg-white gap-3 md:shadow-md md:pb-3 p-10 rounded-md md:w-[80%] md:bg-blue-700 ">
            <label
              htmlFor="email"
              className="  text-sm md:text-md font-bold md:pb-2"
            >
              <At className=" md:hidden lg:hidden" size={21} />
              <p className=" hidden md:flex  ">{t("Email")}:</p>
            </label>

            <Field
              placeholder="votre email"
              className=" border text-sm py-2 pl-3 rounded-[2px] focus:outline-none"
              id="contact"
              name="email"
              type="email"
              required
            />

            <label
              htmlFor="message"
              className=" text-sm md:text-md  font-bold md:pb-2"
            >
              <ChatCenteredText className=" md:hidden lg:hidden" size={21} />
              <p className=" hidden md:flex  ">{t("Object du message")}:</p>
            </label>

            <Field
              placeholder="objet du message..."
              className="border pl-3  text-sm py-2 p-1 rounded-[2px] focus:outline-none"
              id="objet"
              name="objet"
              required
            />
            <label
              htmlFor="email"
              className="  text-sm md:text-md font-bold md:pb-2"
            >
              <At className=" md:hidden lg:hidden" size={21} />
              <p className=" hidden md:flex  ">{t("Message")}:</p>
            </label>
            <Field
              className="border pl-3 my-2 h-[100px] rounded-sm focus:outline-none"
              name="message"
              id="message"
              as="textarea"
              placeholder="Votre message"
              required
            />
            <button
              type="submit"
              className="rounded-sm md:w-fit md:mx-auto md:px-8 round md:py-2   text-gray-100 font-semibold bg-red-600 py-2 eounded-sm cursor-pointer my-2"
           
            >
              {t("Envoyer")}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Formulaire;
