import React from "react";
import RightPageComponants from "../components/RightPageComponants";
import { PRESSES } from "../helpers/NewPresseData";

const NewPresse = () => {
  return (
    <>
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-2 p-3 border-r">
        <h1 className=" font-bold text-xl md:text-2xl border-b-2 md:ml-[80px] border-red-500 my-2  w-fit ">
            News presse
          </h1>
          <div className="  md:p-3 grid grid-col-1 gap-6 md:gap-10  flex-col justify-center md:grid-cols-2 ">
            {PRESSES.map((item) => {
              return (
                <>
                  <div className=" flex justify-center items-center flex-col gap-3 p-2">
                    <a
                      href={item.preseLink}
                      className=" text-center text-red-500 cursor-pointer"
                    >
                      {item.presseTitle}
                    </a>

                    <a href={item.preseLink}>
                      <img
                        src={item.presseImg}
                        alt=""
                        className=" border cursor-pointer w-[250px] rounded-md h-[200px] object-cover "
                      />
                    </a>
                  </div>
                </>
              );
            })}
            <div></div>
          </div>
        </div>

        <div className="md:col-span-1 p-2">
          <RightPageComponants />
        </div>
      </div>
    </>
  );
};

export default NewPresse;
