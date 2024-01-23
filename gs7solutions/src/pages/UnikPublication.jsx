import React, { useEffect, useState } from "react";
import axios from "axios";
import RightPageComponants from "../components/RightPageComponants";
import { useTranslation } from "react-i18next";


const UnikPublication = () => {
  const { t } = useTranslation();

  const [unikPublictionContent, setUnikPublictionContent] = useState([]);



  const storedPublicationId = localStorage.getItem("publicationUnikId");
  useEffect(() => {
    axios
      .get(`http://localhost:3030/publications/${storedPublicationId}`)
      .then((response) => {
        setUnikPublictionContent(response.data);
      });
  }, [storedPublicationId]);

  // Fonction pour redimensionner les images
  const resizeImages = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    
    // Sélectionnez toutes les balises d'image
    const images = doc.querySelectorAll("img");

    // Redimensionnez chaque image
    images.forEach((image) => {
      image.style.width = "350px"; 
      image.style.height = "350px"; 
      image.style.objectFit = "contain";
    });

    // Retourne le HTML modifié avec les images redimensionnées
    return doc.body.innerHTML;
  };

  return (
    <>
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-2 p-3 border-r">
          <h1 className=" font-bold text-xl md:text-xl border-b-2 md:ml-[80px] border-red-500 my-2  w-fit ">
            {t(unikPublictionContent.title)}  
          
          </h1>
          <div
            className="p-7 md:px-10 text-justify"
            dangerouslySetInnerHTML={{
              __html: resizeImages(t(unikPublictionContent.publicationBody)),
            }}
          />
        </div>
        <div className="md:col-span-1 p-2">
          <RightPageComponants />
        </div>
      </div>
    </>
  );
};

export default UnikPublication;
