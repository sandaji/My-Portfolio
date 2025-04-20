"use client";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  alt?: boolean;
};

const Button = ({ children, onClick, disabled, alt }: ButtonProps) => {
  const baseWidth = alt ? "w-[150px]" : "w-[262px]";
  const baseHeight = alt ? "h-[52px]" : "h-[64px]";
  const baseFont = alt ? "text-[20px]" : "text-[24px]";
  const gradientBack = alt
    ? "from-orange-500 to-purple-600"
    : "from-cyan-400 to-purple-600";
  const gradientFront = alt
    ? "from-orange-500 to-purple-600"
    : "from-cyan-500 to-purple-700";

  return (
    <div
      className={`relative ${baseWidth} ${baseHeight} ${baseFont} rounded-full font-semibold text-white overflow-hidden transition-opacity duration-500 ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <span
        className={`absolute inset-0 flex items-center justify-center bg-gradient-to-r ${gradientFront} z-10`}
      >
        {children}
      </span>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`absolute inset-0 z-20 w-full h-full bg-gradient-to-r ${gradientBack} hover:opacity-0 transition duration-300`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
