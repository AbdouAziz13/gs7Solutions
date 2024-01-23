import React from "react";
import RightPageComponants from "../../components/RightPageComponants";

const Organisation = () => {
  return (
    <>
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-2 p-3 border-r">
          <h1 className=" font-bold text-md md:text-xl border-b-2 md:ml-[80px] border-red-500 my-2  w-fit ">
          Organisation et réforme du secteur de la sécurité
          </h1>
        </div>

        <div className="md:col-span-1 p-2">
          <RightPageComponants />
        </div>
      </div>
    </>
  );
};

export default Organisation;
