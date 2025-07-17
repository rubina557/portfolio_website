// src/pages/More/TechStack.jsx

import React from 'react';

// You would ideally have SVG icons for each technology in your assets folder.
// For now, we'll use a placeholder component.
const TechIcon = ({ name }) => (
    <div className="w-10 h-10 bg-geist-bg mb-3 rounded-lg flex items-center justify-center text-xs text-geist-gray">
        {/* Replace this div with an <img src={...} /> or an SVG component */}
        Icon
    </div>
);

const techStack = {
  "Core Languages": ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  "Frontend Frameworks": ["React", "Next.js", "Vite", "Tailwind CSS"],
  "Backend & Database": ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  "Design & Prototyping": ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
  "Tools & Platforms": ["Git", "GitHub", "Vercel", "Docker", "Jira"],
};

const TechStack = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-20 md:py-24">
      {/* Page Header */}
      <div className="text-center mb-16">
        <p className="text-geist-blue font-semibold">Toolkit</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">My Tech Stack</h1>
        <p className="text-lg text-geist-gray mt-4 max-w-3xl mx-auto">
          The tools, technologies, and platforms I use to bring ideas to life, from concept to deployment.
        </p>
      </div>

      {/* Tech Grid by Category */}
      <div className="space-y-16">
        {Object.entries(techStack).map(([category, technologies]) => (
          <div key={category}>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-geist-border pb-3">
              {category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {technologies.map((tech) => (
                <div key={tech} className="bg-geist-light-gray p-4 rounded-lg flex flex-col items-center text-center">
                  <TechIcon name={tech} />
                  <p className="font-semibold text-white">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;