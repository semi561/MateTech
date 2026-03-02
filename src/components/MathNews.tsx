import React from 'react';
import { Newspaper, ArrowUpRight, Clock, Tag } from 'lucide-react';
import { cn } from '../lib/utils';

const news = [
  { 
    id: '1', 
    title: 'O nouă descoperire în teoria numerelor prime', 
    date: '2 ore în urmă', 
    category: 'Cercetare',
    image: 'https://picsum.photos/seed/math1/400/250'
  },
  { 
    id: '2', 
    title: 'Cum influențează matematica algoritmii de AI', 
    date: '1 zi în urmă', 
    category: 'Tehnologie',
    image: 'https://picsum.photos/seed/math2/400/250'
  },
  { 
    id: '3', 
    title: 'Pregătirea pentru BAC 2026: Sfaturi de la experți', 
    date: '3 zile în urmă', 
    category: 'Educație',
    image: 'https://picsum.photos/seed/math3/400/250'
  },
];

export const MathNews: React.FC = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-2xl flex items-center justify-center text-rose-600 dark:text-rose-400">
            <Newspaper size={24} />
          </div>
          <div>
            <h3 className="text-xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight">Știri MateTech</h3>
            <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Lumea Matematicii</p>
          </div>
        </div>
        <button className="text-xs font-black text-rose-600 dark:text-rose-400 hover:underline uppercase tracking-widest">Vezi Tot</button>
      </div>

      <div className="space-y-6">
        {news.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="flex gap-4">
              <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border border-zinc-100 dark:border-zinc-800">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-[10px] font-black text-zinc-500 dark:text-zinc-400 rounded-full uppercase tracking-widest">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] text-zinc-400 font-bold">
                      <Clock size={10} />
                      {item.date}
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 leading-tight group-hover:text-rose-600 transition-colors">
                    {item.title}
                  </h4>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-black text-zinc-400 uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                  Citește <ArrowUpRight size={12} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
