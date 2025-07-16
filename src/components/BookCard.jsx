const BookCard = ({ title, author }) => {
  return (
    <div className="border rounded-md p-4 bg-white text-center">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{author}</p>
      {/* TODO: Add a placeholder for the book cover image */}
    </div>
  );
};

export default BookCard;
