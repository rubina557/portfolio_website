// src/components/BookCard.jsx

import React from 'react';

// A placeholder image if a book cover isn't available
const placeholderCover = "https://via.placeholder.com/300x450/0A0A0A/FFFFFF?text=Book+Cover";

const BookCard = ({
  imgSrc,
  title,
  author,
  description
}) => {
  return (
    <div className="bg-geist-light-gray rounded-lg p-6 flex flex-col md:flex-row items-start gap-6 h-full hover:bg-opacity-80 transition-all duration-300">
      <img
        src={imgSrc || placeholderCover}
        alt={`Cover of ${title}`}
        className="w-28 h-auto object-cover rounded-md shadow-lg flex-shrink-0"
      />
      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-md text-geist-gray mb-3">by {author}</p>
        <p className="text-geist-gray text-sm">{description}</p>
      </div>
    </div>
  );
};

export default BookCard;