import React, { useEffect, useState } from "react";
import { TbMenu2, TbMenu3, TbMoon, TbSun } from "react-icons/tb";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }) =>
  `font-semibold tracking-wider hover:text-red-600 ${
    isActive ? "text-red-600" : "text-zinc-800 dark:text-zinc-100"
  }`;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { dark, toggle } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  return (
    <header
      className={`bg-white dark:bg-zinc-950 fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "drop-shadow-[0px_4px_25px_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">
        <NavLink to="/" end className="text-3xl font-bold text-zinc-900 dark:text-white">
          Le<span className="text-red-600 uppercase">N</span>se
        </NavLink>

        <ul className="md:flex items-center gap-x-10 hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === "/"} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="text-zinc-800 dark:text-zinc-100 text-xl"
          >
            {dark ? <TbSun /> : <TbMoon />}
          </button>
          <button
            type="button"
            className="text-zinc-800 dark:text-zinc-100 text-xl md:hidden"
            onClick={() => setShowMenu((open) => !open)}
            aria-label={showMenu ? "Close menu" : "Open menu"}
            aria-expanded={showMenu}
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
        </div>

        <ul
          className={`flex flex-col gap-y-8 bg-orange-500/15 dark:bg-zinc-900/95 w-80 backdrop-blur-xl shadow-xl rounded-xl p-10 items-center md:hidden absolute top-24 left-1/2 -translate-x-1/2 transition-all duration-500 ${
            showMenu ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={linkClass}
                onClick={() => setShowMenu(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
