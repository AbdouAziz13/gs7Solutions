import { IoClose } from "react-icons/io5";
import { useContext, useEffect } from "react";
import { CalendarContext } from "../../context/CalendarContext";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { BsTextLeft } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";

const CalendarPoppup = () => {
  const [title, setEventTitle] = useState("");
  const [start, setStartEvent] = useState("");
  const [end, setEndEvent] = useState("");
  const [description, setEventDesc] = useState("");
  const [location, setEventLocation] = useState("");
  const [uniPublication, setUniPublication] = useState([]);

  const handleNewEvent = (eventId) => {
    const newEvent = {
      title: title,
      start: start,
      end: end,
      description: description,
      location: location,
    };
    axios.put(`http://localhost:3030/event/${eventId}`, newEvent);
  };
  const { openUpdateCalendar, setOpenUpdateCalendar, eventId } =
    useContext(CalendarContext);
  // stat

  //   get unique eventData
  useEffect(() => {
    axios.get(`http://localhost:3030/event/${eventId}`).then((response) => {
      const data = response.data;

      setEventTitle(data.title);
      setStartEvent(data.start);
      setEndEvent(data.end);
      setEventLocation(data.location);
      setEventDesc(data.description);
    });
  }, [eventId]);

  if (openUpdateCalendar) {
    return (
      <div className="  flex flex-col relative md:w-[500px] w-[300px] bg-white shadow-[30px] shadow">
        <IoClose
          onClick={() => setOpenUpdateCalendar(false)}
          className=" absolute right-0 p-2 cursor-pointer "
          size={45}
        />
        <div className="  flex flex-col mt-10 mx-4">
          <h1 className="  text-[#828181]">Titre</h1>
          <input
            value={title}
            onChange={(e) => setEventTitle(e.target.value)}
            type="text"
            placeholder="ici..."
            className="border-b-2 font-bold text-2xl focus:outline-none focus:border-none  border-[#0075FF] mx-2"
          />
        </div>
        <div className=" mx-4 mt-5 flex flex-col gap-3 p-2">
          <div className=" relative bg-[#F6FBFF] flex  items-center justify-center gap-2 p-2">
            <AiOutlineClockCircle
              size={22}
              className=" hidden md:block absolute left-0"
            />
            <input
              value={start}
              onChange={(e) => setStartEvent(e.target.value)}
              type="date"
            />
            <input
              type="date"
              value={end}
              onChange={(e) => setEndEvent(e.target.value)}
            />
          </div>
          <div className="bg-[#F6FBFF] p-2 flex  items-center ">
            <GrLocation size={22} />
            {/* location */}
            <input
              value={location}
              type="text"
              onChange={(e) => setEventLocation(e.target.value)}
              placeholder="localisation..."
              className=" pl-2 focus:outline-none w-full"
            />
          </div>
          <BsTextLeft size={22} />
          <div className="bg-[#F6FBFF] p-2 flex items-center">
            <textarea
              value={description}
              type="textarea"
              placeholder="description..."
              onChange={(e) => setEventDesc(e.target.value)}
              className="pl-2  w-full focus:outline-none py-2"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col  md:flex-row gap-3 md:gap-2 mx-auto text-[15px] pb-6 pt-8 ">
          <button
            onClick={() => {
              handleNewEvent(eventId);
              setOpenUpdateCalendar(false);
            }}
            className="w-[200px] py-2 font-semiboldpy-1 bg-[#3174AD] text-white"
          >
            sauvegarder
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CalendarPoppup;
