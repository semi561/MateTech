import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

export function ExamCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  // Mock BAC date: June 20, 2026
  const examDate = new Date('2026-06-20T09:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = examDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          <Calendar className="text-indigo-500" size={20} />
          Countdown BAC 2026
        </h3>
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Tehnologic</span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[
          { label: 'Zile', value: timeLeft.days },
          { label: 'Ore', value: timeLeft.hours },
          { label: 'Min', value: timeLeft.minutes },
          { label: 'Sec', value: timeLeft.seconds }
        ].map((item, i) => (
          <div key={i} className="bg-zinc-50 dark:bg-zinc-800/50 p-3 rounded-2xl text-center border border-zinc-100 dark:border-zinc-700/50">
            <div className="text-2xl font-black text-zinc-900 dark:text-zinc-100 tracking-tighter leading-none mb-1">
              {item.value.toString().padStart(2, '0')}
            </div>
            <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">{item.label}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex items-center gap-2 text-xs text-zinc-500 bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-xl border border-indigo-100 dark:border-indigo-800/50">
        <Clock size={14} className="text-indigo-500" />
        <span>Fiecare minut de studiu contează pentru nota finală!</span>
      </div>
    </div>
  );
}
