// app/components/Technologies.tsx
"use client";
import React from "react";
import { AiOutlineApi } from "react-icons/ai";
import { BiLogoAws } from "react-icons/bi";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { FaDatabase, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiVercelLine } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";

const Technologies = () => (
  <section id="tech" className="w-full max-w-[1040px] mx-auto px-6 py-10">
    {/* Divider + Title */}
    <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mb-10" />
    <h2 className="text-[56px] font-extrabold bg-gradient-to-r from-cyan-300 via-white to-purple-500 bg-clip-text text-transparent mb-4">
      Technologies
    </h2>

    {/* Section Text */}
    <p className="max-w-[800px] text-lg text-white/75 mb-8">
      I&apos;ve worked with a range of technologies in the web development world —
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
          <div className="flex flex-col gap-2 text-white/75 text-base">
         
         <span className="flex items-center gap-2"> <DiReact className="text-purple-500 text-2xl" /> ReactJs</span>
         <span className="flex items-center gap-2"> <RiNextjsFill className="text-purple-500 text-2xl"  /> NextJs</span>
         <span className="flex items-center gap-2"> <AiOutlineApi className="text-purple-500 text-2xl"  /> API</span>
        
        </div>
        </div>
      </li>

      {/* Backend */}
      <li className="flex flex-col items-start max-w-[320px]">
        <div className="mb-4 text-cyan-400">
          <DiFirebase size="3rem" />
        </div>
        <div>
          <h4 className="text-white text-2xl font-semibold mb-2">Back-End</h4>
          <div className="flex flex-col gap-2 text-white/75 text-base">
         
         <span className="flex items-center gap-2"> <FaNodeJs className="text-purple-500 text-2xl" /> NodeJs</span>
         <span className="flex items-center gap-2"> <SiPrisma className="text-purple-500 text-2xl"  /> Prisma</span>
         <span className="flex items-center gap-2"> <FaDatabase className="text-purple-500 text-2xl"  /> Databases</span>
        
        </div>
        </div>
      </li>

      {/* UI/UX */}
      <li className="flex flex-col items-start max-w-[320px]">
        <div className="mb-4 text-cyan-400">
          <DiZend size="3rem" />
        </div>
        <div>
          <h4 className="text-white text-2xl font-semibold mb-2">Deployment</h4>
          <div className="flex flex-col gap-2 text-white/75 text-base">
         
           <span className="flex items-center gap-2"> <DiFirebase className="text-purple-500 text-2xl" /> Firebase</span>
           <span className="flex items-center gap-2"> <BiLogoAws className="text-purple-500 text-2xl"  /> AWS</span>
           <span className="flex items-center gap-2"> <RiVercelLine className="text-purple-500 text-2xl"  /> VERCEL</span>
          
          </div>
        </div>
      </li>
    </ul>

    {/* Optional Divider */}
    <div className="w-16 h-1 mt-12 rounded-full bg-gradient-to-r from-orange-500 to-purple-600" />
  </section>
);

export default Technologies;
