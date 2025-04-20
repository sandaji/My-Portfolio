// app/components/Technologies.tsx
"use client";
import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";

const Technologies = () => (
  <section id="tech" className="w-full max-w-[1040px] mx-auto px-6 py-10">
    {/* Divider + Title */}
    <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mb-10" />
    <h2 className="text-[56px] font-extrabold bg-gradient-to-r from-cyan-300 via-white to-purple-500 bg-clip-text text-transparent mb-4">
      Technologies
    </h2>

    {/* Section Text */}
    <p className="max-w-[800px] text-lg text-white/75 mb-8">
      I've worked with a range of technologies in the web development world —
      from Back-end, Front-end to Design.
    </p>

    {/* Tech List */}
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Frontend */}
      <li className="flex flex-col items-start max-w-[320px]">
        <div className="mb-4 text-cyan-400">
          <DiReact size="3rem" />
        </div>
        <div>
          <h4 className="text-white text-2xl font-semibold mb-2">Front-End</h4>
          <p className="text-white/75 text-base">
            Experience with <br />
            React.js
          </p>
        </div>
      </li>

      {/* Backend */}
      <li className="flex flex-col items-start max-w-[320px]">
        <div className="mb-4 text-cyan-400">
          <DiFirebase size="3rem" />
        </div>
        <div>
          <h4 className="text-white text-2xl font-semibold mb-2">Back-End</h4>
          <p className="text-white/75 text-base">
            Experience with Node, <br />
            Flask, and Databases
          </p>
        </div>
      </li>

      {/* UI/UX */}
      <li className="flex flex-col items-start max-w-[320px]">
        <div className="mb-4 text-cyan-400">
          <DiZend size="3rem" />
        </div>
        <div>
          <h4 className="text-white text-2xl font-semibold mb-2">UI/UX</h4>
          <p className="text-white/75 text-base">
            Experience with tools like <br />
            Figma & Affinity Designer
          </p>
        </div>
      </li>
    </ul>

    {/* Optional Divider */}
    <div className="w-16 h-1 mt-12 rounded-full bg-gradient-to-r from-orange-500 to-purple-600" />
  </section>
);

export default Technologies;
