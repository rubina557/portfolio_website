const TechCard = ({ name, icon }) => {
  return (
    <div className="bg-gray-50 dark:bg-zinc-800/80 p-4 rounded-lg flex flex-col items-center justify-center text-center gap-3 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-zinc-700/80">
      <img 
        src={icon} 
        alt={`${name} logo`} 
        className="w-10 h-10 object-contain" 
      />
      <p className="text-sm text-gray-600 dark:text-gray-400">{name}</p>
    </div>
  );
};

export default TechCard;