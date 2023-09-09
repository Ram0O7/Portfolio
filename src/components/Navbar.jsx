"use client";
import Link from "next/link";
import SelectTheme from "./ui/SelectTheme";
import { useThemeContext } from "@/context/ThemeContext";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
const navLinks = [
  { name: "home", url: "/" },
  { name: "blog", url: "/blogs" },
  { name: "contact", url: "/#contact" },
];

const Navbar = () => {
  const { theme } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen((prev) => !prev);
    !isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  };
  return (
    <header
      className={`flex items-center justify-between py-1 sm:py-2 bg-${theme}-bg/60 backdrop-blur-md shadow-sm`}
    >
      <Link href={"/"}>
        <span
          className={`logo logo-animation bg-gradient-to-l from-${theme}-accent to-${theme}-secondary-accent text-3xl text-${theme}-txt sm:text-4xl lg:text-5xl font-extrabold`}
        >
          RK
        </span>
      </Link>
      <div className="sm:hidden z-50">
        <Hamburger size={25} toggled={isOpen} onToggle={toggleNav} />
      </div>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 right-0 sm:flex pt-20 sm:pt-0 bg-${theme}-bg sm:bg-transparent sm:relative sm:h-auto sm:w-auto items-center`}
      >
        <div
          className="sm:hidden fixed top-0 left-0 w-2/5 min-h-screen bg-black/40"
          onClick={toggleNav}
        ></div>
        <ul className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-8">
          {navLinks.map((link) => {
            const { name, url } = link;
            return (
              <li key={name} onClick={toggleNav}>
                <Link
                  href={url}
                  className={`text-sm sm:text-lg hover:text-${theme}-accent font-semibold hover:underline underline-offset-2`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
          <SelectTheme />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
