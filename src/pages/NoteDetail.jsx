import { useParams, Link } from "react-router-dom";
import { notesData } from "../data/notesData";

const NoteDetail = () => {
  const { slug } = useParams();
  const note = notesData.find((n) => n.slug === slug);

  if (!note) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">404 - Note Not Found</h1>
        <Link
          to="/notebook"
          className="text-blue-500 hover:underline mt-4 inline-block"
        >
          ← Back to Notebook
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Article Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {note.title}
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-4">
          {note.date} — {note.readTime}
        </p>
      </header>

      {/* Hero Image */}
      <img
        src={note.image}
        alt={note.title}
        className="w-full h-auto aspect-video object-cover rounded-2xl shadow-xl mb-12"
      />

      {/* Article Content */}
      <article
        className="prose prose-lg dark:prose-invert max-w-none prose-ol:list-decimal prose-li:my-1 prose-pre:bg-gray-800"
        dangerouslySetInnerHTML={{ __html: note.content }}
      />

      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-400">Last updated: 20/08/2023</p>
      </footer>
    </div>
  );
};

export default NoteDetail;
