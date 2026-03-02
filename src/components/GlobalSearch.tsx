import React, { useState, useEffect } from 'react';
import { Search, X, Book, Calculator, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CURRICULUM } from '../constants';

export function GlobalSearch({ onSelectLesson }: { onSelectLesson: (grade: any, lesson: any) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = (val: string) => {
    setQuery(val);
    if (!val.trim()) {
      setResults([]);
      return;
    }

    const found: any[] = [];
    Object.entries(CURRICULUM).forEach(([grade, topics]) => {
      topics.forEach((topic: any) => {
        topic.lessons.forEach((lesson: any) => {
          if (lesson.title.toLowerCase().includes(val.toLowerCase()) || 
              lesson.content.toLowerCase().includes(val.toLowerCase())) {
            found.push({ grade, lesson });
          }
        });
      });
    });
    setResults(found.slice(0, 5));
  };

  return (
    <div className="relative">
      <div className="relative group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
        <input 
          type="text"
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Caută lecții, formule..."
          className="w-64 bg-zinc-100 dark:bg-zinc-800 border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-zinc-900 dark:text-zinc-100"
        />
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full mt-2 w-80 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="p-2">
                {results.map((res, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      onSelectLesson(parseInt(res.grade), res.lesson);
                      setIsOpen(false);
                      setQuery('');
                    }}
                    className="w-full flex items-center gap-3 p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-xl transition-colors text-left group"
                  >
                    <div className="w-8 h-8 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Book size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{res.lesson.title}</div>
                      <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Clasa {res.grade}-a</div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
