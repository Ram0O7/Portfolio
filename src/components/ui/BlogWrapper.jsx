"use client";
import { useThemeContext } from "@/context/ThemeContext";

export default function BlogWrapper({ children }) {
  const { proseInvert } = useThemeContext();

  return (
    <article
      className={`py-10 lg:py-24 prose prose-sm sm:prose-base prose-headings:font-semibold prose-h1:m-0 prose-h1:font-extrabold lg:prose-lg prose-slate prose-indigo ${proseInvert} max-w-3xl mx-auto`}
    >
      {children}
    </article>
  );
}
