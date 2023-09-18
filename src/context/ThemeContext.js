"use client";
import { createContext, useContext, useEffect, useState } from "react";
import useTheme from "@/utils/themeManager";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme, mode, setMode, proseInvert, setProseInvert] =
    useTheme();

  // toggle states for mobile devices
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    // for scrollbar styling purposes
    document.body.classList.remove("dark", "light");
    document.body.classList.add(mode);
  }, [mode, theme]);

  const updateTheme = (theme) => {
    setTheme(theme);
    if (theme === "furiastic" || theme === "elegent") {
      setProseInvert("prose-invert");
      setMode("dark");
    } else {
      setProseInvert("");
      setMode("light");
    }
  };
  return (
    <ThemeContext.Provider
      value={{ updateTheme, theme, proseInvert, isNavOpen, toggleNav, mode }}
    >
      <body className={`theme bg-${theme}-bg text-${theme}-txt`}>
        {children}
      </body>
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
