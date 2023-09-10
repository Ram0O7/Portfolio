"use client";
import { useState, useEffect } from "react";
// Define a custom hook that takes a key and a fallback theme as parameters
function useLocalStorage(key, fallbackTheme) {
  // Use the useState hook to store the theme in memory
  const [theme, setTheme] = useState(fallbackTheme);

  // Use the useEffect hook to read the theme from local storage when the component mounts
  useEffect(() => {
    // Check if the window object exists
    if (typeof window !== "undefined") {
      // Get the theme from local storage using the key
      const storedtheme = localStorage.getItem(key);
      // If the theme exists, parse it and set it to the state
      // Otherwise, use the fallback theme
      setTheme(storedtheme ? storedtheme : fallbackTheme);
    }
  }, [key, fallbackTheme]);

  // Use another useEffect hook to write the theme to local storage when it changes
  useEffect(() => {
    // Check if the window object exists
    if (typeof window !== "undefined") {
      // Stringify the theme and set it to local storage using the key
      localStorage.setItem(key, theme);
    }
  }, [key, theme]);

  // Return the theme and a setter function from the hook
  return [theme, setTheme];
}

// Define another custom hook that uses the previous hook to store a theme theme
export default function useTheme() {
  // Use the useLocalStorage hook with a key of "theme" and a fallback theme of "nature"
  return useLocalStorage("theme", "nature");
}
