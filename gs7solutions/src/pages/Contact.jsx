import React from "react";
import RightPageComponants from "../components/RightPageComponants";
import Formulaire from "../components/Formulaire";
import { useTranslation } from "react-i18next";


const Organigramme = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-2 p-3 border-r">
          <h1 className=" font-bold text-xl md:text-2xl border-b-2 md:ml-[80px] border-red-500 my-2  w-fit ">
             {t("Nous-contacter")}
          </h1>
          <div className="md:pl-20 md:pt-3 md:mt-2">
            <p className="text-sm md:text-md  text-justify p-3">
               {t("L'equipe est composé ainsi")} 
            </p>
            <ul className="text-sm md:text-md  space-y-2 ml-7 p-3 ">
              <li>
                – <strong>{t("Siège")} : </strong> Résidence Yaye Dié sise au N°B113,
                Maristes1 , 11500 Dakar SENEGAL
              </li>
              <li>
                – <strong>{t("Boite Postale")} : </strong> BP 7687 10500 Dakar-Medina
                SENEGAL
              </li>
              <li>
                – <strong>{t("Téléphone")} : </strong> +221 8324871 ; +22177 559 32 77
                et +22176 907 01 09L
              </li>
              <li>
                – <strong>Email : </strong>{" "}
                <span className=" text-red-600 cursor-pointer">
                  contact@gs7solutions.com
                </span>{" "}
              </li>
              <li>
                – <strong>Linkedin: </strong>
                <span className="text-red-600 cursor-pointer">
                  GS7S – Défense & Sécurité
                </span>{" "}
              </li>
            </ul>
            <Formulaire/>
          </div>
        </div>

        <div className="md:col-span-1 p-2">
          <RightPageComponants />
        </div>
      </div>
    </>
  );
};

export default Organigramme;
