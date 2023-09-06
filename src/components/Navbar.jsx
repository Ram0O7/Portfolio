import Link from "next/link";
const navLinks = [
  { name: "blog", url: "/blogs" },
  { name: "contact", url: "/#contact" },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4">
      <Link href={"/"}>
        <h1 className="logo logo-animation text-2xl sm:text-3xl lg:text-4xl font-extrabold">
          ramkrishn
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
                  className="text-sm sm:text-lg hover:text-orange font-semibold hover:underline underline-offset-2"
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
