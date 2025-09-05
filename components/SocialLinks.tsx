
import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"; // Example for icons


export default function SocialLinks() {
  return (
    <div className="z-50 h-full flex flex-row lg:flex-col gap-4 justify-end">
      <a
        href="https://www.linkedin.com/in/yulia-stambolieva-47b777304/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-700 text-white text-2xl transition duration-300 shadow-md"
        style={{ boxShadow: '0 0 10px rgba(168, 85, 247, 0.7)' }}
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://github.com/JuliaFS"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-700 text-white text-2xl transition duration-300 shadow-md"
        style={{ boxShadow: '0 0 10px rgba(168, 85, 247, 0.7)' }}
      >
        <FaGithub />
      </a>
      <a
        href="mailto:yuliya.f.s@gmail.com"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-700 text-white text-2xl transition duration-300 shadow-md"
        style={{ boxShadow: '0 0 10px rgba(168, 85, 247, 0.7)' }}
      >
        <FaEnvelope />
      </a>
    </div>
  );
}
