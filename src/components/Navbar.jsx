import { NavLink } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, setTheme }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-[#0d0d0d]/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
     {/* Logo */}
        <div className="text-lg font-bold tracking-tight">[e]</div>

        {/* Links */}
        <nav className="hidden md:flex gap-6 text-sm">
          {['about', 'work', 'notebook', 'contact'].map((route) => (
            <NavLink
              key={route}
              to={`/${route}`}
              className={({ isActive }) =>
                `capitalize hover:text-black dark:hover:text-white ${
                  isActive ? 'font-semibold text-black dark:text-white' : 'text-gray-600 dark:text-gray-400'
                }`
              }
            >
              {route}
            </NavLink>
          ))}
        </nav>

        {/* Theme Toggle */}
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-gray-300 hover:text-white" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700 hover:text-black" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
