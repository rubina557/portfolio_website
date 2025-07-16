import { Sun, Moon, Github, Linkedin, Twitter } from "lucide-react";


import { Link, useLocation } from 'react-router-dom';
import { useState } from "react";


const NavItem = ({ to, label }) => { // CHANGED: Prop name from `href` to `to` for clarity
  const { pathname } = useLocation(); // CHANGED: Use the useLocation hook
  const isActive = pathname === to;

  return (
    <Link
      to={to} 
      className={`text-sm transition-colors ${
        isActive
          ? "font-medium text-gray-900 dark:text-white"
          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
};


// --- Header Component (Corrected) ---
const Header = () => {
  const [dark, setDark] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // The Header component no longer needs to know about the pathname directly,
  // as the NavItem handles its own active state.

  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Nav */}
        <div className="flex items-center gap-8">
          <div className="text-lg font-semibold text-gray-900 dark:text-white">[e]</div>
          <nav className="hidden md:flex gap-6 text-sm">
            {/* CHANGED: Using the corrected NavItem with the `to` prop */}
            <NavItem to="/about" label="About" />
            <NavItem to="/work" label="Work" />
            <NavItem to="/notebook" label="Notebook" />
            <NavItem to="/contact" label="Contact" />
            <div className="relative">
              <button
                className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                More
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 w-32 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-1 z-10">
                  {/* CHANGED: `href` is now `to` */}
                  <Link
                    to="/blog"
                    className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    onClick={() => setShowDropdown(false)} // Optional: close dropdown on click
                  >
                    Blog
                  </Link>
                  {/* CHANGED: `href` is now `to` */}
                  <Link
                    to="/projects"
                    className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    onClick={() => setShowDropdown(false)} // Optional: close dropdown on click
                  >
                    Projects
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Social Icons + Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* External links correctly use <a> tags, no change needed here */}
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">...</a>
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Twitter">...</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">...</a>
          <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-2"></div>
          <button onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;