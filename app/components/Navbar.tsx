"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io";
import { DiCssdeck } from "react-icons/di";
import DropDown from "./DropDown";
import Logo from "ijamy.svg"; // adjust this import if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f1624] text-white px-4 py-4 flex items-center justify-between flex-wrap">
      {/* Logo Section */}
      <div className="flex items-center gap-4 ml-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/ijamy.svg" alt="Logo" width={40} height={40} />
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-white to-purple-600 bg-clip-text text-transparent">
            IJAMY VINCENT
          </span>
        </Link>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-6 font-medium text-white/75 mr-auto ml-8">
        <li>
          <Link href="#about" className="hover:text-white transition">
            About
          </Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-white transition">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#tech" className="hover:text-white transition">
            Technologies
          </Link>
        </li>
      </ul>

      {/* Social + Contact */}
      <div className="flex items-center gap-4 mr-4 relative">
        <a
          href="https://github.com/sandaji"
          className="text-white text-2xl p-2 hover:text-orange-500 transition"
        >
          <IoLogoGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ijamy-vincent-72858b107/"
          className="text-white text-2xl p-2 hover:text-orange-500 transition"
        >
          <IoLogoLinkedin />
        </a>
        <a
          href="https://twitter.com/@_ijamy"
          className="text-white text-2xl p-2 hover:text-orange-500 transition"
        >
          <IoLogoTwitter />
        </a>
        <a
          href="https://wa.link/s08fo7"
          className="text-white text-2xl p-2 hover:text-orange-500 transition"
        >
          <IoLogoWhatsapp />
        </a>

        {/* Dropdown Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-sm border border-white/30 rounded px-3 py-1 hover:bg-white/10 transition"
        >
          Contact
        </button>

        {/* DropDown */}
        <DropDown isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Navbar;
