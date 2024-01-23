import React, { createContext } from "react";
import { useState } from "react";
import axios from "axios";
export const PoppupContext = createContext();

export const PoppupContextProvider = ({ children }) => {
  const [sliderName, setSliderName] = useState("");
  // link image to slider
  const linkSliderMedia = (SliderId, fileName) => {
    axios
      .post(`http://localhost:3030/linktoslider/${SliderId}/images/${fileName}` ,{
        headers: {
          myToken: localStorage.getItem("myToken")
        }
      })
      .then((res) => {
        if (res.data.errior) {
          alert("veuillez dabord vous authentifiez")
          
        }
        else {
          console.log("image liér a la diapositif avec succes");
          setSliderName(res.data.sliderName);

        }
    
      });
  };
  return <PoppupContext.Provider value={{sliderName , setSliderName , linkSliderMedia}}>{children}</PoppupContext.Provider>;
};
