// src/components/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 h-80 w-full bg-gradient-to-r from-yellow-100 via-pink-100 to-blue-100 dark:from-yellow-900 dark:via-pink-900 dark:to-blue-900 blur-2xl -z-10" />
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-start gap-12 text-sm">
        {/* Left side */}
        <div className="space-y-3">
          <h1 className="text-2xl font-bold">[e]</h1>
          <p>Thanks for stopping by!</p>
          <p className="text-xs mt-8 text-gray-600 dark:text-gray-400">
            © 2025 Ehtesham. All Rights Reserved.
          </p>
        </div>

        {/* Center (optional spacing) */}
        <div className="flex-1 hidden md:block" />

        {/* Right side */}
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h3 className="font-semibold mb-2">Links</h3>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/tech">Tech Stack</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Elsewhere</h3>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li><a href="mailto:e@example.com">Email</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
              <li><a href="https://discord.com" target="_blank" rel="noreferrer">Discord</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
