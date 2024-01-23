import React from "react";
import { useTranslation } from "react-i18next";

import RightPageComponants from "../../components/RightPageComponants";

const Demarche = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-2 p-3 border-r">
          <h1 className=" font-bold text-xl md:text-2xl border-b-2 md:ml-[80px] border-red-500 my-2  w-fit ">
            {t("Notre démarche")}
          </h1>
          <div className="md:pl-20 md:pt-3 md:mt-2">
            <p className="text-sm md:text-md  text-justify p-3 ">
              {t(
                "GS7S est une structure conçue pour intervenir essentiellement dans le secteur de la défense et de la sécurité en Afrique"
              )}
            </p>
            <p className="text-sm md:text-md  text-justify p-3 ">
              {t(
                "Privilégiant une approche globale et systémique, GS7Solutions participe à la recherche strategique et s’engage aussi à appuyer en priorité les organismes militaires et paramilitaires chargés d’assurer directement la sécurité des populations."
              )}
            </p>
            <p className="text-sm md:text-md  text-justify p-3 ">
              {t(
                "Par des conseils adaptés et des solutions appropriées, GS7S vise ainsi à contribuer en priorité au renforcement des capacités et des compétences des Forces de Défense et de Sécurité africaines"
              )}
            </p>
            <p className="text-sm md:text-md  text-justify p-3 ">
              {t(
                "Prenant en considération la globalité des préoccupations sécuritaires et la diversité des acteurs placés à tous les niveaux (des décideurs de haut niveau aux soldats en première ligne), GS7S ambitionne de contribuer aussi au renforcement des compétences des élites et des organisations civiles en matière de défense et de sécurité."
              )}
            </p>
            <p className="text-sm md:text-md  text-justify p-3 ">
              {t(
                "Se positionnant entre les structures de prise de réflexion et deprise de décision, et les organisations en charge directe de la sécurité des populations, GS7S vise surtout à se faire identifier comme une entreprise de référence engagée dans la recherche de la paix et de la sécurité par son appui aux différents acteurs et ses contributions."
              )}
            </p>
            <p className="text-sm md:text-md  text-justify p-3 ">
             {t("Ainsi, GS7S interviendra sur 3 dimensions:")}
            </p>

            <ul className="text-sm md:text-md list-decimal ml-7 p-3 ">
              <li>
                 {t("La Recherche et l’analyse de la situation sécuritaire locale et internationale en vue de contribuer positivement à l’élaboration des politiques et aux prises de décisions relatives à la sécurité, en tant que Think Tank.")}
              </li>
              <li>
                {t("Le renforcement des compétences en matière de défense et sécurité par des conseils en organisation et des actions de formation ou de renforcement de compétences au profit de groupes bien ciblés ,aussi bien au niveau civil, militaire que paramilitaire. Parmi ces groupes ciblés on peut citer les Forces de Défense et de Sécurité (militaires et paramilitaires), les parlementaires, les élus locaux, les hautes autorités, les cadres, les décideurs, les investisseurs, les opérationnels, femmes et hommes au contact direct.")} 
              </li>
              <li>
                {t("L’appui aux FDS africaines et aux entreprises dans les domaines des ressources humaines, de la logistique, des équipements, de l’informatique et des systèmes d’information en vue de renforcer leur potentiel et leurs capacités d’intervention.")}
                
              </li>
            </ul>
            <p className="text-sm md:text-md  text-justify p-3 ">
           {t("Les activités répertoriées au sein de ces trois (3) axes seront pilotées par des consultants expérimentés et de très haut niveau. Dans l’exécution de leur mission, ces derniers partageront leur expertise avec celle des consultants spécialisés et des intervenants extérieurs. En plus, GS7S compte mettre en valeur la fraîcheur d’esprit de jeunes diplômés qui pourront bénéficier de l’encadrement des seniors pilotes des domaines de compétence de GS7S listés ci-après :")}
            </p>
            <ul className="text-sm md:text-md list-decimal ml-7 p-3  ">
              <li className="text-red-600 cursor-pointer">
                {t("Relations Internationales – Sécurité – Maintien de la paix – Stratégies")}
              </li>
              <li className="text-red-600 cursor-pointer">
                {t("Organisation et réforme du secteur de la sécurité")}
              </li>
              <li className="text-red-600 cursor-pointer">
               
                {t("Ressources Humaines")}
              </li>
              <li className="text-red-600 cursor-pointer">
                 {t("Leadership")}
              </li>
              <li className="text-red-600 cursor-pointer">
                {" "}
                {t("Finances/Budjets")}
              </li>
              <li className="text-red-600 cursor-pointer">
                {" "}
                {t("Logistique/Equipements ")}
              </li>
              <li className="text-red-600 cursor-pointer">
                 {t("Informatique")}
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

export default Demarche;
