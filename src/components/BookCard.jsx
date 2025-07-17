const BookCard = ({ title, imageSrc, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      aria-label={`Read more about ${title}`}
    >
      <img
        src={imageSrc}
        alt={`Cover of the book ${title}`}
        className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1"
      />
    </a>
  );
};

export default BookCard;
