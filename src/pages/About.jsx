// src/pages/About.jsx

import React from "react";
// --- 1. Import the Ghost icon from lucide-react ---
import { Send, Ghost } from "lucide-react"; 
import { Link } from "react-router-dom";

// --- 2. Update the placeholder component to include the Ghost icon ---
const ProfileImagePlaceholder = () => (
  <div className="aspect-square w-full rounded-2xl bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 flex items-center justify-center">
    <Ghost className="w-1/2 h-1/2 text-gray-300 dark:text-zinc-700" strokeWidth={1} />
  </div>
);

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* --- HEADER --- */}
      <header className="mb-12 md:mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight tracking-tighter">
          A little bit about me
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 mt-3">
          Who I am and what I do.
        </p>
      </header>

      <div className="border-t border-gray-200 dark:border-gray-700 my-10"></div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="grid md:grid-cols-3 md:gap-16 lg:gap-24">
        
        {/* --- LEFT COLUMN (Text Content) --- */}
        <div className="md:col-span-2 space-y-10 text-lg text-gray-600 dark:text-gray-300">
          
          <section className="space-y-2">
            <h2 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-widest">
              Who I am
            </h2>
            <p className="leading-relaxed">
              I’m <span className="font-semibold text-gray-900 dark:text-white">Eihab</span> (Pronounced
              “Ee-hab”) a multi-disciplinary front-end engineer and UI/UX
              designer based in Rabat, Morocco 🇲🇦.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-widest">
              What I Do
            </h2>
            <p className="leading-relaxed">
              With two years of invaluable experience in my role at Harmony
              Technology –– a tech company based here in Rabat, I have honed my
              skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing
              me to craft seamless and interactive user experiences. During my
              time at Harmony Technology, I had the privilege of collaborating
              on projects for esteemed clients such as the Ministry of Health,
              Ministry of Education, and Ministry of Justice. It was an
              incredibly rewarding experience to develop applications that
              directly impact the lives of Moroccan citizens.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-widest">
              What I Did
            </h2>
            <p className="leading-relaxed">
              Before delving into the realm of front end engineering, I spent
              five years as a graphic designer. This background has equipped me
              with a keen eye for aesthetics and a deep understanding of
              user-centered design principles. It enables me to seamlessly blend
              functionality and visual appeal in every project I undertake.
            </p>
          </section>

          <section>
            <p className="leading-relaxed">
              Feel free to reach out via{" "}
              <a href="mailto:email@example.com" className="font-medium text-gray-900 dark:text-white underline hover:no-underline transition-colors">
                e-mail
              </a>
              , or follow me on{" "}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-900 dark:text-white underline hover:no-underline transition-colors">
                Twitter
              </a>
              . Want to see where I’ve worked? Check out my{" "}
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-900 dark:text-white underline hover:no-underline transition-colors">
                Resume
              </a>
              , or Connect with me on{" "}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-900 dark:text-white underline hover:no-underline transition-colors">
                LinkedIn
              </a>
              .
            </p>
          </section>

          <div className="pt-4">
            <p className="leading-relaxed">
              Let’s build something great,
            </p>
            <svg
              className="mt-4 w-48 h-auto text-gray-800 dark:text-white"
              viewBox="0 0 326 98"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
                {/* Path data here... */}
            </svg>
          </div>
        </div>

        {/* --- RIGHT COLUMN (Sticky Image & Button) --- */}
        <div className="md:col-span-1 mt-16 md:mt-0">
          <div className="sticky top-28 space-y-6">
            <ProfileImagePlaceholder />
            <Link 
              to="/contact"
              className="group h-14 w-full rounded-lg px-6 py-4 flex items-center justify-center gap-2 transition-colors duration-200 bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              <Send className="w-5 h-5 transition-transform duration-300 transform-gpu group-hover:-rotate-12" />
              <span className="font-semibold">Get in touch</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;