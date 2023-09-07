"use client";
import { createContext, useContext, useEffect, useState } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("nature");
  const [proseInvert, setProseInvert] = useState("");

  const updateTheme = (theme) => {
    setTheme(theme);
    theme === "furiastic" || theme === "elegent"
      ? setProseInvert("prose-invert")
      : setProseInvert("");
  };
  return (
    <ThemeContext.Provider value={{ updateTheme, theme, proseInvert }}>
      <main
        className={`theme bg-${theme}-bg text-${theme}-txt border-monochrome-txt`}
      >
        {children}
      </main>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within the ThemeProvider!");
  }
  return context;
};
