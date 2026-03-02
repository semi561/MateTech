import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { Trophy, Medal, User } from 'lucide-react';

export function Leaderboard() {
  const [ranks, setRanks] = useState<any[]>([]);

  useEffect(() => {
    const socket = io();
    socket.on('connect', () => {
      socket.emit('join', 'Guest');
    });
    socket.on('update_leaderboard', (data) => setRanks(data));
    return () => { socket.close(); };
  }, []);

  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="text-amber-500" size={24} />
        <h3 className="font-bold text-xl text-zinc-900 dark:text-zinc-100">Clasament Global</h3>
      </div>

      <div className="space-y-3">
        {ranks.map((rank, i) => (
          <div 
            key={i}
            className={`flex items-center justify-between p-3 rounded-2xl border ${
              i === 0 ? 'bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800/50' : 'bg-zinc-50 dark:bg-zinc-800/50 border-zinc-100 dark:border-zinc-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                i === 0 ? 'bg-amber-500 text-white' : i === 1 ? 'bg-zinc-300 text-zinc-700' : i === 2 ? 'bg-orange-300 text-orange-800' : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-500'
              }`}>
                {i + 1}
              </div>
              <div>
                <div className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{rank.name}</div>
                <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Level {rank.level}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-black text-sm text-indigo-600 dark:text-indigo-400">{rank.points}</div>
              <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">puncte</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
