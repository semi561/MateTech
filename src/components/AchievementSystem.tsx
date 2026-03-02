import React, { useState, useEffect } from 'react';
import { Trophy, Star, Zap, Target, Book, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { Achievement } from '../types';

export function AchievementSystem() {
  const [achievements] = useState<Achievement[]>([
    { id: '1', title: 'Primii Pași', description: 'Ai terminat prima lecție.', icon: 'Book', unlocked: true },
    { id: '2', title: 'Matematician Rapid', description: 'Ai rezolvat 5 probleme în sub 2 minute.', icon: 'Zap', unlocked: true },
    { id: '3', title: 'Consecvență', description: 'Ai intrat în aplicație 3 zile la rând.', icon: 'Star', unlocked: false },
    { id: '4', title: 'Expert Algebră', description: 'Ai terminat toate lecțiile de algebră din clasa a 9-a.', icon: 'Award', unlocked: false },
    { id: '5', title: 'Sniper BAC', description: 'Ai obținut 100% la o simulare BAC.', icon: 'Target', unlocked: false },
  ]);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Book': return <Book size={24} />;
      case 'Zap': return <Zap size={24} />;
      case 'Star': return <Star size={24} />;
      case 'Award': return <Award size={24} />;
      case 'Target': return <Target size={24} />;
      default: return <Trophy size={24} />;
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="text-amber-500" size={24} />
        <h3 className="font-bold text-xl text-zinc-900 dark:text-zinc-100">Realizări</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {achievements.map((achievement) => (
          <div 
            key={achievement.id}
            className={`p-4 rounded-2xl border flex items-center gap-4 transition-all ${
              achievement.unlocked 
                ? 'bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800/50' 
                : 'bg-zinc-50 dark:bg-zinc-800/50 border-zinc-100 dark:border-zinc-700 opacity-60 grayscale'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              achievement.unlocked ? 'bg-amber-500 text-white' : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-400'
            }`}>
              {getIcon(achievement.icon)}
            </div>
            <div>
              <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{achievement.title}</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
