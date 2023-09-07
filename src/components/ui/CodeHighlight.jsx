"use client";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-funky.min.css"; // adding prismjs styles for code highlight
import { useThemeContext } from "@/context/ThemeContext";

export default function CodeHighlight({ children }) {
  const { theme, proseInvert } = useThemeContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(Prism.highlightAll, 2000);
    }
  });

  return (
    <article
      className={`py-12 lg:py-28 prose prose-sm sm:prose-base prose-headings:font-semibold lg:prose-lg prose-img:object-cover prose-img:w-full prose-img:h-72 sm:prose-img:w-3/4 sm:prose-img:h-96 prose-slate prose-orange ${proseInvert} prose-img:rounded-sm mx-auto`}
    >
      {children}
    </article>
  );
}
