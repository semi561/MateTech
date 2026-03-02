import React, { useState } from 'react';
import { Save, Trash2, Clock } from 'lucide-react';
import { Note } from '../types';

interface NotesSectionProps {
  lessonId: string;
}

export const NotesSection: React.FC<NotesSectionProps> = ({ lessonId }) => {
  const [notes, setNotes] = useState<Note[]>(() => {
    const saved = localStorage.getItem('mate_tech_notes');
    return saved ? JSON.parse(saved) : [];
  });
  const [currentNote, setCurrentNote] = useState(
    notes.find(n => n.lessonId === lessonId)?.content || ''
  );

  const saveNote = () => {
    const newNotes = [...notes];
    const index = newNotes.findIndex(n => n.lessonId === lessonId);
    
    if (index >= 0) {
      newNotes[index] = { ...newNotes[index], content: currentNote, updatedAt: Date.now() };
    } else {
      newNotes.push({
        id: Math.random().toString(36).substr(2, 9),
        lessonId,
        content: currentNote,
        updatedAt: Date.now()
      });
    }

    setNotes(newNotes);
    localStorage.setItem('mate_tech_notes', JSON.stringify(newNotes));
    alert('Notiță salvată!');
  };

  return (
    <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Clock className="text-indigo-600" size={20} />
          <h3 className="font-bold text-zinc-900 dark:text-zinc-100">Notițele Mele</h3>
        </div>
        <button 
          onClick={saveNote}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors"
        >
          <Save size={16} />
          Salvează
        </button>
      </div>
      <textarea
        value={currentNote}
        onChange={(e) => setCurrentNote(e.target.value)}
        placeholder="Scrie aici observațiile tale despre această lecție..."
        className="w-full h-40 bg-zinc-50 border border-zinc-200 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none"
      />
    </div>
  );
};
