import React from "react";
import RightPageComponants from "../../components/RightPageComponants";
import { useTranslation } from "react-i18next";

const Metier = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-2 p-3 border-r">
          <h1 className=" font-bold text-xl md:text-2xl border-b-2 md:ml-[80px] border-red-500 my-2  w-fit ">
            {t("Nos métiers")}
          </h1>
          <div className="md:pl-20 md:pt-3 md:mt-2">
            <ul className="text-sm md:text-md list-disc ml-7 p-3 ">
              <li> {t("Recherche")}</li>
              <li> {t("Etudes")}</li>
              <li> {t("Conseils")}</li>
              <li> {t("Formation")}</li>
              <li>{t("Renforcement de compétences")}</li>
              <li>{t("Assistance technique")}</li>
              <li>{t("Equipements")}</li>
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

export default Metier;
