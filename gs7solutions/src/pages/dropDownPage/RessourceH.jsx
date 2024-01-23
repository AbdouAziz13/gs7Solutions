import React from "react";
import RightPageComponants from "../../components/RightPageComponants";
import { useTranslation } from "react-i18next";

const RessourceH = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-2 p-3 border-r">
          <h1 className=" font-bold text-xl md:text-2xl border-b-2 md:ml-[80px] border-red-500 my-2  w-fit ">
             {t("Ressources Humaines")}
          </h1>
          <div className="md:pl-20 md:pt-3 md:mt-2">
            <p className="text-sm md:text-md  text-justify p-3 text-red-600 ">
               {t("DIRECTION & ADMINISTRATION")}
            </p>
            <p className="text-sm md:text-md  text-justify p-3 ">{t("Le Directeur Général , Colonel (Cr) Seyni Cissé Diop est un officier parachutiste de réserve de l’Armée Sénégalaise qui bénéficie d’une expérience de 40 années de service militaire dont plus de 10 passées à l’étranger dans le cadre de sa formation et des opérations de maintien de la paix. Diplômé de l’Institut des Hautes Etudes de Défense de Rome et breveté de l’Ecole Supérieure de Guerre, il est Master 2 en Advanced Security Studies, Master en Etudes stratégico-militaires et Master2/DESS en Gestion des Ressources Humaines. Il parle couramment le wolof, le français, l’Anglais, l’italien, et comprend le kiswahili.")}</p>
            <p className="text-sm md:text-md  text-justify p-3 text-red-600">
               {t("CONSULTANTS SENIOR PILOTES DE DOMAINE")}
            </p>
            <p className="text-sm md:text-md  text-justify p-3 ">{t("Les consultants pilotes de domaine conduiront toutes les activités relatives à leur domaine de compétence et assurent en conséquence la liaison permanente avec les clients pendant toute la durée des missions qui leur seront confiées.")}
            </p>
            <p className="text-sm md:text-md  text-justify p-3 text-red-600">
                {t("CONSULTANTS SPECIALISÉS")}
            </p>
            <p className="text-sm md:text-md  text-justify p-3 ">{t("Les consultants spécialisés travailleront chacun dans son domaine de compétence, en parfaite synergie avec les pilotes de domaine et les consultants junior.")}
            </p>
            <p className="text-sm md:text-md  text-justify p-3 text-red-600 ">
               {t("CONSULTANTS JUNIORS")}
            </p>
            <p className="text-sm md:text-md  text-justify p-3 ">
                {t("GS7S encourage la participation de jeunes diplômés qui, encadrés par des seniors pourront bénéficier de leur solide expérience tout en apportant une nette plus value à GS7S.")}
            </p>
            <p className="text-sm md:text-md  text-justify p-3 text-red-600">
                {t("INTERVENANTS/COMPÉTENCES MOBILISABLES")}
            </p>
            <p className="text-sm md:text-md  text-justify p-3 ">
             {t("GS7S dispose de personnes ressources expertes qui interviennent en cas de besoin.")}
            </p>
            <p className="text-sm md:text-md  text-justify p-3 ">
                {t("Par ailleurs, un réseau de correspondants nationaux et internationaux contribueront en permanence aux publications de GS7S qui pourra aussi faire appel à leurs compétences pour toute activité qui nécessitera leur implication directe.")}
            </p>
          </div>
        </div>

        <div className="md:col-span-1 p-2">
          <RightPageComponants />
        </div>
      </div>
    </>
  );
};

export default RessourceH;
