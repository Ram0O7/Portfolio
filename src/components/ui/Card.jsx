"use client";
import { useThemeContext } from "@/context/ThemeContext";

export default function Card({ children }) {
  const { theme, mode } = useThemeContext();
  return (
    <div
      className={`card ${
        mode !== "dark" ? `bg-${theme}-bg text-${theme}-txt` : "bg-gray-900"
      } py-10 px-6 flex flex-col justify-center items-center gap-6 mx-auto mt-36 mb-20 rounded-md shadow-xl hover:shadow-md`}
    >
      {children}
    </div>
  );
}
