import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminSection = () => {
  const navigate = useNavigate();


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
      <img src={logo} alt="logo" className=" mx-auto mt-10" />

      <div className=" gap-7 md:gap-20 md:my-10 flex md:flex-row flex-col justify-center items-center">
        <div className=" border-2 rounded-md hover:shadow-md p-6 flex flex-col justify-center items-center">
          <h1 className=" font-bold text-xl md:texl-2xl">
            Section photos et videos
          </h1>
          <p className="text-sm">ajouter de nouvelles photos ou vidéos</p>
          <button
            className=" w-[70%] bg-red-500 text-white py-2 rounded-md my-4"
            onClick={() => navigate("/auth/admin-section/media")}
          >
            commencer
          </button>
        </div>

        <div className=" border-2 rounded-md hover:shadow-md p-6 flex flex-col justify-center items-center">
          <h1 className=" font-bold text-xl md:texl-2xl">
            Section publication
          </h1>
          <p className="text-sm">ajouter de nouvelles publications</p>
          <button
            className=" w-[70%] bg-red-500 text-white py-2 rounded-md my-4"
            onClick={() => navigate("/auth/admin-section/publications")}
          >
            commencer
          </button>
        </div>
        <div className=" border-2 rounded-md hover:shadow-md p-6 flex flex-col justify-center items-center">
          <h1 className=" font-bold text-xl md:texl-2xl">Section événement</h1>
          <p className="text-sm">ajouter de nouveaux événements</p>
          <button
            className=" w-[70%] bg-blue-500 text-white py-2 rounded-md my-4"
            onClick={() => navigate("/auth/admin/calendar")}
          >
            commencer
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSection;

// {/* <button  className="btn-section" onClick={()=> navigate("/auth/admin-section/media")}>commencer</button>
// <button  className="btn-section" onClick={()=> navigate("/auth/admin-section/publications")}>commencer</button> */}
