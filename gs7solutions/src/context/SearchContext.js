import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const searchContext = createContext("");

export const SearchContextProvider = ({ children }) => {
    const [motArechercher , setMotArechercher]=useState("")

  return (
    <searchContext.Provider
    value={{motArechercher , setMotArechercher}}
  
    >
      {children}
    </searchContext.Provider>
  );
};
