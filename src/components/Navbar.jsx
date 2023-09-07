"use client";
import Link from "next/link";
import SelectTheme from "./ui/SelectTheme";
import { useThemeContext } from "@/context/ThemeContext";
const navLinks = [
  { name: "blog", url: "/blogs" },
  { name: "contact", url: "/#contact" },
];

const Navbar = () => {
  const { theme } = useThemeContext();
  return (
    <nav className="flex items-center justify-between py-4">
      <Link href={"/"}>
        <h1
          className={`logo logo-animation bg-gradient-to-l from-${theme}-accent to-furiastic-${theme}-accent text-2xl text-${theme}-txt sm:text-3xl lg:text-4xl font-extrabold`}
        >
          RK
        </h1>
      </Link>
      <div className="flex gap-8 sm:gap-10 items-center">
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
      </div>
    </nav>
  );
};

export default Navbar;
