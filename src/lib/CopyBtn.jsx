"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";

const CopyBtn = ({ style }) => {
  const [copied, setCopied] = useState(false);
  const btnRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const handleCopyToClipboard = () => {
    const siblingElement = btnRef.current.previousElementSibling;

    if (siblingElement.textContent) {
      const contentToCopy = siblingElement.textContent;
      // Use the Clipboard API to copy the content to the clipboard
      navigator.clipboard
        .writeText(contentToCopy)
        .then(() => {
          setCopied(true);
        })
        .catch((error) => {
          alert("failed to copy!");
        });
    }
  };
  return (
    <button
      ref={btnRef}
      type="button"
      title="copy-btn"
      className={`${style}`}
      onClick={handleCopyToClipboard}
    >
      {copied ? (
        <FaClipboardCheck className="clipboard_check" />
      ) : (
        <FaClipboard className="clipboard" />
      )}
    </button>
  );
};

export default CopyBtn;
