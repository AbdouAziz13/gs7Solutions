import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { CalendarContext } from "../../context/CalendarContext";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { BsTextLeft } from "react-icons/bs";

const CalendarPoppup = () => {
  const {
    openCalendar,
    setOpenCalendar,
    HandleNewEvent,
    setEventTitle,
    setEventLocation,
    setStartEvent,
    setEndEvent,
    setEventDesc,
  } = useContext(CalendarContext);
  // stat

  if (openCalendar) {
    return (
      <div className="  flex flex-col relative md:w-[500px] w-[300px] bg-white shadow-[30px] shadow">
        <IoClose
          onClick={() => setOpenCalendar(false)}
          className=" absolute right-0 p-2 cursor-pointer "
          size={45}
        />
        <div className="  flex flex-col mt-10 mx-4">
          <h1 className="  text-[#828181]">Titre</h1>
          <input
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
              onChange={(e) => setStartEvent(e.target.value)}
              type="date"
            />
            <input type="date" onChange={(e) => setEndEvent(e.target.value)} />
          </div>
          <div className="bg-[#F6FBFF] p-2 flex  items-center ">
            <GrLocation size={22} />
            {/* location */}
            <input
              type="text"
              onChange={(e) => setEventLocation(e.target.value)}
              placeholder="localisation..."
              className=" pl-2 focus:outline-none w-full"
            />
          </div>
            <BsTextLeft size={22} />
          <div className="bg-[#F6FBFF] p-2 flex items-center">
            <textarea
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
              HandleNewEvent();
              setOpenCalendar(false);
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
