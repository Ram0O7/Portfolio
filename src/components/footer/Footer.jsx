import Link from "next/link";

const Footer = ({ socials }) => {
  return (
    <footer className="flex flex-col gap-4 pb-8 lg:pb-16 border-t border-text-primary">
      <div className="socials pt-8 lg:pt-16 flex flex-col gap-4 sm:flex-row justify-between items-center">
        <h1 className="logo text-3xl sm:text-4xl font-semibold">
          ramkrishnrai
        </h1>
        <ul className="flex items-center sm:justify-between justify-center gap-10 text-2xl">
          {socials.map((social) => {
            const { name, url, icon, style } = social;
            return (
              <li key={name}>
                <Link
                  className={style}
                  href={url}
                  aria-label={`${name} account`}
                >
                  {icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <span className="text-center sm:text-left text-bg-primary">
        &copy; {new Date().getFullYear()} ramkrishnrai
      </span>
    </footer>
  );
};

export default Footer;
