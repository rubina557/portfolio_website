import TechCard from '../../components/TechCard'; // Adjust path if needed
import { techStackData } from '../../data/techStackData'; // Adjust path if needed

const TechStack = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="relative text-center mb-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-24 bg-orange-400/20 dark:bg-orange-600/20 blur-3xl rounded-full -z-10"></div>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Tech Stack</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
          The dev tools, apps, and gear I use on a daily basis.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="space-y-14">
        {Object.entries(techStackData).map(([category, items]) => (
          <section key={category}>
            <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-400 mb-6">
              {category}
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {items.map((item) => (
                <TechCard key={item.name} name={item.name} icon={item.icon} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TechStack;