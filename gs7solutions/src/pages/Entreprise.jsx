import React from "react";
import RightPageComponants from "../components/RightPageComponants";
import { useTranslation } from "react-i18next";

const Entreprise = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-2 p-3 border-r">
          <h1 className=" font-bold text-xl md:text-2xl border-b-2 md:ml-[80px] border-red-500 my-2  w-fit ">
            {t("L'entreprise")}
          </h1>
          <div className="md:pl-20 md:pt-3 md:mt-2">
            <h2 className=" text-red-500 font-semibold text-[20px]">
              {t("vision")}
            </h2>
            <p className="text-sm md:text-md  text-justify p-3 border-b">
              {t(
                "GS7S ambitionne de se positionner comme une structure de référence, reconnue pour sa contribution efficiente dans la recherche de la paix et de la sécurité en Afrique grâce à ses études stratégiques et l’appui qu’elle fournit aux différents acteurs de la sécurité, notamment les Forces de Défense et de Sécurité Africaines."
              )}
            </p>

            <h2 className="text-red-500 font-semibold text-[20px]">
              {" "}
              {t("Valeurs")}
            </h2>
            <ul className="text-sm md:text-md list-disc ml-7 border-b p-3">
              <li>{t("Professionnalisme ")}</li>
              <li>{t("Confidentialité")} </li>
              <li>{t("Performance ")}</li>
            </ul>
            <h2 className="text-red-500 font-semibold my-1 text-[20px]">
              {t("Missions ")}
            </h2>
            <p className="p-3 text-sm md:text-md ">
              {t(
                "En vue de contribuer à la recherche et au renforcement de la paix et de la sécurité en Afrique, GS7S vise à:"
              )}
            </p>
            <ul className="text-sm md:text-md list-disc ml-7 p-3 ">
              <li>
                {t(
                  "Contribuer au développement de la pensée stratégique africaine"
                )}
              </li>
              <li>
                {t(
                  "Contribuer au renforcement de l’esprit Défense & Sécurité chez les décideurs africains et la société civile"
                )}
              </li>
              <li>
                {t(
                  "Contribuer au développement de l’esprit paix et sécurité chez les jeunes africains"
                )}
              </li>
              <li>
                {t(
                  "Soutenir les forces de défense et de sécurité (FDS) africaines par des conseils appropriés et des solutions adaptées"
                )}
              </li>
              <li>
                {t(
                  "Contribuer à la satisfaction des besoins en sécurité des organisations, des entreprises et des investisseurs qui en expriment le besoin"
                )}
              </li>
              <li>
                {t(
                  "Favoriser le transfert de l’expertise militaire dans l’environnement civil"
                )}
              </li>
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

export default Entreprise;
