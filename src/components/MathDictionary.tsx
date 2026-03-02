import React, { useState } from 'react';
import { Search, Book, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const terms = [
  { term: 'Abscisă', definition: 'Prima coordonată a unui punct într-un sistem de axe ortogonale (axa Ox).', example: 'Punctul A(2, 3) are abscisa 2.' },
  { term: 'Asimptotă', definition: 'O dreaptă spre care se apropie graficul unei funcții pe măsură ce variabila tinde spre infinit.', example: 'Funcția f(x) = 1/x are asimptota orizontală y = 0.' },
  { term: 'Bijectivă', definition: 'O funcție care este atât injectivă, cât și surjectivă.', example: 'Funcția f: R -> R, f(x) = x este bijectivă.' },
  { term: 'Codomeniu', definition: 'Mulțimea în care funcția ia valori.', example: 'În f: A -> B, mulțimea B este codomeniul.' },
  { term: 'Determinant', definition: 'O valoare numerică asociată unei matrice pătratice.', example: 'det([[a, b], [c, d]]) = ad - bc.' },
  { term: 'Exponent', definition: 'Numărul care arată de câte ori se înmulțește baza cu ea însăși.', example: 'În 2^3, 3 este exponentul.' },
  { term: 'Factorial', definition: 'Produsul numerelor naturale de la 1 la n.', example: '5! = 1 * 2 * 3 * 4 * 5 = 120.' },
  { term: 'Gradient', definition: 'Rata de variație a unei funcții.', example: 'Panta unei drepte este gradientul ei.' },
  { term: 'Ipotenuză', definition: 'Latura cea mai lungă a unui triunghi dreptunghic, opusă unghiului de 90 grade.', example: 'a^2 + b^2 = c^2, unde c este ipotenuza.' },
  { term: 'Logaritm', definition: 'Exponentul la care trebuie ridicată baza pentru a obține numărul dat.', example: 'log_2(8) = 3 deoarece 2^3 = 8.' },
];

export const MathDictionary: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

  const filteredTerms = terms.filter(t => 
    t.term.toLowerCase().includes(search.toLowerCase()) || 
    t.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm h-full flex flex-col">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400">
          <Book size={24} />
        </div>
        <div>
          <h3 className="text-xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight">Dicționar Matematic</h3>
          <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Termeni și Definiții</p>
        </div>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Caută un termen..."
          className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
        {filteredTerms.map((t) => (
          <div key={t.term} className="group">
            <button
              onClick={() => setSelectedTerm(selectedTerm === t.term ? null : t.term)}
              className={cn(
                "w-full flex items-center justify-between p-4 rounded-2xl transition-all text-left",
                selectedTerm === t.term 
                  ? "bg-indigo-600 text-white shadow-lg" 
                  : "bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
              )}
            >
              <span className="font-bold">{t.term}</span>
              <ChevronRight 
                size={18} 
                className={cn("transition-transform", selectedTerm === t.term && "rotate-90")} 
              />
            </button>
            <AnimatePresence>
              {selectedTerm === t.term && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-2 text-sm space-y-3">
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {t.definition}
                    </p>
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800/50">
                      <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1">Exemplu</p>
                      <p className="text-zinc-700 dark:text-zinc-300 font-medium italic">{t.example}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};
