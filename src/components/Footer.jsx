"use client"

import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo/Brand */}
          <div className="space-y-4">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">[e]</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Building digital experiences with passion and precision.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">Navigation</h3>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/work"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Work
              </Link>
              <Link
                href="/notebook"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Notebook
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">Connect</h3>
            <div className="space-y-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-500 dark:text-gray-500">
              <Link href="/privacy" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
