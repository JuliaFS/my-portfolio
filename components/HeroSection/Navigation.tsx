// components/Navigation.tsx
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex items-center">
      <Link
        href="/"
        className="text-purple-300 hover:text-purple-100 transition duration-300 pr-6 pb-1 relative -top-1"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-purple-300 hover:text-purple-100 transition duration-300 pr-6 pb-1 relative -top-1"
      >
        About Me
      </Link>

      <Link
        href="/projects"
        className="text-purple-300 hover:text-purple-100 transition duration-300 pr-10 pb-1 relative -top-1"
      >
        Projects
      </Link>

      <a
        href="/images/CV-julia-new.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
      >
        Resume
      </a>
    </nav>
  );
}
