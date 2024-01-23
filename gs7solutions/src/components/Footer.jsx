import React , {useState , useRef} from "react";
import { footerData } from "../helpers/FooterData";
import { Link } from "react-router-dom";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { MdArrowForwardIos } from "react-icons/md";
import { useTranslation } from "react-i18next";

import axios from "axios"


const Footer = () => {
  const { t } = useTranslation();
    //  const toast = useRef(null);
    const toast = useRef(null);
    const showSticky = () => {
      toast.current.show({
        severity: "success",
        summary: "Abonnement réussi",
        detail: "Nous vous recontacterons bientôt. !",
      });
    };

    const [newsLetterEmail, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);

    // send Email
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const handleEmailChange = (e) => {
      const inputEmail = e.target.value;
      setEmail(inputEmail);
      setIsValidEmail(validateEmail(inputEmail));
    };
  
    const subscribeNewsletter = (e) => {
      e.preventDefault();
  
      if (isValidEmail) {
        axios
          .post("http://localhost:3030/sendmail/newsLetter", {
            newsLetterEmail: newsLetterEmail,
          })
          .then((res) => {
            if (res.data.error) {
              // Utilisez le Toast pour afficher le message d'erreur
              toast.current.show({
                severity: "error",
                summary: "Erreur d'abonnement",
                detail: "Cette adresse e-mail est déjà inscrite à la newsletter.",
              });
            } else {
              // Si l'ajout à la newsletter réussit
              showSticky(); // Vous pouvez également afficher un autre message de succès si nécessaire
              console.log("Abonnement réussi");
            }
          })
          .catch((error) => {
            console.error("Erreur lors de la demande d'abonnement à la newsletter:", error);
            alert("Vous étes déjà abonnée à la newsletter de GS7S.");
          });
      } else {
        alert("Adresse e-mail invalide. Veuillez saisir une adresse e-mail valide.");
      }
    };


  return (
    <div className=" text-white bg-black flex justify-center items-center  flex-col ">
     <Toast ref={toast} />
      <div className=" md:flex md:p-4  flex-col md:flex-row gap-[80px] ">
        <div className="  items-center flex flex-col">
          <p className="border-red-600   md:border-none lg:border-nonne lg:border-none text-xl py-4 font-bold border-b w-fit">
             {t("Coordonnées")}
          </p>
          <ul className="p-3  flex gap-2  flex-col items-center md:items-center ">
            {footerData.slice(0, 3).map((icon, index) => (
              < >
                <li className="text-[#F40000]" key={index}>
                  {icon.footerIcon}
                </li>
                <li
                  key={index}
                  className="text-center text-gray-300 md:max-w-[200px] text-sm"
                >
                  {icon.footerDesc}
                </li>
              </>
            ))}
          </ul>
        </div>
        <div className=" flex flex-col  gap-2 text-gray-200">
          <p className="border-red-600 mx-auto md:border-none lg:border-nonne lg:border-none text-xl py-4 font-bold border-b w-fit">
            Navigation
          </p>
          <Link className="cursor-pointer text-center hover:text-red-600 duration-300  no-underline text-white" to="/entreprise">
          {t("L'entreprise")}
          </Link>
          <Link className="cursor-pointer text-center hover:text-red-600 duration-300  no-underline text-white" to= "/domaines">
          {t("Domaines")}
          </Link>
          <Link className="cursor-pointer text-center hover:text-red-600 duration-300  no-underline text-white" to= "/activites">
          {t("Activités")}
          </Link>
          <Link className="cursor-pointer text-center hover:text-red-600 duration-300  no-underline text-white" to= "/cibles-partenaires">
          {t("Cibles et Partenaires")}
          </Link>
          <Link className="cursor-pointer text-center hover:text-red-600 duration-300  no-underline text-white" to= "/publications">
          {t("Publications")}
          </Link>
          <Link className="cursor-pointer text-center hover:text-red-600 duration-300  no-underline text-white" to= "/news-presse">
          {t("News presse")}
          </Link>
          <Link className="cursor-pointer text-center hover:text-red-600 duration-300  no-underline text-white" to= "/evenement">
          {t("Événements")}
          </Link>
          <Link className="cursor-pointer text-center hover:text-red-600 duration-300  no-underline text-white" to= "/nous-contacter">
          {t("Nous contacter")}
          </Link>
        </div>

        {/* newleteer */}
        <div className="justify-center items-center mx-auto mt-4 md:mt-10 pb-3 my-3 gap-2 flex md:flex-row  flex-col w-fit">
        <form onSubmit={subscribeNewsletter} className="flex flex-col gap-4">
            <div className="card flex justify-content-center">
              <span className="p-float-label">
                <InputText
                  id="username"
                  className={`border-2 border-blue-700 p-2 w-full ${
                    isValidEmail ? "" : "border-red-500"
                  }`}
                  value={newsLetterEmail} // Ajoutez cette ligne pour lier la valeur de l'input à l'état 'email'
                  onChange={handleEmailChange}
                  required
                />
                <label htmlFor="username">Email</label>
              </span>
            </div>
            <button
              type="submit"
              className="bg-red-700 flex gap-3  items-center text-white w-fit px-10 py-2 rounded-md hover:bg-red-800 duration-200"
            >
                {t("Envoyer")} <MdArrowForwardIos />
            </button>
          </form>
        </div>
      </div>

      <div className=" flex justify-center items-center gap-4">
        {footerData.slice(3, 7).map((icon) => {
          return (
            <div>
              <a href={icon.footerDesc} className=" text-red-600">
                {icon.footerIcon}
              </a>
            </div>
          );
        })}
      </div>
      <div className="  flex justify-center items-center text-center w-full bg-[#565656] h-[40px] mt-3">
        <p className="text-sm">© 2015-2023 GS7S - Tous droits réservés</p>
      </div>
    </div>
  );
};

export default Footer;
