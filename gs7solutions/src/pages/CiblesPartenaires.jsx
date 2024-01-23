import React   from "react";
import RightPageComponants from "../components/RightPageComponants";
import { useTranslation } from "react-i18next";


const CiblesPartenaires = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-2 p-3 border-r">
          <h1 className=" font-bold text-xl md:text-2xl border-b-2 md:ml-[80px] border-red-500 my-2  w-fit ">
             {t("Cibles et Partenaires")}
          </h1>
          <div className="md:pl-20 md:pt-3 md:mt-2">
            <ul className="text-sm md:text-md list-disc ml-7 p-3 ">
              <li>
                 {t("Forces de Défense et de Sécurité (FDS) du Sénégal et de l’Afrique")} 
              </li>
              <li>
                 {t("Institutions publiques (Ministères, Agences Assemblées, Conseils, …)")}
              </li>
              <li>{t("Collectivités locales")}</li>
              <li> {t("Cadres civils")}</li>
              <li>{t("Instituts de formation")}</li>
              <li>{t("Entreprises et industries")}</li>
              <li>{t("Investisseurs")}</li>
              <li>{t("Agences et organismes de sécurité de proximité")}</li>
              <li>{t("ONG (Organisations Non Gouvernementales) ")}</li>
              <li>{t("OSC (Organisations de la Société Civile)")}</li>
              <li>{t("Programmes de développement")}</li>
              <li>{t("Conférences")}</li>
              <li>{t("Ambassades")}</li>
              <li>{t("Organisations Internationales (ONU, UA, CEDEAO, CEEAC, UMA, EAC, UE, CICR, etc)")}
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

export default CiblesPartenaires;
