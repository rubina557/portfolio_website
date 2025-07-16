const Footer = () => {
  return (
    <footer className="text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-6 flex justify-between flex-wrap gap-6">
        <div className="text-gray-700 dark:text-white font-bold">[e]</div>
        <div className="flex flex-col gap-1">
          <span className="font-semibold">Links</span>
          <a href="/" className="hover:underline">About</a>
          <a href="/" className="hover:underline">Work</a>
          <a href="/" className="hover:underline">Notebook</a>
          <a href="/" className="hover:underline">Contact</a>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-semibold">Social</span>
          <a href="/" className="hover:underline">GitHub</a>
          <a href="/" className="hover:underline">LinkedIn</a>
          <a href="/" className="hover:underline">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

