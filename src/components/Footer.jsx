import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative mt-32 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-200 via-rose-200 to-violet-300 dark:from-orange-900/50 dark:via-rose-900/50 dark:to-violet-900/50 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row justify-between items-start gap-12 text-sm">
        <div className="flex flex-col justify-between h-full min-h-[10rem]">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              [e]
            </h1>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Thanks for stopping by ツ
            </p>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Eihab Khan. All Rights Reserved.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Links
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Work
                </Link>
              </li>

              <li>
                <Link
                  to="/more/tech-stack"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Elsewhere
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href="mailto:e@example.com"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
