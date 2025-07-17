import BookCard from '../../components/BookCard'; 
import { booksData } from '../../data/booksData'; 

const Bookshelf = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="relative text-center mb-16">
         {/* Decorative Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-24 bg-blue-500/20 dark:bg-blue-500/30 blur-3xl rounded-full -z-10"></div>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Bookshelf
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
          Books and pieces of wisdom I've enjoyed reading.
        </p>
      </div>

      {/* Responsive Book Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-10">
        {booksData.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            imageSrc={book.imageSrc}
            link={book.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;