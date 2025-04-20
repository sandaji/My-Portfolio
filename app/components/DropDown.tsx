"use client";
import React from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";

type DropDownProps = {
  isOpen: boolean;
};

const DropDown = ({ isOpen }: DropDownProps) => {
  return (
    <div
      className={`absolute top-10 right-[-25%] w-[280px] bg-white rounded-md z-50 transition-all duration-300 origin-top 
        ${isOpen ? "scale-y-100 opacity-100 visible" : "scale-y-75 opacity-0 invisible"}
        shadow-lg flex flex-col py-2`}
    >
      {/* Phone */}
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="flex items-start gap-4 px-4 py-3 hover:bg-gray-100 transition-transform duration-300 hover:scale-105"
      >
        <div className="text-xl text-gray-700">
          <AiFillPhone />
        </div>
        <div>
          <h2 className="text-base font-semibold text-gray-900">Phone</h2>
          <p className="text-sm text-gray-600">
            Let's get together and have a chat?
          </p>
        </div>
      </a>

      {/* Email */}
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="flex items-start gap-4 px-4 py-3 hover:bg-gray-100 transition-transform duration-300 hover:scale-105"
      >
        <div className="text-xl text-gray-700">
          <AiOutlineMail />
        </div>
        <div>
          <h2 className="text-base font-semibold text-gray-900">Email</h2>
          <p className="text-sm text-gray-600">
            If you want to talk, just send a message and I'll get back.
          </p>
        </div>
      </a>

      {/* Address */}
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="flex items-start gap-4 px-4 py-3 hover:bg-gray-100 transition-transform duration-300 hover:scale-105"
      >
        <div className="text-xl text-gray-700">
          <FaLocationArrow />
        </div>
        <div>
          <h2 className="text-base font-semibold text-gray-900">Address</h2>
          <p className="text-sm text-gray-600">Outering Rd, Nairobi, Kenya</p>
        </div>
      </a>
    </div>
  );
};

export default DropDown;
