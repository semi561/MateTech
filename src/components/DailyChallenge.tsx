import React, { useState } from 'react';
import { Trophy, Zap, CheckCircle2, Circle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { cn } from '../lib/utils';

export const DailyChallenge: React.FC = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const challenge = {
    question: 'Care este valoarea lui $x$ în ecuația $2^x = 16$?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    explanation: '$2^4 = 2 \times 2 \times 2 \times 2 = 16$.'
  };

  const handleAnswer = (index: number) => {
    if (isCompleted) return;
    setSelectedAnswer(index);
    if (index === challenge.correctAnswer) {
      setIsCompleted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4f46e5', '#10b981', '#f59e0b']
      });
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4">
        <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400">
          <Trophy size={20} />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <Zap className="text-amber-500 fill-amber-500" size={20} />
        <h3 className="text-lg font-black text-zinc-900 dark:text-zinc-100 tracking-tight uppercase">Provocarea Zilei</h3>
      </div>

      <div className="mb-8">
        <p className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-6 leading-relaxed">
          {challenge.question}
        </p>

        <div className="grid grid-cols-2 gap-3">
          {challenge.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={isCompleted}
              className={cn(
                "p-4 rounded-2xl border-2 transition-all font-bold text-lg",
                selectedAnswer === index
                  ? index === challenge.correctAnswer
                    ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500 text-emerald-600 dark:text-emerald-400"
                    : "bg-rose-50 dark:bg-rose-900/20 border-rose-500 text-rose-600 dark:text-rose-400"
                  : "bg-zinc-50 dark:bg-zinc-800/50 border-zinc-100 dark:border-zinc-800 hover:border-indigo-500 text-zinc-700 dark:text-zinc-300"
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isCompleted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800/50"
          >
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold mb-2">
              <CheckCircle2 size={18} />
              Corect! Ai câștigat +50 puncte.
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 italic">
              {challenge.explanation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
