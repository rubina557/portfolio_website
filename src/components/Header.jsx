import { Sun, Moon } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { useState } from 'react';

const Header = () => {
  const [dark, setDark] = useState(false);

  return (
    <header className="w-full shadow-sm bg-gradient-to-r from-[#e0d6f5] via-[#fce0d6] to-[#fdfbfa]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo + Nav */}
        <div className="flex items-center gap-12">
          <div className="text-xl font-bold tracking-tight">[e]</div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-800">
            <NavItem to="/about" label="About" />
            <NavItem to="/work" label="Work" />
            <NavItem to="/notebook" label="Notebook" />
            <NavItem to="/contact" label="Contact" />
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-black">
                More <span className="text-xs">▼</span>
              </button>
              {/* Add dropdown here if needed */}
            </div>
          </nav>
        </div>

        {/* Social Icons + Theme Toggle */}
        <div className="flex items-center gap-4 text-gray-800">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin className="w-5 h-5 hover:text-black" /></a>
          <a href="https://x.com" target="_blank" rel="noreferrer"><FaXTwitter className="w-5 h-5 hover:text-black" /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub className="w-5 h-5 hover:text-black" /></a>
          <div className="border-l h-5 mx-2"></div>
          <button
            onClick={() => setDark(!dark)}
            className="hover:text-black"
          >
            {dark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `hover:text-black ${isActive ? "font-semibold text-black" : "text-gray-700"}`
    }
  >
    {label}
  </NavLink>
);

export default Header;
