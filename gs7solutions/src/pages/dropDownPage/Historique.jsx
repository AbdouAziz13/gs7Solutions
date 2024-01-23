import React from "react";
import RightPageComponants from "../../components/RightPageComponants";
import { useTranslation } from "react-i18next";

const Historique = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-2 p-3 border-r">
          <h1 className=" font-bold text-xl md:text-2xl border-b-2 md:ml-[80px] border-red-500 my-2  w-fit ">
              {t("Historique de la socièté GS7S")}
          </h1>
          <div className="md:pl-20 md:pt-3 md:mt-2">
            <p className="text-sm md:text-md  text-justify p-3 border-b">
               {t("GS7S est le fruit d’un ensemble de rencontres et de riches échanges entre acteurs de divers pays africains, tous soucieux des défis sécuritaires qui freinent le développement du continent.")}
            </p>

            <ul className="text-sm md:text-md list-disc ml-7 p-3 ">
              <li>
               <strong>Mai 2003</strong>,  {t("Zambakro (Cote d’Ivoire) : Le Colonel Abou Oumarou (Niger) J3 OPS de l’Etat Major de la MICECI partage avec un groupe d’officiers africains dont le J5 Plan (Lt Colonel Seyni Cissé Diop du Sénégal) l’idée de la création d’un groupe ou cabinet d’experts militaires africains engagés dans la promotion de la sécurité en Afrique.")}
              </li>
              <li>
                <strong>Juin 2010</strong>,{t("Niamey (Niger) : Retrouvailles à Niamey entre le Colonel Seyni Cissé Diop et le Colonel Abou Oumarou (Niger). Ils échangèrent encore sur les questions de défense et de sécurité en Afrique.")}
              </li>
              <li>
                <strong>Juillet 2014</strong>, {t("Kisangani (Rép Démocratique du Congo) : Sur proposition du Colonel Seyni Cissé Diop, Commandant  du Secteur Opérationnel N°2 de la MONUSCO, le Colonel Abdou Diallo (Burkina Faso) et l’Adjudant Major Talla Ndiaye (Sénégal) participent à une réunion centrée sur la création d’un groupe d’experts militaires capable de proposer des solutions aux Forces de Défense et de Sécurité africaines. A l’issue de la réunion, les contours d’un cabinet en défense et sécurité ont été tracés.")}
              </li>
              <li>
                <strong>Mars 2015</strong> ,{t("Dakar (Sénégal) : Débutconceptualisation du cabinet d’experts militaires")}.
              </li>
              <li>
                <strong>22 juillet 2015</strong> ,  {t("Dakar : Immatriculation de la société Global System 7 Solutions")}
              </li>
              <li>
                <strong>5 Décembre 2015</strong> , {t("lancement des activités de GS7 présidé par le Général Lamine Cisse")}
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

export default Historique;
