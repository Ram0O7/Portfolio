"use client";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-funky.min.css"; // adding prismjs styles for code highlight

export default function CodeHighlight({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(Prism.highlightAll, 2000);
    }
  });

  return <div className="py-12 lg:py-28">{children}</div>;
}
