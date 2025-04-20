"use client";
import React from "react";

import Image from "next/image";
import { projects } from "../constants";

const Projects = () => (
  <section id="projects" className="w-full max-w-[1040px] mx-auto px-6 py-10">
    {/* Divider */}
    <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mb-10" />

    {/* Section Title */}
    <h2 className="text-[56px] font-extrabold bg-gradient-to-r from-cyan-300 via-white to-purple-500 bg-clip-text text-transparent mb-10">
      Projects
    </h2>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((p, i) => (
        <div
          key={i}
          className="bg-[#0f1624] rounded-lg shadow-lg overflow-hidden text-white border border-white/10"
        >
          {/* Image */}
          <Image
            src={p.image}
            alt={p.title}
            className="w-full h-[240px] object-cover"
            width={500}
            height={300}
          />

          {/* Title */}
          <div className="p-6">
            <h3 className="text-3xl font-semibold text-[#9cc9e3] mb-2">
              {p.title}
            </h3>
            <div className="w-12 h-1 bg-[#d0bb57] my-4" />

            {/* Description */}
            <p className="text-base text-white/80 mb-6 text-justify">
              {p.description}
            </p>

            {/* Stack Tags */}
            <div className="mb-4">
              <h4 className="font-semibold text-lg mb-2">Stack</h4>
              <ul className="flex flex-wrap gap-2">
                {p.tags.map((tag, index) => (
                  <li
                    key={index}
                    className="bg-cyan-400 text-black rounded-full px-4 py-1 text-sm font-medium"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <a
                href={p.visit}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#6b3030] text-white rounded-lg hover:bg-[#801414] transition-colors text-sm"
              >
                Code
              </a>
              <a
                href={p.source}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#6b3030] text-white rounded-lg hover:bg-[#801414] transition-colors text-sm"
              >
                Source
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
