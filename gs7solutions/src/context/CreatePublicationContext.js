import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const publicationContext = createContext("");

export const PublicationContextProvider = ({ children }) => {
  // toute la logique ici
  // state variables

  const [listPublications, setListPublication] = useState([]);
  const [title, setTitle] = useState("");
  const [publicationBody, setpublicationBody] = useState("");
  const [publicationUrl, setPublicationUrl] = useState("");
  const [publicationUnikId, setPublicationUnikId] = useState("");

  //   createPublication
  const handleNewPublication = () => {
    const data = {
      title: title,
      publicationBody: publicationBody,
      publicationUrl: publicationUrl,
    };
    axios
      .post("http://localhost:3030/publications", data)
      .then((res) => {
        if (res.data.error) {
          alert("veuillez dabord vous authentifié");
        } else {
          setListPublication([
            ...listPublications,
            { title: title, publicationBody: publicationBody,publicationUrl:publicationUrl },
          ]);
        }
      })
      .catch((error) => console.log(error));
  };

  //   dell publication
  const handleDeletePublication = (publicationId) => {
    axios
      .delete(`http://localhost:3030/publications/${publicationId}`, {
        // on passe notre token
        headers: {
          myToken: localStorage.getItem("myToken"),
        },
      })
      .then((res) => {
        if (res.data.error) {
          alert("veuillez dabord vous authentifié");
        } else {
          alert("publication supprimée avec succes");
          setListPublication(
            listPublications.filter(
              (publication) => publication._id !== publicationId
            )
          );
        }
      })
      .catch((error) => console.log(error));
  };

  //   get all publication
  // recuperer toutes les publication
  useEffect(() => {
    axios
      .get("http://localhost:3030/publications/")
      .then((response) => setListPublication(response.data));
    console.log(listPublications);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <publicationContext.Provider
      value={{
        handleDeletePublication,
        handleNewPublication,
        title,
        setTitle,
        setpublicationBody,
        publicationBody,
        publicationUrl,
        setPublicationUrl,
        listPublications,

        setListPublication,
        publicationUnikId,
        setPublicationUnikId,
      }}
    >
      {children}
    </publicationContext.Provider>
  );
};
