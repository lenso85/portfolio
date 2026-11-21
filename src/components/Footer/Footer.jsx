import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const pageLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 py-20 mt-10">
      <div className="flex flex-wrap gap-x-12 gap-y-12 max-w-[1200px] mx-auto px-10">
        <div className="flex-1 basis-[300px]">
          <NavLink to="/" end className="text-3xl font-bold text-zinc-900 dark:text-white">
            Le<span className="text-red-600 uppercase">N</span>se
          </NavLink>
          <p className="text-zinc-600 dark:text-zinc-300 mt-6 max-w-[350px]">
            I am a web developer specializing in building modern, responsive,
            and user-friendly websites. I work with JavaScript, React, Node.js,
            and Python.
          </p>
          <p className="text-zinc-800 dark:text-zinc-200 mt-6">
            2026 © all rights reserved
          </p>
        </div>

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 dark:text-white text-2xl font-bold">Links</h5>
          </li>
          {pageLinks.map((link, index) => (
            <li key={link.to} className={index === 0 ? "mt-6" : "mt-4"}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className="font-semibold tracking-wider text-zinc-800 dark:text-zinc-100 hover:text-red-600"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="w-[250px]">
          <li>
            <h5 className="text-zinc-800 dark:text-white text-2xl font-bold">
              Contact Info
            </h5>
          </li>
          <li className="mt-6">
            <a
              href="mailto:lensegudisa094@gmail.com"
              className="font-semibold tracking-wider text-zinc-800 dark:text-zinc-100 hover:text-red-600"
            >
              lensegudisa094@gmail.com
            </a>
          </li>
          <li className="mt-4">
            <a
              href="tel:+251922978586"
              className="font-semibold tracking-wider text-zinc-800 dark:text-zinc-100 hover:text-red-600"
            >
              +251922978586
            </a>
          </li>
          <li className="mt-4">
            <p className="font-semibold tracking-wider text-zinc-800 dark:text-zinc-100">
              Jimma, Oromia
            </p>
          </li>
        </ul>

        <ul className="md:w-[180px]">
          <li>
            <h5 className="text-zinc-800 dark:text-white text-2xl font-bold">
              Social Links
            </h5>
          </li>
          <li className="mt-6">
            <a href="#" aria-label="Facebook" className="text-2xl text-zinc-800 dark:text-zinc-100 hover:text-red-600">
              <FaFacebook />
            </a>
          </li>
          <li className="mt-4">
            <a href="#" aria-label="Instagram" className="text-2xl text-zinc-800 dark:text-zinc-100 hover:text-red-600">
              <FaInstagram />
            </a>
          </li>
          <li className="mt-4">
            <a href="#" aria-label="LinkedIn" className="text-2xl text-zinc-800 dark:text-zinc-100 hover:text-red-600">
              <FaLinkedin />
            </a>
          </li>
          <li className="mt-4">
            <a href="#" aria-label="GitHub" className="text-2xl text-zinc-800 dark:text-zinc-100 hover:text-red-600">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
