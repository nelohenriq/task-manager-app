"use client";

import { createContext, useContext, useState } from "react";
import themes from "./themes";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const theme = themes[selectedTheme];

  const changeTheme = (themeIndex) => {
    setSelectedTheme(themeIndex);
  };

  return (
    <GlobalContext.Provider value={{ theme }}>
      <GlobalUpdateContext.Provider value={{ changeTheme }}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
