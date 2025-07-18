import { Link, NavLink, useLocation } from "react-router-dom";
import { Sun, Moon, Github, Linkedin, X, Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Custom hook to detect clicks outside an element (for the dropdown)
const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

const Navbar = ({ theme, setTheme }) => {
  const { pathname } = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setDropdownOpen(false));

  const navItems = ["about", "work", "notebook", "contact"];
  const moreItems = [
    { name: "Bookshelf", path: "/more/bookshelf" },
    { name: "Tech Stack", path: "/more/tech-stack" },
    { name: "This UI Kit" },
  ];

  const isMoreActive = moreItems.some(
    (item) => item.path && pathname.startsWith(item.path)
  );

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const NavLinks = ({ isMobile = false }) => (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item}
          to={`/${item}`}
          onClick={() => isMobile && setMobileMenuOpen(false)}
          className={({ isActive }) =>
            `capitalize transition-colors duration-200 ${
              isActive
                ? "text-gray-900 dark:text-white font-medium"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`
          }
        >
          {item}
        </NavLink>
      ))}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
          className={`capitalize transition-colors duration-200 flex items-center gap-1 ${
            isMoreActive
              ? "text-gray-900 dark:text-white font-medium"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          More{" "}
          <span
            className={`transition-transform duration-200 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          >
            ▾
          </span>
        </button>
        {dropdownOpen && (
          <div className="absolute top-full mt-3 w-48 -translate-x-1/2 left-1/2 bg-white/95 dark:bg-zinc-800/95 backdrop-blur-md shadow-lg rounded-xl p-2 z-50 border border-gray-200 dark:border-zinc-700">
            {moreItems.map(({ name, path }) => {
              const itemClasses =
                "block w-full text-left text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-md px-3 py-2 transition-colors";
              const closeMenus = () => {
                setDropdownOpen(false);
                if (isMobile) setMobileMenuOpen(false);
              };
              return path ? (
                <Link
                  key={name}
                  to={path}
                  className={itemClasses}
                  onClick={closeMenus}
                >
                  {name}
                </Link>
              ) : (
                <button key={name} onClick={closeMenus} className={itemClasses}>
                  {name}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );

  return (
    <header className="sticky top-6 w-full flex justify-center px-4 z-50">
      <div className="w-full max-w-4xl backdrop-blur-md bg-white/80 dark:bg-zinc-900/70 border border-gray-200 dark:border-zinc-700/80 rounded-full px-5 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          [e]
        </Link>
        <nav className="hidden md:flex gap-6 text-sm items-center">
          <NavLinks />
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin
              size={18}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter Profile"
          >
            <X
              size={18}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
          >
            <Github
              size={18}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            />
          </a>
          <div className="w-px h-5 bg-zinc-300 dark:bg-zinc-600"></div>
          <button
            onClick={toggleTheme}
            aria-label={`Activate ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun
                size={20}
                className="text-gray-400 hover:text-white transition-colors"
              />
            ) : (
              <Moon
                size={20}
                className="text-gray-500 hover:text-gray-900 transition-colors"
              />
            )}
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open main menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-gray-900 dark:text-white" />
            ) : (
              <Menu size={24} className="text-gray-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full mt-2 w-full max-w-sm bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md rounded-2xl shadow-lg border dark:border-zinc-700 p-6">
          <nav className="flex flex-col gap-6 items-center">
            <NavLinks isMobile={true} />
            <div className="w-full border-t border-zinc-200 dark:border-zinc-700 pt-6 mt-4 flex justify-between items-center">
              <div className="flex gap-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin
                    size={20}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter Profile"
                >
                  <X
                    size={20}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github
                    size={20}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  />
                </a>
              </div>
              <button
                onClick={toggleTheme}
                aria-label={`Activate ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
              >
                {theme === "dark" ? (
                  <Sun size={22} className="text-gray-400" />
                ) : (
                  <Moon size={22} className="text-gray-500" />
                )}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
