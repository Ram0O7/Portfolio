"use client";
import Link from "next/link";
import SelectTheme from "./ui/SelectTheme";
import { useThemeContext } from "@/context/ThemeContext";
const navLinks = [
  { name: "home", url: "/" },
  { name: "blog", url: "/blogs" },
  { name: "contact", url: "/#contact" },
];

const Navbar = () => {
  const { theme } = useThemeContext();
  return (
    <header
      className={`flex items-center justify-between py-2 bg-${theme}-bg/60 backdrop-blur-md shadow-sm`}
    >
      <Link href={"/"}>
        <span
          className={`logo logo-animation bg-gradient-to-l from-${theme}-accent to-${theme}-secondary-accent text-2xl text-${theme}-txt sm:text-3xl lg:text-4xl font-extrabold`}
        >
          RK
        </span>
      </Link>
      <nav className="hidden sm:flex gap-8 sm:gap-10 items-center">
        <ul className="flex items-center justify-center gap-6 sm:gap-8">
          {navLinks.map((link) => {
            const { name, url } = link;
            return (
              <li key={name}>
                <Link
                  href={url}
                  className={`text-sm sm:text-lg hover:text-${theme}-accent font-semibold hover:underline underline-offset-2`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <SelectTheme />
      </nav>
    </header>
  );
};

export default Navbar;
