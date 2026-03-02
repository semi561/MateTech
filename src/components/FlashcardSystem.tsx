import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, RotateCcw, ChevronLeft, ChevronRight, Brain } from 'lucide-react';
import { Flashcard } from '../types';

export function FlashcardSystem() {
  const [cards] = useState<Flashcard[]>([
    { id: '1', front: 'Derivata lui $x^n$', back: '$n \\cdot x^{n-1}$', category: 'Analiză' },
    { id: '2', front: 'Formula lui Delta ($\\Delta$)', back: '$\\Delta = b^2 - 4ac$', category: 'Algebră' },
    { id: '3', front: 'Integrala lui $\\sin(x)$', back: '$-\\cos(x) + C$', category: 'Analiză' },
    { id: '4', front: 'Probabilitatea unui eveniment', back: '$P = \\frac{\\text{nr. cazuri favorabile}}{\\text{nr. cazuri posibile}}$', category: 'Probabilități' },
    { id: '5', front: 'Panta unei drepte ($m$)', back: '$m = \\frac{y_2 - y_1}{x_2 - x_1}$', category: 'Geometrie' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => setCurrentIndex((prev) => (prev + 1) % cards.length), 150);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setTimeout(() => setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length), 150);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
            <Brain size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight">Flashcards</h2>
            <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Memorare prin Repetiție Spațiată</p>
          </div>
        </div>
        <div className="text-sm font-bold text-zinc-400">
          {currentIndex + 1} / {cards.length}
        </div>
      </div>

      <div className="flex flex-col items-center gap-8">
        <div 
          className="relative w-full max-w-md h-80 cursor-pointer perspective-1000"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <motion.div 
            className="w-full h-full relative transition-all duration-500 preserve-3d"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
          >
            {/* Front */}
            <div className="absolute inset-0 bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center backface-hidden shadow-xl">
              <span className="absolute top-6 left-6 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                {cards[currentIndex].category}
              </span>
              <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                {cards[currentIndex].front}
              </div>
              <p className="mt-8 text-xs text-zinc-400 font-medium">Apasă pentru a vedea răspunsul</p>
            </div>

            {/* Back */}
            <div className="absolute inset-0 bg-indigo-600 dark:bg-indigo-700 rounded-3xl p-8 flex flex-col items-center justify-center text-center backface-hidden shadow-xl rotate-y-180">
              <div className="text-3xl font-black text-white">
                {cards[currentIndex].back}
              </div>
              <p className="mt-8 text-xs text-indigo-200 font-medium">Apasă pentru a reveni</p>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={prevCard} className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
            <ChevronLeft size={24} />
          </button>
          <button onClick={() => setIsFlipped(!isFlipped)} className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold flex items-center gap-2 shadow-lg">
            <RotateCcw size={20} /> Întoarce
          </button>
          <button onClick={nextCard} className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
