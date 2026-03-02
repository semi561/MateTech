import React from 'react';
import { Quote } from 'lucide-react';

const quotes = [
  { text: "Matematica este muzica rațiunii.", author: "James Joseph Sylvester" },
  { text: "Nu te îngrijora de dificultățile tale la matematică. Te asigur că ale mele sunt și mai mari.", author: "Albert Einstein" },
  { text: "Matematica este limba în care Dumnezeu a scris universul.", author: "Galileo Galilei" },
  { text: "Esența matematicii nu este de a face lucrurile simple complicate, ci de a face lucrurile complicate simple.", author: "S. Gudder" },
  { text: "Fără matematică, nu există nimic din ceea ce poți face. Totul în jurul tău este matematică.", author: "Shakuntala Devi" },
];

export const DailyMathQuote: React.FC = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
      <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-indigo-400/20 rounded-full blur-xl" />
      
      <Quote className="text-indigo-200/40 mb-4" size={32} />
      <p className="text-xl font-medium mb-4 leading-relaxed italic">
        "{quote.text}"
      </p>
      <div className="flex items-center gap-2">
        <div className="h-px w-8 bg-indigo-300/50" />
        <span className="text-sm font-bold text-indigo-100 uppercase tracking-widest">
          {quote.author}
        </span>
      </div>
    </div>
  );
};
