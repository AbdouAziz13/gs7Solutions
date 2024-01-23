import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CalendarContext = createContext("");

export const CalendarContextProvider = ({ children }) => {
  // calendar poppup
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openUpdateCalendar, setOpenUpdateCalendar] = useState(false);
  const [newEvent, setNewEvent] = useState("");
  const [ListOfEvent, setListOfEvent] = useState([]);
  const [title, setEventTitle] = useState("");
  const [start, setStartEvent] = useState("");
  const [end, setEndEvent] = useState("");
  const [description, setEventDesc] = useState("");
  const [location, setEventLocation] = useState("");
  const [eventId, setEventId] = useState("");

  // create Event
  // axios
  const HandleNewEvent = () => {
    const eventData = {
      title: title,
      start: new Date(start),
      end: new Date(end),
      description: description,
      location: location,
    };

    axios
      .post("http://localhost:3030/event", eventData, {
        headers: {
          myToken: localStorage.getItem("myToken"),
        },
      })
      .then((res) => {
        if (res.data.error) {
          alert("veuillez dabord vous ahthentifiz");
        } else {
          // Mettez à jour newEvent avec la réponse du serveur
          setNewEvent(res.data);
          setListOfEvent([
            ...ListOfEvent,
            {
              title: title,
              start: new Date(start),
              end: new Date(end),
              description: description,
              location: location,
            },
          ]);
        }
      })

      .catch((error) => {
        console.error("Erreur lors de la création de l'événement :", error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3030/event")
      .then((res) => setListOfEvent(res.data));
  }, []);

  // delete event
  const deleteEvent = (eventId) => {
    axios
      .delete(`http://localhost:3030/event/${eventId}`, {
        headers: {
          myToken: localStorage.getItem("myToken"),
        },
      })
      .then((res) => {
        if (res.data.error) {
          alert("veuillez dabord vous athentifié");
        } else {
          alert("publication supprimée avec succes");

          setListOfEvent(ListOfEvent.filter((event) => event._id !== eventId));
        }
      });
  };

  // update calendar data

  return (
    <CalendarContext.Provider
      value={{
        deleteEvent,
        HandleNewEvent,
        openCalendar,
        setOpenCalendar,
        setEventTitle,
        setEventLocation,
        setStartEvent,
        setEndEvent,
        setEventDesc,
        newEvent,
        ListOfEvent,
        eventId,
        setEventId,
        setListOfEvent,
        openUpdateCalendar,
        setOpenUpdateCalendar,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
