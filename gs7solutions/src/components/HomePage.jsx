import React, { useContext } from "react";
import professionnel from "../assets/img/profesdionnel.png";
import confidentiel from "../assets/img/confidentiel.png";
import performance from "../assets/img/performance.png";
import imageGlobe from "../assets/img/imageGlobe.png";
import Formulaire from "./Formulaire";
import arrow from "../assets/icons/arrow.svg";
import file from "../assets/icons/file.svg";
import { useNavigate } from "react-router-dom";
import video from "../assets/video (2160p).mp4";
import { Link } from "react-scroll";
import { AboutData } from "../helpers/AboutData";
import { useTranslation } from "react-i18next";
import Slider from "./Slider";
import { CalendarContext } from "../context/CalendarContext";

const HomePage = () => {
  const { t } = useTranslation();

  const PDF_FILE_URL = " http://localhost:3000/jeem.pdf";
  // download function
  const DownloadFile = (url) => {
    const fileName = url.split("/").pop();
    const atag = document.createElement("a");
    atag.href = url;
    atag.setAttribute("download", fileName);
    document.body.appendChild(atag);
    atag.click();
    atag.remove();
  };

  const { ListOfEvent } = useContext(CalendarContext);
  const navigate = useNavigate();
  return (
    <div className="homePage-wrapper">
      {/* headPage */}

      <div className="relative  h-[400px] md:h-[500px] lg:h-[500px] flex items-center justify-center">
        <video
          src={video}
          autoPlay
          muted
          loop
          controls={false}
          className="w-full h-full object-cover"
          playbackRate={0.5}
        ></video>
        <div className="absolute top-0 flex flex-col gap-3 mt-[120px] ">
          <p
            className=" p-3 text-white md:text-3xl md:max-w-[800px]  font-bold text-center"
            style={{ lineHeight: "1.8" }}
          >
            {t(
              "GLOBAL SYSTEM 7 SOLUTIONS - DÉFENSE & SÉCURITÉ - L'EXPERTISE AFRICAINE AU SERVICE DE LA PAIX ET DE LA SÉCURITÉ"
            )}
          </p>
          <div className=" mx-auto flex text-white gap-4">
            <Link
              to="valeur"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              <button className=" bg-[#C30000] border-white border-1 hover:bg-red-800 font-semibold w-[200px] py-2  rounded-sm">
                {t("Valeurs")}
              </button>
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              <button className=" bg-gray-100 border-red-600 border-1 hover:bg-gray-300 text-red-600 font-semibold w-[200px] py-2 rounded-sm">
                {t("A propos")}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* end HeadPage  */}

      {/* valeurs */}
      <div className=" my-4 md:my-[100px] flex flex-col gap-4" id="valeur">
        <h1 className=" text-3xl font-bold text-center"> {t("Valeurs")}</h1>
        <div className=" flex  justify-center items-center ">
          <ul className="  flex flex-col gap-8 md:gap-[100px] lg:gap-[100px]    md:flex-row lg:flex-row">
            <li
              className=" hover:border-b border-b-blue-600 text-center "
              data-aos="fade-right"
            >
              <img
                src={professionnel}
                alt="profesionnalisme"
                onClick={() => navigate("/entreprise")}
                className=" cursor-pointer w-[170px] h-[170px]  md:w-[130px] md:h-[130px]"
              />
              <span className=" text-2md ">{t("Professionalisme")}</span>
            </li>
            <li li className=" text-center hover:border-b border-b-red-600">
              <img
                src={confidentiel}
                alt="confidentialité"
                onClick={() => navigate("/entreprise")}
                className="  cursor-pointer w-[170px] h-[170px]  md:w-[130px] md:h-[130px]"
              />
              <span className=" text-2md ">{t("Confidentialité")}</span>
            </li>
            <li
              className=" text-center hover:border-b border-b-black"
              data-aos="fade-left"
            >
              <img
                src={performance}
                className=" cursor-pointer w-[170px] h-[170px]  md:w-[130px] md:h-[130px]"
                alt="Performance"
                onClick={() => navigate("/entreprise")}
              />
              <span className=" text-2md font-semibold">
                {" "}
                {t("Performance")}{" "}
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* section evenement  venir */}
      <div>
        <div className="my-10">
          <h1 className="text-center"> {t("Prochain événement à venir")} </h1>
          <div className=" my-10 h-[60%] mx-10  shadow-md p-10">
            <div className="flex flex-col gap-4">
              {ListOfEvent.map((event) => {
                const formattedDateStart = new Date(
                  event.start
                ).toLocaleDateString("fr-FR");
                const formattedDateEnd = new Date(event.end).toLocaleDateString(
                  "fr-FR"
                );

                return (
                  <div className="bg-gray-50 p-2 sm:flex m-3  gap-2 justify-between items-center">
                    <p className="text-md font-semibold">
                      {event.title
                        .split(" ")
                        .map((word, index) =>
                          index > 0 && index % 5 === 0 ? [<br />, word] : word
                        )}
                    </p>
                    <div>
                    <p >
                      date de debut - {formattedDateStart}
                    </p>
                    <p >date de fin - {formattedDateEnd}</p>
                    </div>
                    <button
                      className="bg-blue-600 hover:bg-blue-800 text-white p-2 rounded-sm duration-200"
                      onClick={() => navigate("/evenement")}
                    >
                      voir l'événement
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* section dipositive slider */}
      <div>
        <Slider />
      </div>

      {/* fin section dipositive slider */}

      {/* section a propos */}
      <div className="  bg-white p-2 md:grid md:grid-cols-2 md:justify-center md:items-center ">
        <div className=" p-4">
          <p className=" text-3xl md:text-3xl text-center font-bold text-red-600">
            {t("A propos")}
          </p>
          <p
            className="text-sm p-3 md:text-start my-3"
            id="about"
            data-aos="fade-up"
          >
            {t(
              `GS7S est une structure conçue pour intervenir essentiellement dans le secteur de la défense et de la sécurité en Afrique. Privilégiant une approche globale et systémique, GS7Solutions s’engage à appuyer en priorité les organismes militaires et paramilitaires chargés d’assurer directement la sécurité des populations. Prenant en considération la globalité des préoccupations sécuritaires et la diversité des acteurs placés à tous les niveaux (des décideurs de haut niveau aux soldats en première ligne), GS7S ambitionne de contribuer aussi au renforcement des compétences des élites et des organisations civiles en matière de défense et de sécurité. Lire la suite`
            )}
          </p>
          <div data-aos="fade-up">
            <ul className=" md:flex-row rounded-md bg-[#F9F9F9] p-3 grid grid-cols-3 gap-4 mx-auto">
              {AboutData.map((item) => {
                return (
                  <li
                    onClick={() => navigate(item.AboutLink)}
                    className=" cursor-pointer flex gap-1 flex-col justify-center items-center text-center"
                  >
                    <p className=" hover:translate-y-[-5px] duration-300">
                      {item.AboutIcon}
                    </p>
                    <p className=" text-[10px] md:text-[12px] text-red-600 ">
                      {t(item.AboutDesc)}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <img
          src={imageGlobe}
          alt=""
          className=" w-[500px] h-[500px] md:w-[600px] md:h-[600px] object-cover mx-auto"
        />
      </div>
      {/* fin section a propos */}

      <div>
        <Formulaire />
      </div>

      <div className=" flex md:m-6 flex-col md:flex-row justify-center items-center p-3 gap-2">
        <p>
          {t(
            "Vous pouvez télécharger la plaquette de GS7S en cliquant sur ce lien"
          )}
        </p>

        <img
          src={arrow}
          alt=""
          className="transform rotate-90 md:transform-none duration-200 w-[30px] h-[30px]"
        />
        <button
          onClick={() => {
            DownloadFile(PDF_FILE_URL);
          }}
        >
          <img
            src={file}
            data-aos="zoom-in"
            alt="palquette"
            className="w-[30px] h-[50px] md:w-[50px] md:h-[100px] cursor-pointer hover:translate-y-[-5px] duration-300"
          />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
