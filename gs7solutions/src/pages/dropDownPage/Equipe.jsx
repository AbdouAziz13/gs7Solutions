import React from "react";
import RightPageComponants from "../../components/RightPageComponants";
import colonel from "../../assets/img/colonel.jpg";
import { useTranslation } from "react-i18next";
import { LinkedinLogo, EnvelopeOpen } from "@phosphor-icons/react";

const NewPresse = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-2 p-3  border-r ">
          <div className="w-full md:p-3  shadow-md flex flex-col md:flex-row md:gap-4">
            <div className=" gap-2 flex flex-col justify-center items-center">
              <img
                src={colonel}
                alt=""
                className=" w-[200px] h-[200px] object-cover rounded-md"
              />
              <p className=" font-mono text-[12px] font-bold my-2">
              {t("Le directeur Général : Seyni Cissé Diop")}
              </p>
              <ul className=" flex flex-col ml-3">
                <li className=" flex items-center gap-1">
                  <EnvelopeOpen />
                  <p className=" text-red-500 text-[14px]">
                    scdiop@gs7solutions.com
                    <span className="text-black"> {t("or")} </span> scdiop@yahoo.fr
                  </p>
                </li>
                <li className="flex items-center gap-1">
                  <LinkedinLogo />
                  <a href="a" className=" text-red-500">
                   {t("Le directeur Général : Seyni Cissé Diop")}
                 
                  </a>
                </li>
              </ul>
            </div>
            <div className=" p-2">
              <p className=" text-sm md:text-md md:max-w-[390px] md:text-justify"> {t("Le Directeur Général , Colonel (Cr) Seyni Cissé Diop est un officier parachutiste de réserve de l’Armée Sénégalaise qui bénéficie d’une expérience de 40 années de service militaire dont plus de 10 passées à l’étranger dans le cadre de sa formation et des opérations de maintien de la paix. Diplômé de l’Institut des Hautes Etudes de Défense de Rome et breveté de l’Ecole Supérieure de Guerre, il est Master 2 en Advanced Security Studies, Master en Etudes stratégico-militaires et Master2/DESS en Gestion des Ressources Humaines. Il parle couramment le wolof, le français, l’Anglais, l’italien, et comprend le kiswahili.")}
              </p>
            </div>
          </div>
          <ul className=" list-disc ml-7 p-3 mt-5 border-b">
            <li>{t("Des cadres de haut niveau bénéficiant d’une solide expérience acquise pendant leur service au sein des Forces de Défense et de Sécurité")}
            </li>
            <li>{t("Des experts, femmes et hommes maitrisant leur domaine de compétence")}
            </li>
            <li>{t("Des jeunes chercheurs fortement imprégnés des problèmes sécuritaires de l’Afrique et du monde")}
            </li>
            <li>{t("Un réseau de consultants et de correspondants africains et internationaux")}
            </li>
          </ul>
        </div>

        <div className="md:col-span-1 p-2">
          <RightPageComponants />
        </div>
      </div>
    </>
  );
};

export default NewPresse;
