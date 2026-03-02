import React from 'react';
import { Trophy, Target, BookOpen, Star } from 'lucide-react';

export const ProgressTracker: React.FC = () => {
  // Mock data for now, could be connected to local storage
  const stats = [
    { label: 'Lecții Parcurse', value: '12', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Scor Mediu', value: '85%', icon: Target, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Zile Consecutive', value: '4', icon: Star, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Realizări', value: '3', icon: Trophy, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <div key={i} className="bg-white p-5 rounded-3xl border border-zinc-200 shadow-sm">
          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-3", s.bg, s.color)}>
            <s.icon size={20} />
          </div>
          <div className="text-2xl font-black text-zinc-900 dark:text-zinc-100">{s.value}</div>
          <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{s.label}</div>
        </div>
      ))}
    </div>
  );
};

import { cn } from '../lib/utils';
