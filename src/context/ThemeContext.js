"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("furiastic");

  const updateTheme = (theme) => {
    setTheme(theme);
  };
  return (
    <ThemeContext.Provider value={{ updateTheme, theme }}>
      <main className={`theme ${theme}`}>{children}</main>
    </ThemeContext.Provider>
  );
};
