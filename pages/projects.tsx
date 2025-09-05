// src/pages/Projects.js
"use client";
import { useEffect, useState } from "react";
import { GoProjectSymlink } from "react-icons/go";
import Image from "next/image";
import PageLayout from "../components/PageLayout";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const projects = [
  {
    src: "/images/projects/mnr-big.jpg",
    alt: "Project for Metal Hold Pro",
    text: "Development of an ERP system from scratch for tracking and managing public procurement contracts undertaken by subcontractors. I am using React, React Query, Typescript, Axios, Tailwind CSS.",
  },
  {
    src: "/images/projects/garant-burgas.jpg",
    alt: "Project for Garand Burgas",
    text: "Part-time online work on a project as a continuation of my SoftUni internship. We use React, React Query, and Tailwind CSS as front-end technologies for visualizing data.",
  },
  {
    src: "/images/projects/project3.jpg",
    alt: "Project 3",
    text: "Project 3 – Portfolio website with animations and multi-language support.",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const prev = () => setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
<PageLayout>
  <div className="w-full z-20 p-4 text-center bg-purple-200 rounded-lg flex flex-col h-full">
    <div className="flex w-full items-center justify-center bg-white opacity-50 mb-6 mt-2 py-2 gap-2">
      <GoProjectSymlink className="text-purple-300 text-2xl" />
      <h2 className="font-semibold">My Projects</h2>
    </div>

    {/* <div className="relative flex-1 flex flex-col items-center justify-start overflow-y-auto w-full min-h-0"> */}
      <div className="relative w-full h-full overflow-y-auto flex flex-col items-center justify-start">
      <div className="flex flex-col lg:flex-row w-[80%] gap-4 items-center lg:items-start">
        <Image
          src={projects[index].src}
          alt={projects[index].alt}
          width={200}
          height={160}
          className="rounded-lg shadow-lg object-cover"
          onClick={() => setIsOpen(true)}
        />
        <p className="text-left mx-4 bg-red-500">{projects[index].text}</p>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-0 lg:left-2 top-1/4 lg:top-1/2 -translate-y-1/2 text-purple-600 hover:text-purple-800"
        title="Previous Project"
        aria-label="Previous Project"
      >
        <FaArrowLeft className="text-xl lg:text-2xl" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 lg:right-2 top-1/4 lg:top-1/2 -translate-y-1/2 text-purple-600 hover:text-purple-800"
        title="Next Project"
        aria-label="Next Project"
      >
        <FaArrowRight className="text-xl lg:text-2xl" />
      </button>
    </div>

    {/* Fullscreen Lightbox */}
    {isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-gray-300"
          title="Close"
          aria-label="Close"
        >
          <FaTimes size={32} />
        </button>
        <Image
          src={projects[index].src}
          alt={projects[index].alt}
          width={1000}
          height={700}
          className="rounded-lg shadow-lg object-contain max-w-[90vw]"
        />
        <p className="mt-4 text-white px-6 md:px-12 text-lg text-left">{projects[index].text}</p>
      </div>
    )}
  </div>
</PageLayout>

  );
}
