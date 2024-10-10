"use client"; 
import { useState } from 'react';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-1 justify-end md:justify-center">
      <div className="pointer-events-auto md:hidden">
        <button
          className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
          type="button"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)} 
        >
          Menu
          <svg
            viewBox="0 0 8 6"
            aria-hidden="true"
            className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
          >
            <path
              d="M1.75 1.75 4 4.25l2.25-2.5"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
      
      {/* Phone */}
      <nav
        className={`pointer-events-auto md:hidden ${menuOpen ? '' : 'hidden'}`}
      >
        <ul className="flex flex-col space-y-2 bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          <li>
            <a className="block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/#about">
              About Me
            </a>
          </li>
          <li>
            <a className="block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/articles">
             Tech Articles
            </a>
          </li>
        </ul>
      </nav>

      {/* Desktop */}
      <nav className="pointer-events-auto hidden md:block">
        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          <li>
            <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/#about">
              About Me
            </a>
          </li>
          <li>
            <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/articles">
            Technical Articles
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
