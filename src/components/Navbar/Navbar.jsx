import Link from "next/link";

const Navbar = ({ socials }) => {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-center sm:justify-between pt-4">
      <h1 className="logo logo-animation text-3xl sm:text-4xl font-extrabold">
        ramkrishnrai
      </h1>
      <ul className="flex items-center mt-4 sm:-mt-4 justify-between sm:pr-10 sm:gap-10 sm:w-fit z-10 text-2xl">
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
      <div className="sm:absolute profile-img sm:bg-profile-img bg-profile-img2 h-80 rounded-sm">
        <div className="backdrop absolute min-w-full min-h-full bg-black opacity-50"></div>
      </div>
    </nav>
  );
};

export default Navbar;
