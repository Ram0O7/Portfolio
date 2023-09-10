"use client";
import { useThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

const Button = ({ url, text, target }) => {
  const { theme } = useThemeContext();
  return (
    <Link
      href={url}
      className={`btn relative after:bg-${theme}-secondary-accent uppercase tracking-widest pb-1`}
      target={target}
    >
      {text}
    </Link>
  );
};

export default Button;
