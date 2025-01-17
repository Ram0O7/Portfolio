"use client";
import { useThemeContext } from "@/context/ThemeContext";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { motion } from "framer-motion";

const CustomDropdown = ({ options }) => {
  const { updateTheme, theme, toggleNav } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("theme");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    updateTheme(option);
    toggleNav();
  };

  return (
    <div
      onClick={toggleDropdown}
      className={`dropdown-header text-xs md:text-sm relative inline-block capitalize border border-white p-1 text-center bg-${theme}-accent text-${theme}-bg w-28 md:w-32 rounded-sm`}
    >
      <div
        className={`font-bold cursor-pointer text-center flex gap-1 justify-center items-center`}
      >
        {selectedOption ? selectedOption : "Theme"}{" "}
        {isOpen ? (
          <FaAngleDoubleUp className="text-sm md:text-lg" />
        ) : (
          <FaAngleDoubleDown className="text-sm md:text-lg animate-pulse" />
        )}
      </div>
      <motion.div
        layout
        className="custom-dropdown absolute right-0 top-8 md:top-10 text-white z-50 w-full"
      >
        {isOpen && (
          <ul className="dropdown-options">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`cursor-pointer py-1 border-b bg-${theme}-accent text-${theme}-bg hover:text-${theme}-txt hover:bg-${theme}-secondary-accent border-${theme}-bg`}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
};

export default CustomDropdown;
