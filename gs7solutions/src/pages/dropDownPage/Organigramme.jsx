import React from "react";
import RightPageComponants from "../../components/RightPageComponants";
import { useTranslation } from "react-i18next";

const Organigramme = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-2 p-3 border-r">
          <h1 className=" font-bold text-xl md:text-2xl border-b-2 md:ml-[80px] border-red-500 my-2  w-fit ">
           {t("Organigramme")}
          </h1>
          <div className="md:pl-20 md:pt-3 md:mt-2">
            <p className="text-sm md:text-md  text-justify p-3">
               {t(" L'equipe est composé ainsi")}
            </p>
            <ul className="text-sm md:text-md list-decimal ml-7 p-3 ">
              <li>{t("Directeur Général")}</li>
              <li>{t("Consultants Pilotes de domaines")}</li>
              <li>{t("Consultants spécialisés")}</li>
              <li>{t("Consultants Junior")}</li>
              <li>{t("Intervenants et Correspondants")}</li>
            </ul>
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
