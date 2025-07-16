"use client"

import Navbar from "./navbar"
import Footer from "./footer"
import { useEffect, useState } from "react"

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
  }, [])

  useEffect(() => {
    // Update document class and save preference
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar theme={theme} setTheme={setTheme} />

      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-6 py-12">{children}</div>
      </main>

      <Footer />
    </div>
  )
}

export default Layout
