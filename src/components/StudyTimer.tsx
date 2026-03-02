import React, { useState, useEffect } from 'react';
import { Timer, Play, Pause, RotateCcw, Coffee } from 'lucide-react';
import { cn } from '../lib/utils';

export const StudyTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<'work' | 'break'>('work');

  useEffect(() => {
    let interval: any = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
      audio.play().catch(() => {});
      alert(mode === 'work' ? 'Timpul de lucru a expirat! Ia o pauză.' : 'Pauza s-a terminat! Înapoi la treabă.');
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, mode]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(mode === 'work' ? 25 * 60 : 5 * 60);
  };

  const switchMode = (newMode: 'work' | 'break') => {
    setMode(newMode);
    setIsActive(false);
    setTimeLeft(newMode === 'work' ? 25 * 60 : 5 * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Timer className="text-indigo-600" size={24} />
        <h3 className="font-bold text-zinc-900 dark:text-zinc-100">Cronometru Studiu</h3>
      </div>

      <div className="flex gap-2 mb-8 bg-zinc-100 p-1 rounded-2xl">
        <button 
          onClick={() => switchMode('work')}
          className={cn(
            "flex-1 py-2 rounded-xl text-sm font-medium transition-all",
            mode === 'work' ? "bg-white dark:bg-zinc-700 text-indigo-600 shadow-sm" : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
          )}
        >
          Focus (25m)
        </button>
        <button 
          onClick={() => switchMode('break')}
          className={cn(
            "flex-1 py-2 rounded-xl text-sm font-medium transition-all",
            mode === 'break' ? "bg-white dark:bg-zinc-700 text-indigo-600 shadow-sm" : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
          )}
        >
          Pauză (5m)
        </button>
      </div>

      <div className="text-6xl font-black text-zinc-900 dark:text-zinc-100 mb-8 tracking-tighter">
        {formatTime(timeLeft)}
      </div>

      <div className="flex justify-center gap-3">
        <button 
          onClick={toggleTimer}
          className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg",
            isActive ? "bg-zinc-900 text-white" : "bg-indigo-600 text-white shadow-indigo-200"
          )}
        >
          {isActive ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
        </button>
        <button 
          onClick={resetTimer}
          className="w-14 h-14 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-500 flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all"
        >
          <RotateCcw size={24} />
        </button>
      </div>
    </div>
  );
};
