"use client";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-funky.min.css"; // adding prismjs styles for code highlight
import { useThemeContext } from "@/context/ThemeContext";

export default function CodeHighlight({ children }) {
  const { proseInvert } = useThemeContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(Prism.highlightAll, 2000);
    }
  }, []);

  return (
    <article
      className={`py-10 lg:py-24 prose prose-sm sm:prose-base prose-headings:font-semibold prose-h1:m-0 prose-h1:font-extrabold lg:prose-lg prose-img:object-cover prose-img:w-full prose-img:h-72 sm:prose-img:w-3/4 sm:prose-img:h-96 prose-slate prose-orange ${proseInvert} prose-img:rounded-sm prose-img:mx-auto max-w-3xl mx-auto`}
    >
      {children}
    </article>
  );
}
