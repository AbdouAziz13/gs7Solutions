import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NavbarAdmin = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleLogout = () => {
    axios.post("http://localhost:3030/auth/logout").then(() => {
      console.log("deconnexion réussi");
      navigate("/");
    });
  };

  return (
    <>
      <div className=" relative flex items-center mt-3 mx-auto w-[96%] bg-[#F5F5F5] h-[60px] ">
        <button
          onClick={handleLogout}
          className="absolute right-0 border-1 border-blue-700 py-2 px-3 mr-4 text-sm font-semibold rounded-sm hover:bg-blue-600 hover:text-white duration-300 "
        >
          se deconnecter
        </button>
      </div>
    </>
  );
};

export default NavbarAdmin;
