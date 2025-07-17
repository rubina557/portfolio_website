// src/pages/Notebook.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // <-- FIX #2: Import the Link component

// <-- FIX #1: Import the arrowRight icon. 
// (Adjust the path if your assets folder is located elsewhere)
import arrowRight from '../assets/icons/arrow-right.svg'; 

// Mock data for notebook/blog entries
const articles = [
  {
    id: 1,
    date: 'MARCH 15, 2024',
    title: 'The Art of Simplicity in UI Design',
    excerpt: 'Exploring how minimalism and a "less is more" approach can lead to more intuitive and effective user interfaces. We dive into principles from Dieter Rams and modern applications.',
    slug: '/notebook/art-of-simplicity',
  },
  {
    id: 2,
    date: 'FEBRUARY 22, 2024',
    title: 'Why Design Systems are a Game-Changer for Scaling Teams',
    excerpt: 'A deep dive into how a well-structured design system can accelerate development, ensure brand consistency, and foster collaboration between designers and engineers.',
    slug: '/notebook/design-systems',
  },
  {
    id: 3,
    date: 'JANUARY 10, 2024',
    title: 'My Journey from Graphic Design to Product Design',
    excerpt: 'Reflections on the transition, the key differences in mindset, and the skills that carried over. A personal story for anyone considering a similar career path.',
    slug: '/notebook/my-journey',
  },
];

// NOTE: You are using 'geist-blue' and 'geist-gray'. 
// Make sure these colors are defined in your tailwind.config.js file.
const Notebook = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-20 md:py-24">
      {/* Page Header */}
      <div className="text-left mb-16">
        <p className="text-geist-blue font-semibold">Writings</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">From the Notebook</h1>
        <p className="text-lg text-geist-gray mt-4">
          Musings on design, technology, and the intersection of the two.
        </p>
      </div>

      {/* Articles List */}
      <div className="space-y-12">
        {articles.map((article) => (
          <article key={article.id} className="group">
            <p className="text-sm text-geist-gray mb-2">{article.date}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {/* <-- FIX #2: Use <Link> instead of <a> */}
              <Link to={article.slug} className="hover:text-geist-blue transition-colors duration-300">
                {article.title}
              </Link>
            </h2>
            <p className="text-geist-gray mb-4">{article.excerpt}</p>
            {/* <-- FIX #2: Use <Link> instead of <a> */}
            <Link to={article.slug} className="inline-flex items-center font-semibold text-white group-hover:text-geist-blue transition-colors duration-300">
              Read Article <img src={arrowRight} alt="arrow" className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Notebook;