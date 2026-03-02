import React, { useState, useEffect } from 'react';
import { Timer, Play, RotateCcw, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function MentalMathGame() {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'finished'>('idle');
  const [question, setQuestion] = useState({ a: 0, b: 0, op: '+', ans: 0 });
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  const generateQuestion = () => {
    const ops = ['+', '-', '*'];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let a, b, ans;

    if (op === '*') {
      a = Math.floor(Math.random() * 12) + 1;
      b = Math.floor(Math.random() * 12) + 1;
      ans = a * b;
    } else {
      a = Math.floor(Math.random() * 50) + 1;
      b = Math.floor(Math.random() * 50) + 1;
      ans = op === '+' ? a + b : a - b;
    }

    setQuestion({ a, b, op, ans });
    setInput('');
  };

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setTimeLeft(30);
    generateQuestion();
  };

  useEffect(() => {
    let timer: any;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0) {
      setGameState('finished');
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const checkAnswer = (val: string) => {
    setInput(val);
    if (parseInt(val) === question.ans) {
      setScore(s => s + 10);
      generateQuestion();
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-6 rounded-3xl text-white shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Zap size={120} />
      </div>

      <div className="relative z-10">
        <h3 className="text-xl font-black mb-2 flex items-center gap-2 italic uppercase tracking-tighter">
          <Zap size={20} /> Antrenament Rapid
        </h3>
        
        <AnimatePresence mode="wait">
          {gameState === 'idle' && (
            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-8 text-center">
              <p className="text-indigo-100 mb-6">Câte calcule poți rezolva în 30 de secunde?</p>
              <button onClick={startGame} className="bg-white text-indigo-600 px-8 py-3 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
                <Play size={20} /> Start Joc
              </button>
            </motion.div>
          )}

          {gameState === 'playing' && (
            <motion.div key="playing" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="py-4">
              <div className="flex justify-between mb-8">
                <div className="bg-white/20 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                  <Timer size={14} /> {timeLeft}s
                </div>
                <div className="bg-white/20 px-4 py-1 rounded-full text-sm font-bold">
                  Scor: {score}
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="text-5xl font-black mb-6 tracking-tighter">
                  {question.a} {question.op === '*' ? '×' : question.op} {question.b} = ?
                </div>
                <input 
                  type="number"
                  autoFocus
                  value={input}
                  onChange={(e) => checkAnswer(e.target.value)}
                  className="w-32 bg-white/10 border-2 border-white/30 rounded-2xl px-4 py-3 text-3xl font-bold text-center focus:outline-none focus:border-white transition-all"
                />
              </div>
            </motion.div>
          )}

          {gameState === 'finished' && (
            <motion.div key="finished" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-8 text-center">
              <h4 className="text-2xl font-bold mb-2">Timpul a expirat!</h4>
              <div className="text-5xl font-black mb-6">{score} pct</div>
              <button onClick={startGame} className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-2xl font-bold transition-all flex items-center gap-2 mx-auto">
                <RotateCcw size={20} /> Încearcă din nou
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
