import React, { useContext, useEffect } from "react";
import calendarImg from "../../../assets/img/calendar.png";

import moment from "moment";
import "moment/locale/fr"; // Importez les paramètres régionaux français
import axios from "axios";

import { CalendarContext } from "../../../context/CalendarContext";
import CalendarPoppup from "../../poppup/CalendarPoppup";
import UpdateCalendarPoppup from "../../poppup/UpdateCalendarPopppup";
import { useNavigate } from "react-router-dom";

const MyCalendar = () => {
  const navigate = useNavigate();
  const {
    setOpenCalendar,
    ListOfEvent,
    deleteEvent,
    setOpenUpdateCalendar,
    setEventId,
  } = useContext(CalendarContext);

  // session
  useEffect(() => {
    axios.get("http://localhost:3030/auth").then((res) => {
      if (res.data.valid) {
      } else {
        console.log("session invalide");
        navigate("/auth/admin");
      }
    });
  }, [navigate]);

  return (
    <div>
      <div>
        {/* create event */}
        <button
          onClick={() => setOpenCalendar(true)}
          className="bg-blue-700 px-3 my-3 py-2 rounded-sm  ml-7 text-white mt-10"
        >
          Ajouter un Événement
        </button>
      </div>
      <div className="">
        <div className="absolute z-30">
          <CalendarPoppup />
          <UpdateCalendarPoppup />
        </div>

        <div className="md: flex justify-center m-4 rounded-md shadow-md  mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10   md:gap-[100px]">
            {ListOfEvent.map((event) => {
              return (
                <div className="  flex flex-col  md:w-[400px]  w-[300px] bg-white shadow-[30px] shadow">
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
                    <div className="flex gap-2 mx-auto mb-6">
                      <button
                        onClick={() => {
                          setEventId(event._id);
                          setOpenUpdateCalendar(true);
                        }}
                        className="py-2 px-2 border-1 rounded-md border-green-500 hover:bg-green-500 hover:text-white duration-300"
                      >
                        modifier
                      </button>
                      <button
                        className="py-2 px-2 border-1 rounded-md border-red-500 hover:bg-red-500 hover:text-white duration-300"
                        onClick={() => deleteEvent(event._id)}
                      >
                        supprimer
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
