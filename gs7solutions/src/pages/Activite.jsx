import React from "react";
import { useTranslation } from "react-i18next";

import RightPageComponants from "../components/RightPageComponants";

const Metier = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-2 p-3 border-r">
          <h1 className=" font-bold text-xl md:text-2xl border-b-2 md:ml-[80px] border-red-500 my-2  w-fit ">
            {t("Activités")}
          </h1>
          <div className="md:pl-20 md:pt-3 md:mt-2">
            <ul className="text-sm md:text-md list-disc ml-7 p-3 ">
              <li>
                {t(
                  "Participation au développement de la pensée stratégique africaine"
                )}
              </li>
              <li>
                {t(
                  "Réflexion sur la recherche et le renforcement de la paix et de la sécurité en Afrique"
                )}
              </li>
              <li> {t("Etudes et Analyses stratégiques")}</li>
              <li>
                {t(
                  "Publication d’études, d’articles et de contributions relatives à la Défense et à la sécurité"
                )}
              </li>
              <li>{t("Conseils en défense et sécurité")}</li>
              <li>
                {" "}
                {t("Etudes, Analyse et Evaluation en matière de Sécurité")}
              </li>
              <li>
                {t(
                  "Etude et Evaluation de la sécurité au profit des projets, des entreprises et des investisseurs."
                )}
              </li>
              <li>
                {t(
                  "Renforcement des compétences en Sécurité & Défense (FDS) des décideurs, élus, cadres … ."
                )}
              </li>
              <li> {t("Réforme du Secteur de la Sécurité (RSS/SSR) .")}</li>
              <li> {t("Désarmement, Démobilisation et Réinsertion (DDR)")}</li>
              <li> {t("Séminaires en leadership, sécurité et stratégie")}</li>
              <li> {t("Conférences")}</li>
              <li>
                {t(
                  "Conseils en organisation au profit des FDS sénégalaises et africaines"
                )}
              </li>
              <li>{t("Conception logistique")}</li>
              <li>
                {t(
                  "Conseils et Interventions RH au profit des FDS (Audit, GPEC, SIRH, bilans…)"
                )}
              </li>
              <li> {t("Conseils et interventions en budget et finances")}</li>
              <li>
                {t("Formations/Renforcement de compétences au profit FDS")}
              </li>
              <li>
                {t(
                  "Instruction technique et tactique dans le cadre des Opérations de Maintien de la Paix (OMP)"
                )}{" "}
                (OMP)
              </li>
              <li>Certification.</li>
              <li>
                {t(
                  "Reconversion de militaires et paramilitaires retraités ou libérés"
                )}
              </li>
              <li>
                {t(
                  "Assistance acquisition équipements militaires et de sécurité"
                )}
              </li>
              <li>
                {t(
                  "Assistance acquisition système informatisé d’instruction et d’entrainement"
                )}
              </li>
              <li> {t("Assistance acquisition système de surveillance")}</li>
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
