import { Link } from 'react-router-dom';

const NoteCard = ({ slug, image, title, date, readTime }) => {
  return (
    <Link to={`/notebook/${slug}`} className="block group">
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-105">
        {/* Background Image */}
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        {/* Text Content */}
        <div className="absolute bottom-0 left-0 p-5 w-full text-white">
          <h3 className="text-lg font-bold leading-tight">{title}</h3>
          <p className="text-xs text-gray-300 mt-2">{date} — {readTime}</p>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;