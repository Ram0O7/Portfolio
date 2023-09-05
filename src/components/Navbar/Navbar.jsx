import Link from "next/link";

const navLinks = [
  { name: "portfolio", url: "/portfolio" },
  { name: "blog", url: "/blogs" },
  { name: "contact", url: "/#contact" },
];

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-0 py-4 border-b sm:border-b-0 border-text-primary">
      <Link href={"/"}>
        <h1 className="logo logo-animation text-3xl sm:text-4xl font-extrabold">
          ramkrishnrai
        </h1>
      </Link>
      <ul className="flex items-center justify-between sm:gap-10 sm:w-fit">
        {navLinks.map((link) => {
          const { name, url } = link;
          return (
            <li key={name}>
              <Link
                href={url}
                className="text-sm sm:text-lg text-text-primary hover:text-bg-secondary font-semibold hover:underline underline-offset-2"
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
