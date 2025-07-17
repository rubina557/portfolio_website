// src/pages/More/Bookshelf.jsx

import React from 'react';
import BookCard from '../../components/BookCard'; // Correct relative path from More/ to components/

// Mock data for the books. You would likely fetch this from a CMS or a local data file.
const bookData = [
  {
    id: 1,
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1585611142l/44767458.jpg', // Replace with your actual image paths in src/assets/
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'An easy & proven way to build good habits & break bad ones. A framework for improving every day.',
  },
  {
    id: 2,
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657647242l/23692271.jpg',
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    description: 'A foundational book on user-centered design, explaining why some products satisfy customers while others only frustrate them.',
  },
  {
    id: 3,
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348927954l/3735293.jpg',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    description: 'A groundbreaking narrative of humanity’s creation and evolution that explores the ways in which biology and history have defined us.',
  },
  {
    id: 4,
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546092529l/40121378.jpg',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    description: 'A fascinating dive into the two systems that drive the way we think, revealing our cognitive biases.',
  },
];

const Bookshelf = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-20 md:py-24">
      {/* Page Header */}
      <div className="text-center mb-16">
        <p className="text-geist-blue font-semibold">Reading List</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">My Bookshelf</h1>
        <p className="text-lg text-geist-gray mt-4 max-w-3xl mx-auto">
          A collection of books that have shaped my thinking, sharpened my skills, and offered new perspectives on design, technology, and life.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {bookData.map((book) => (
          <BookCard
            key={book.id}
            imgSrc={book.imgSrc}
            title={book.title}
            author={book.author}
            description={book.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;