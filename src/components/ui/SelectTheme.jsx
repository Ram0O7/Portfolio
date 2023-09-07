"use-client";
import { useThemeContext } from "@/context/ThemeContext";
import React from "react";

export default function SelectTheme() {
  const { updateTheme, theme } = useThemeContext();

  return (
    <select
      name="theme-options"
      autoFocus
      defaultValue={theme}
      className={`appearance-none bg-${theme}-accent font-semibold text-xs sm:text-sm text-${theme}-bg text-center rounded-md py-1 px-2`}
      onChange={(e) => updateTheme(e.target.value)}
    >
      <option value="monochrome">Monochrome</option>
      <option value="elegent">Elegent</option>
      <option value="furiastic">Furiastic</option>
      <option value="nature">Nature</option>
      <option value="energetic">Energetic</option>
    </select>
  );
}
