import React, { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { publicationContext } from "../context/CreatePublicationContext";
import SearchBar from "./SearchBar";
import BookData from "../Data.json";
import { useTranslation } from "react-i18next";
import { MdArrowForwardIos } from "react-icons/md";
import { InputText } from "primereact/inputtext";

import { Toast } from "primereact/toast";

import axios from "axios";

const RightPageComponants = () => {
  // newsletter
  //  const toast = useRef(null);
  const toast = useRef(null);
  const showSticky = () => {
    toast.current.show({
      severity: "success",
      summary: "Abonnement réussi",
      detail: "Nous vous recontacterons bientôt. !",
    });
  };

  const [newsLetterEmail, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  // send Email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };

  const subscribeNewsletter = (e) => {
    e.preventDefault();

    if (isValidEmail) {
      axios
        .post("http://localhost:3030/sendmail/newsLetter", {
          newsLetterEmail: newsLetterEmail,
        })
        .then((res) => {
          if (res.data.error) {
            // Utilisez le Toast pour afficher le message d'erreur
            toast.current.show({
              severity: "error",
              summary: "Erreur d'abonnement",
              detail: "Cette adresse e-mail est déjà inscrite à la newsletter.",
            });
          } else {
            // Si l'ajout à la newsletter réussit
            showSticky(); // Vous pouvez également afficher un autre message de succès si nécessaire
            console.log("Abonnement réussi");
          }
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la demande d'abonnement à la newsletter:",
            error
          );
          alert("Vous étes déjà abonnée à la newsletter de GS7S.");
        });
    } else {
      alert(
        "Adresse e-mail invalide. Veuillez saisir une adresse e-mail valide."
      );
    }
  };

  const [ListOfEvent, setListOfEvent] = useState([]);
  const { t } = useTranslation();

  const [listPublications, setListPublication] = useState([]);
  const navigate = useNavigate();
  //context
  const { setPublicationUnikId, publicationUnikId } =
    useContext(publicationContext);
  console.log(publicationUnikId);

  useEffect(() => {
    // Récupérer l'ID de la publication depuis le localStorage

    axios
      .get("http://localhost:3030/publications/")
      .then((response) => setListPublication(response.data));
    // event
    axios
      .get("http://localhost:3030/event")
      .then((res) => setListOfEvent(res.data));

    console.log(listPublications);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // invevrs order
  const sortedPublications = [...listPublications].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div>
      <div className=" w-[50%]">
        <Toast ref={toast} />
        <SearchBar
          placeholder="rechercher..."
          data={BookData}
          listPublications={listPublications}
        />
      </div>
      <h2 className="font-bold text-xl md:text-2xl border-b-2 border-red-500 my-2  w-fit">
        {t("Articles récents")}
      </h2>
      <div className=" text-sm p-4 md:p-3  flex flex-col gap-4  text-justify">
        {sortedPublications.slice(0, 5).map((publication) => {
          return (
            <div key={publication._id} className="flex flex-col gap-2">
              <button
                onClick={() => {
                  setPublicationUnikId(publication._id);
                  localStorage.setItem("publicationUnikId", publication._id);
                  navigate(`/publications/${publication.publicationUrl}`);
                }}
                className="hover:text-black font-semibold no-underline text-gray-500 md:max-w-[200px] md:text-start"
              >
                {t(publication.title)}
              </button>
            </div>
          );
        })}
        <p
          className="text-red-500 cursor-pointer font-semibold"
          onClick={() => navigate("/publications")}
        >
          voir plus...
        </p>
      </div>
      <div className="flex justify-end items-center md:items-start flex-col">
        <h2 className="font-bold text-xl md:text-2xl border-b-2 border-red-500 my-2  w-fit">
          {t("Prochains événements")}
        </h2>
        {ListOfEvent.length === 0 ? (
          <p className=" txt-sm">
            {t("Pas d'événement prévu pour le moment.")}
          </p>
        ) : (
          <div className="flex flex-col">
            {ListOfEvent.map((event) => {
              const formattedDateStart = new Date(
                event.start
              ).toLocaleDateString("fr-FR");
              const formattedDateEnd = new Date(event.end).toLocaleDateString(
                "fr-FR"
              );
              return (
                <div>
                  <p className="font-semibold">
                    {" "}
                    {event.title
                      .split(" ")
                      .map((word, index) =>
                        index > 0 && index % 5 === 0 ? [<br />, word] : word
                      )}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-bold">Du</span> {formattedDateStart}{" "}
                    <span className="font-bold">au</span> {formattedDateEnd}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className=" mt-5 flex justify-end items-center md:items-start flex-col gap-3">
        <h2 className="font-bold text-xl md:text-2sm border-b-2 border-red-500 border-spa my-2  pb-2">
          {t("Abonnez-vous à notre Newsletter")}
        </h2>
        <form onSubmit={subscribeNewsletter} className="flex flex-col gap-4">
          <div className="card flex justify-content-center">
            <span className="p-float-label">
              <InputText
                id="username"
                className={`border-2 border-blue-700 p-2 w-full ${
                  isValidEmail ? "" : "border-red-500"
                }`}
                value={newsLetterEmail} // Ajoutez cette ligne pour lier la valeur de l'input à l'état 'email'
                onChange={handleEmailChange}
                required
              />
              <label htmlFor="username">Email</label>
            </span>
          </div>
          <button
            type="submit"
            className="bg-red-700 flex gap-3  items-center text-white w-fit px-10 py-2 rounded-md hover:bg-red-800 duration-200"
          >
            {t("Envoyer")} <MdArrowForwardIos />
          </button>
        </form>
      </div>
    </div>
  );
};

export default RightPageComponants;
