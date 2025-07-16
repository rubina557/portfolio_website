import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect, useState } from 'react';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="bg-gradient-to-b from-[#fefaf6] to-[#eae5ff] dark:from-[#090909] dark:to-[#1a1a1a] text-gray-900 dark:text-gray-200 min-h-screen flex flex-col">
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="flex-grow px-6 py-10 max-w-5xl mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
