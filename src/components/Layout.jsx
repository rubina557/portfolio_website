import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-[#111111] text-gray-900 dark:text-gray-100 transition-colors overflow-x-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] h-24 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 opacity-50 blur-2xl z-0" />

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] h-24 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 opacity-50 blur-2xl z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar theme={theme} setTheme={setTheme} />
        <main className="flex-grow">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
