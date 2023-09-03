import Link from "next/link";
import Contact from "../contact/Contact";
const Footer = ({ socials }) => {
  return (
    <footer className="py-8 lg:py-16">
      <Contact />
      <div className="socials pt-8 lg:pt-16 flex flex-col gap-4 sm:flex-row justify-between items-center">
        <h1 className="logo text-3xl sm:text-4xl font-extrabold">
          ramkrishnrai
        </h1>
        <ul className="flex items-center sm:justify-between justify-center gap-10 text-2xl">
          {socials.map((social) => {
            const { name, url, icon, style } = social;
            return (
              <li key={name}>
                <Link className={style} href={url}>
                  {icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
