// src/pages/Projects.js
"use client";
import { useEffect, useState } from "react";
import { GoProjectSymlink } from "react-icons/go";
import Image from "next/image";
import PageLayout from "../components/PageLayout";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

const projects = [
  {
    src: "/images/projects/multiplayer-drawing-app.jpg",
    alt: "Project using WebSockets and Node.js",
    text: "This collaborative drawing board is built with React, TypeScript, Tailwind CSS, Firebase, and Socket.IO. Real-time drawing, cursor tracking, and chat are synchronized using WebSockets through a Node.js + Socket.IO backend, deployed as a web service on Render. The project integrates the Firebase SDK for environment setup and uses Firebase as a lightweight database layer. Canvas interactions are powered by the HTML5 Canvas API, supporting both mouse and touch input. The UI is fully responsive, providing a seamless multi-user experience across mobile and desktop devices.",
    link: "https://multiplayer-drawing-app.onrender.com/",
  },
  {
    src: "/images/projects/mnr-big.jpg",
    alt: "Project for Metal Hold Pro",
    text: "Development of an ERP system from scratch for tracking and managing public procurement contracts undertaken by subcontractors. I am using React, React Query, Typescript, Axios, Tailwind CSS.",
    link: "https://erp.project-10.online/login",
  },
  {
    src: "/images/projects/garant-burgas-graph.jpg",
    alt: "Project for Garand Burgas",
    text: "Part-time online work on a project as a continuation of my SoftUni internship. We use React, React Query, and Tailwind CSS as front-end technologies for visualizing data.",
    link: "https://garantbulgaria.com/",
  },
  {
    src: "/images/projects/online-visit-card.jpg",
    alt: "Online business card",
    text: "This is my online business card, featuring a carousel that showcases the technologies I use most.",
    link: "https://juliafs.github.io/cv/",
  },
  {
    src: "/images/projects/gallery-gyundogan-react.jpg",
    alt: "Galery Gyundogan",
    text: "A hobby project for a sample gallery of young artists. I’m using React, TypeScript, React Query, Redux for state management, and Firebase as the database. Hosted online via GitHub Pages.",
    link: "https://juliafs.github.io/Galeriq-Gyundogan/",
  },
  {
    src: "/images/projects/softuni-exam-project-react.jpg",
    alt: "Galery Gyundogan - SoftUni exam project",
    text: "SoftUni exam project for React. Built with React and TypeScript, using fetch for data handling and the SoftUni training server as backend. Hosted online via Firebase Hosting.",
    link: "https://galeriq-guyndogan.web.app/",
  },
  {
    src: "/images/projects/softuni-angular-project.jpg",
    alt: "Calisto - SoftUni exam project",
    text: "SoftUni exam project for Angular. Built with Angular, using the Fetch API for data handling and Firebase as the backend. Hosted online via Firebase Hosting.",
    link: "https://calisto-26845.web.app/company/company-list",
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
              className="rounded-lg shadow-lg object-cover border border-gray-100 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
            <div className="text-left mx-4">
              <div className="flex gap-2 items-center text-lg font-bold pb-1 text-purple-600 cursor-pointer">
                <FiLink />
                <a
                  href={projects[index].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-2 text-purple-600 font-semibold hover:underline"
                >
                  View Online
                </a>
              </div>
              <p className="text-left">{projects[index].text}</p>
            </div>
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
            <div className="mt-4 px-6 md:px-12 text-lg text-center w-full max-w-[90vw] flex justify-center font-bold">
              <a
                href={projects[index].link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-300 hover:text-purple-100 hover:underline"
              >
                <FiLink /> View Online
              </a>
            </div>
            <p className="mt-4 text-white px-6 md:px-12 text-lg text-left">
              {projects[index].text}
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
