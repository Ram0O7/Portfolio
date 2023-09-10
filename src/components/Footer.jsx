"use client";
import Link from "next/link";
import { useThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";

const Footer = ({ socials }) => {
  const { theme } = useThemeContext();
  return (
    <footer
      className={`flex flex-col gap-4 pb-8 lg:pb-16 border-t border-${theme}-txt text-${theme}-txt`}
    >
      <div className="socials pt-8 lg:pt-16 flex flex-col gap-4 sm:flex-row justify-between items-center">
        <h1 className="logo text-3xl sm:text-4xl font-semibold">
          ramkrishnrai
        </h1>
        <ul className="flex items-center sm:justify-between justify-center gap-10 text-2xl">
          {socials.map((social) => {
            const { name, url, icon, style } = social;
            return (
              <motion.li
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                key={name}
              >
                <Link
                  className={style}
                  href={url}
                  aria-label={`${name} account`}
                  target="_blank"
                >
                  {icon}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
      <span className={`text-center sm:text-left text-${theme}-bg`}>
        &copy; {new Date().getFullYear()} ramkrishnrai
      </span>
    </footer>
  );
};

export default Footer;
