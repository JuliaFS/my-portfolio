// components/Navigation.tsx
import React from 'react';

export default function Navigation() {
  return (
    <nav className="flex items-center">
      <a
        href="#"
        className="text-purple-300 hover:text-purple-100 transition duration-300 pr-6 pb-1 relative -top-1"
      >
        About Me
      </a>
      <a
        href="#"
        className="text-purple-300 hover:text-purple-100 transition duration-300 pr-10 pb-1 relative -top-1"
      >
        Projects
      </a>
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
        Resume
      </button>
    </nav>
  );
}
