import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Github, Linkedin, Twitter, ChevronDown } from "lucide-react";
import { useState } from "react";

const Navbar = ({ theme, setTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notebookOpen, setNotebookOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-[#121212]/80 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-black dark:text-white tracking-tight">
          [e]
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium items-center text-gray-700 dark:text-gray-300">
          <Link to="/about" className={`${isActive("/about") ? "text-black dark:text-white font-semibold" : "hover:text-black dark:hover:text-white"}`}>
            About
          </Link>
          <Link to="/work" className={`${isActive("/work") ? "text-black dark:text-white font-semibold" : "hover:text-black dark:hover:text-white"}`}>
            Work
          </Link>
          <div className="relative group">
            <button onClick={() => setNotebookOpen(!notebookOpen)} className="flex items-center gap-1 hover:text-black dark:hover:text-white">
              Notebook <ChevronDown className="w-4 h-4" />
            </button>
            {notebookOpen && (
              <div className="absolute top-full mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-md p-2 w-40 z-20">
                <Link to="/notebook/bookmarks" className="block px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                  Bookmarks
                </Link>
                <Link to="/notebook/snippets" className="block px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                  Snippets
                </Link>
              </div>
            )}
          </div>
          <Link to="/contact" className={`${isActive("/contact") ? "text-black dark:text-white font-semibold" : "hover:text-black dark:hover:text-white"}`}>
            Contact
          </Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-3 text-gray-500 dark:text-gray-400">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="w-4 h-4 hover:text-black dark:hover:text-white" />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              <Twitter className="w-4 h-4 hover:text-black dark:hover:text-white" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="w-4 h-4 hover:text-black dark:hover:text-white" />
            </a>
          </div>

          {/* Theme Toggle */}
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-gray-400 hover:text-white" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 hover:text-black" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#121212] border-t border-gray-200 dark:border-gray-700 px-6 py-4">
          <nav className="space-y-3 text-sm">
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/work" onClick={() => setMobileMenuOpen(false)}>Work</Link>
            <div>
              <div onClick={() => setNotebookOpen(!notebookOpen)} className="flex items-center justify-between cursor-pointer">
                <span>Notebook</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              {notebookOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link to="/notebook/bookmarks" onClick={() => setMobileMenuOpen(false)}>Bookmarks</Link>
                  <Link to="/notebook/snippets" onClick={() => setMobileMenuOpen(false)}>Snippets</Link>
                </div>
              )}
            </div>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

            {/* Socials */}
            <div className="flex gap-4 pt-4">
              <a href="https://linkedin.com" target="_blank"><Linkedin className="w-4 h-4" /></a>
              <a href="https://x.com" target="_blank"><Twitter className="w-4 h-4" /></a>
              <a href="https://github.com" target="_blank"><Github className="w-4 h-4" /></a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
