"use client";
import { useThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

const Button = ({ url, text }) => {
  const { theme } = useThemeContext();
  return (
    <Link
      href={url}
      className={`btn relative after:bg-${theme}-secondary-accent uppercase tracking-widest pb-1`}
    >
      {text}
    </Link>
  );
};

export default Button;
