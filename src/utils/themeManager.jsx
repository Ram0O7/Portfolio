"use client";
import { useState, useEffect } from "react";
// Define a custom hook that takes a key and a fallback theme as parameters
function useLocalStorage(key, fallbackTheme) {
  const [theme, setTheme] = useState(fallbackTheme);
  const [mode, setMode] = useState("light");
  const [proseInvert, setProseInvert] = useState("");

  useEffect(() => {
    // Check if the window object exists
    if (typeof window !== "undefined") {
      const storedtheme = localStorage.getItem(key);
      // If the theme exists, set it to the state Otherwise, use the fallback theme
      setTheme(storedtheme ? storedtheme : fallbackTheme);
      if (storedtheme === "furiastic" || storedtheme === "elegent") {
        setProseInvert("prose-invert");
        setMode("dark");
      } else {
        setProseInvert("");
        setMode("light");
      }
    }
  }, [key, fallbackTheme]);

  // Use another useEffect hook to write the theme to local storage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, theme);
    }
  }, [key, theme]);

  // Return the theme and a setter function from the hook
  return [theme, setTheme, mode, setMode, proseInvert, setProseInvert];
}

export default function useTheme() {
  // Use the useLocalStorage hook with a key of "theme" and a fallback theme of "nature"
  return useLocalStorage("theme", "nature");
}
