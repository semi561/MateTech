import React from 'react';
import { AlertCircle, RefreshCcw, ArrowRight } from 'lucide-react';

export function ReviewCenter() {
  const mockErrors = [
    { id: '1', lesson: 'Logaritmi', question: 'Calculați $log_2 8$.', date: 'Acum 2 ore' },
    { id: '2', lesson: 'Derivate', question: 'Derivata lui $\\sin(x)$ este?', date: 'Ieri' },
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          <AlertCircle className="text-rose-500" size={20} />
          Centru de Revizuire
        </h3>
        <span className="px-2 py-0.5 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-full text-[10px] font-bold uppercase tracking-wider">
          {mockErrors.length} erori
        </span>
      </div>

      <div className="space-y-4">
        {mockErrors.map((err) => (
          <div key={err.id} className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-100 dark:border-zinc-700/50 group hover:border-indigo-500 transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">{err.lesson}</span>
              <span className="text-[10px] text-zinc-400">{err.date}</span>
            </div>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">{err.question}</p>
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
              Încearcă din nou <ArrowRight size={14} />
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-3 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2">
        <RefreshCcw size={16} />
        Curăță Istoricul
      </button>
    </div>
  );
}
