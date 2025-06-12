"use client";

import NavLink from "./components/NavLink/NavLink";
import { navLinks } from "./constants";

const Navbar = () => {
  return (
    <div className="w-full md:w-60 py-10 md:py-0 flex flex-row md:flex-col gap-4 sm:gap-8 justify-center items-center md:items-start md:fixed md:top-1/2 md:-translate-y-1/2 md:left-10">
      {navLinks.map((navLink) => (
        <NavLink navLink={navLink} key={navLink.step} />
      ))}
    </div>
  );
};

export default Navbar;
