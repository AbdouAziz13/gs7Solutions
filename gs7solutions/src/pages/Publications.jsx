import React, { useContext } from "react";
import RightPageComponants from "../components/RightPageComponants";
import { useNavigate } from "react-router-dom";
import { publicationContext } from "../context/CreatePublicationContext";
import { useTranslation } from "react-i18next";


const Publication = () => {
  const { t } = useTranslation();
 

  const Navigate = useNavigate();
  const { setPublicationUnikId, listPublications } = useContext(publicationContext);

  // Triez les publications par date du plus récent au plus ancien
  const sortedPublications = [...listPublications].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <>
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-2 p-3 border-r">
          <h1 className="font-bold text-xl md:text-2xl border-b-2 md:ml-[80px] border-red-500 my-2 w-fit">
            
            {t("Publications")}
          </h1>
          {sortedPublications.map((Publication) => {
            const formattedDate = new Date(Publication.date).toLocaleDateString("fr-FR");
            return (
              <div className="md:pl-20 md:pt-3 md:mt-2" key={Publication._id}>
                <div className="border-b p-2">
                  <p className="text-[#f71902] font-bold">
                    Contribution-{formattedDate}
                  </p>
                  <p className="font-semibold">{Publication.title}</p>
                  <button
                    onClick={() => {
                      setPublicationUnikId(Publication._id);
                      localStorage.setItem("publicationUnikId", Publication._id);
                      Navigate(`/publications/${Publication.publicationUrl}`);
                    }}
                    className="text-red-400 pt-3"
                  >
                   
                    {t("Cliquez ici pour voir l’article")}

                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="md:col-span-1 p-2">
          <RightPageComponants />
        </div>
      </div>
    </>
  );
};

export default Publication;
