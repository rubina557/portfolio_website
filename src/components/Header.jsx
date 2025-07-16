// src/components/Header.jsx
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-center gap-8">
      {/* Left Section */}
      <div className="flex-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          I'm Eihab Khan
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-md mb-6">
          A frontend developer crafting clean interfaces and exploring the web with React, Tailwind, and thoughtful design.
        </p>
        <div className="flex gap-4">
          <Link
            to="/contact"
            className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Let’s work together
          </Link>
          <Link
            to="/about"
            className="text-sm text-gray-600 dark:text-gray-400 underline hover:text-gray-900 dark:hover:text-white"
          >
            Learn more
          </Link>
        </div>
      </div>

      {/* Right Avatar Section */}
      <div className="w-40 h-40 md:w-56 md:h-56 bg-gray-200 dark:bg-gray-700 rounded-full flex-shrink-0 shadow-inner" />
    </header>
  );
};

export default Header;
