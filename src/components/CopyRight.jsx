"use client";

import { useThemeContext } from "@/context/ThemeContext";

export default function CopyRight() {
  const { theme } = useThemeContext();
  return (
    <span className={`text-center sm:text-left text-${theme}-accent`}>
      &copy; {new Date().getFullYear()} ramkrishnrai
    </span>
  );
}
