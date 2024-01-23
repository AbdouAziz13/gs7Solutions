import React, { useEffect, useState } from "react";
import calendarImg from "../assets/img/calendar.png";
import moment from "moment";
import event from "../assets/img/event.png"
import "moment/locale/fr"; // Importez les paramètres régionaux français
import axios from "axios";
import { useTranslation } from "react-i18next";

const Evenement = () => {
  const { t } = useTranslation();

  const [ListOfEvent, setListOfEvent] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/event")
      .then((res) => setListOfEvent(res.data));
  }, []);

  return (
    <div className="my-10">
      <div className="md: flex justify-center  m-4 rounded-md shadow-md mx-auto">
        {ListOfEvent.length === 0 ? (
          <div className=" lg:h-screen flex  flex-col items-center">
          <h1 className="text-center m-3">{t("Pas d'événement prévu pour le moment.")}</h1>
          <img src={event} className="lg:w-[500px] lg:h-[500px] w-[300px] h-[300px] " alt="" />
            
          </div>
        ) : (
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:gap-[100px]">
            {ListOfEvent.map((event) => (
              <div
                key={event._id}
                className="flex flex-col md:w-[400px] w-[300px] bg-white shadow-[30px] shadow"
              >
                <img src={calendarImg} alt="" className="mx-auto w-20 h-20" />

                <div className=" mx-4 mt-5 flex flex-col gap-3 p-2">
                  <p className=" font-semibold">Titre :</p>
                  <div className="  bg-[#F6FBFF] flex items-center  p-3">
                    <h3>{event.title}</h3>
                  </div>
                  <p className=" font-semibold">date :</p>
                  <div className="  bg-[#F6FBFF] flex items-start md:items-center flex-col md:flex-row p-2   gap-3 ">
                    <p className=" font-semibold">du</p>
                    <p>{moment(event.start).format("DD/M/YYYY")}</p>
                    <p className=" font-semibold">au</p>
                    <p>{moment(event.end).format("DD/MM/YYYY")}</p>
                  </div>
                  <p className=" font-semibold">Lieu :</p>
                  <div className="bg-[#F6FBFF] p-2 flex  items-center ">
                    <p>{event.location}</p>
                  </div>
                  <p className=" font-semibold">Description :</p>
                  <div
                    className="bg-[#F6FBFF] p-2 h-[100px] overflow-x-hidden overflow-ellipsis break-words"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    <p>{event.description}</p>
                  </div>
                </div>
                <div className="flex flex-col  md:flex-row gap-3 md:gap-2 mx-auto text-[15px] pb-6 pt-8 "></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Evenement;
