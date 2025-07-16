import React from "react";
import BookCard from "../../components/BookCard";

const Bookshelf = () => {
  const placeholderBooks = [
    { id: 1, title: "Sample Book 1", author: "Author One" },
    { id: 2, title: "Sample Book 2", author: "Author Two" },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold">Bookshelf</h1>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {placeholderBooks.map((book) => (
          <BookCard key={book.id} title={book.title} author={book.author} />
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
