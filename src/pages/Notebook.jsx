import NoteCard from '../components/NoteCard';
import { notesData } from '../data/notesData'; // Import our data

const Notebook = () => {
  // Group notes by category
  const categorizedNotes = notesData.reduce((acc, note) => {
    (acc[note.category] = acc[note.category] || []).push(note);
    return acc;
  }, {});

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="relative text-center mb-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 bg-pink-500/30 blur-3xl rounded-full -z-10"></div>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Notebook</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
          My thoughts, insights, and reflections.
        </p>
      </div>

      {/* Articles List */}
      <div className="space-y-16">
        {Object.entries(categorizedNotes).map(([category, notes]) => (
          <section key={category}>
            <div className="flex justify-between items-baseline mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{category}</h2>
              <span className="text-sm text-gray-400">{notes.length} note{notes.length > 1 ? 's' : ''}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {notes.map((note) => (
                <NoteCard key={note.slug} {...note} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Notebook;