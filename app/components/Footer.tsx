"use client";
import React from "react";
import { BiCopyright } from "react-icons/bi";
import {
  IoLogoWhatsapp,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
} from "react-icons/io";

type FooterProps = {
  handleClick?: () => void;
};

const Footer = ({ handleClick }: FooterProps) => {
  return (
    <footer className="max-w-[1040px] mx-auto px-12 py-10 sm:px-4">


      {/* Social Icons & Slogan */}
      <div className="flex justify-between items-center flex-wrap sm:flex-col sm:items-center sm:gap-6">


        <div className="flex gap-4 items-center pr-4">
          <a
            href="https://google.com/sandaji"
            className="text-white text-2xl p-2 rounded-full hover:text-orange-500 transition-all duration-300"
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ijamy-vincent-72858b107/"
            className="text-white text-2xl p-2 rounded-full hover:text-orange-500 transition-all duration-300"
          >
            <IoLogoLinkedin />
          </a>
          <a
            href="https://twitter.com/@_ijamy"
            className="text-white text-2xl p-2 rounded-full hover:text-orange-500 transition-all duration-300"
          >
            <IoLogoTwitter />
          </a>
          <a
            href="https://wa.link/s08fo7"
            className="text-white text-2xl p-2 rounded-full hover:text-orange-500 transition-all duration-300"
          >
            <IoLogoWhatsapp />
          </a>
        </div>

        <div className="text-white/50 text-lg flex items-center gap-1 px-4">
          Ijamy Vincent <BiCopyright /> {new Date().getFullYear()}. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
