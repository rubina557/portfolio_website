import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const Navbar = ({ theme, setTheme }) => {
  const { pathname } = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = ["about", "work", "notebook", "contact"];
  const moreItems = [
    { name: "Bookshelf", path: "/bookshelf" },
    { name: "TechStack", path: "/tech" },
    { name: "This-UI-Kit", path: "/kit" },
  ];

  return (
    <header className="w-full flex justify-center px-4 mt-6">
      <div className="w-full max-w-2xl backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border border-white/40 dark:border-white/20 rounded-2xl px-6 py-3 flex items-center justify-between z-10">
        <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">[e]</Link>

        <nav className="flex gap-3 text-sm items-center">
          {navItems.map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              className={`capitalize ${
                pathname === `/${item}`
                  ? "text-gray-900 dark:text-white font-semibold"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {item}
            </Link>
          ))}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              More ▾
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 bg-white dark:bg-gray-800 shadow rounded p-2 z-50">
                {moreItems.map(({ name, path }) => (
                  <Link
                    key={name}
                    to={path}
                    className="block text-sm text-gray-700 dark:text-gray-200 hover:underline"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin size={16} className="text-gray-500 hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            <Twitter size={16} className="text-gray-500 hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Github size={16} className="text-gray-500 hover:text-gray-900 dark:hover:text-white" />
          </a>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
