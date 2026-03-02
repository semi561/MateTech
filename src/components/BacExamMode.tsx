import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Save, FileText, CheckCircle, AlertCircle, Trophy, ChevronRight, ChevronLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import Markdown from 'react-markdown';

interface ExamQuestion {
  id: string;
  subject: 'I' | 'II' | 'III';
  points: number;
  question: string;
  options?: string[];
  correctAnswer?: number;
  isGrid: boolean;
}

export function BacExamMode() {
  const [examState, setExamState] = useState<'idle' | 'testing' | 'finished'>('idle');
  const [timeLeft, setTimeLeft] = useState(180 * 60); // 3 hours
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState<any[]>([]);

  const questions: ExamQuestion[] = [
    // Subiectul I (30 puncte)
    { id: 's1-1', subject: 'I', points: 5, question: 'Determinați al treilea termen al progresiei aritmetice (a_n), știind că a_1 = 2 și a_2 = 5.', options: ['7', '8', '11', '10'], correctAnswer: 1, isGrid: true },
    { id: 's1-2', subject: 'I', points: 5, question: 'Determinați numărul real m pentru care punctul A(m, 1) aparține graficului funcției f(x) = 2x - 3.', options: ['1', '2', '3', '4'], correctAnswer: 1, isGrid: true },
    { id: 's1-3', subject: 'I', points: 5, question: 'Rezolvați în mulțimea numerelor reale ecuația log_3(x^2 - 8) = 0.', options: ['3', '-3', '3 și -3', '9'], correctAnswer: 2, isGrid: true },
    { id: 's1-4', subject: 'I', points: 5, question: 'Calculați probabilitatea ca, alegând un număr din mulțimea numerelor naturale de două cifre, acesta să fie pătrat perfect.', options: ['6/90', '1/15', '7/90', '1/10'], correctAnswer: 0, isGrid: true },
    { id: 's1-5', subject: 'I', points: 5, question: 'În reperul cartezian xOy se consideră punctele A(1, 1) și B(4, 5). Calculați distanța AB.', options: ['3', '4', '5', '7'], correctAnswer: 2, isGrid: true },
    { id: 's1-6', subject: 'I', points: 5, question: 'Calculați lungimea laturii BC a triunghiului ABC, știind că AB = 6, AC = 10 și unghiul A = 60 grade.', options: ['14', '2*sqrt(19)', '2*sqrt(21)', '10'], correctAnswer: 1, isGrid: true },
    
    // Subiectul II (30 puncte)
    { id: 's2-1', subject: 'II', points: 15, question: 'Se consideră matricea A(x) = [[1, x], [0, 1]]. Arătați că A(x) * A(y) = A(x+y). (Rezolvă pe foaie și bifează dacă ai reușit)', options: ['Am reușit', 'Nu am reușit'], correctAnswer: 0, isGrid: true },
    { id: 's2-2', subject: 'II', points: 15, question: 'Pe mulțimea numerelor reale se definește legea de compoziție x * y = xy - 3x - 3y + 12. Arătați că x * y = (x-3)(y-3) + 3.', options: ['Am reușit', 'Nu am reușit'], correctAnswer: 0, isGrid: true },
    
    // Subiectul III (30 puncte)
    { id: 's3-1', subject: 'III', points: 15, question: 'Se consideră funcția f(x) = x^3 - 3x + 2. Arătați că f\'(x) = 3(x-1)(x+1).', options: ['Am reușit', 'Nu am reușit'], correctAnswer: 0, isGrid: true },
    { id: 's3-2', subject: 'III', points: 15, question: 'Se consideră funcția f(x) = e^x + x. Calculați integrala de la 0 la 1 din f(x) dx.', options: ['e + 1/2', 'e - 1/2', 'e + 1', 'e'], correctAnswer: 1, isGrid: true },
  ];

  useEffect(() => {
    let timer: any;
    if (examState === 'testing' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0 && examState === 'testing') {
      finishExam();
    }
    return () => clearInterval(timer);
  }, [examState, timeLeft]);

  const startExam = () => {
    setExamState('testing');
    setTimeLeft(180 * 60);
    setAnswers({});
    setCurrentQuestionIndex(0);
  };

  const finishExam = () => {
    let totalPoints = 10; // 10 puncte din oficiu
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        totalPoints += q.points;
      }
    });
    
    const finalGrade = totalPoints / 10;
    setScore(finalGrade);
    setExamState('finished');
    
    const result = {
      date: new Date().toLocaleString(),
      grade: finalGrade,
      id: Date.now()
    };
    
    const newHistory = [result, ...history];
    setHistory(newHistory);
    localStorage.setItem('bac_history', JSON.stringify(newHistory));

    if (finalGrade >= 9) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-rose-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
            <FileText size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight uppercase italic">Mod Examen BAC</h2>
            <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Simulare Reală • 3 Ore • Notare 1-10</p>
          </div>
        </div>
        
        {examState === 'testing' && (
          <div className="flex items-center gap-4">
            <div className="bg-rose-50 dark:bg-rose-900/20 px-4 py-2 rounded-xl border border-rose-100 dark:border-rose-800 flex items-center gap-2 text-rose-600 font-black">
              <Clock size={18} />
              {formatTime(timeLeft)}
            </div>
            <button 
              onClick={finishExam}
              className="px-6 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-bold hover:bg-zinc-800 transition-colors"
            >
              Predă Lucrarea
            </button>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {examState === 'idle' && (
          <motion.div 
            key="idle"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white dark:bg-zinc-900 p-12 rounded-[40px] border border-zinc-200 dark:border-zinc-800 shadow-2xl text-center"
          >
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-rose-100 dark:bg-rose-900/30 text-rose-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <AlertCircle size={40} />
              </div>
              <h3 className="text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-4 tracking-tighter">Ești pregătit pentru simulare?</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
                Vei avea la dispoziție 3 ore pentru a rezolva subiectele. 
                Asigură-te că ai foaie și pix la îndemână. 
                Primești 10 puncte din oficiu.
              </p>
              <button 
                onClick={startExam}
                className="w-full py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl font-black text-lg shadow-xl shadow-rose-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Începe Examenul
              </button>
              
              {history.length > 0 && (
                <div className="mt-12 text-left">
                  <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">Istoric Simulări</h4>
                  <div className="space-y-2">
                    {history.slice(0, 3).map((h) => (
                      <div key={h.id} className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-700">
                        <span className="text-xs text-zinc-500">{h.date}</span>
                        <span className={`font-black ${h.grade >= 6 ? 'text-emerald-600' : 'text-rose-600'}`}>Nota: {h.grade.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {examState === 'testing' && (
          <motion.div 
            key="testing"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-8"
          >
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white dark:bg-zinc-900 p-8 lg:p-12 rounded-[40px] border border-zinc-200 dark:border-zinc-800 shadow-xl min-h-[500px] flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <span className="px-3 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Subiectul {questions[currentQuestionIndex].subject}
                  </span>
                  <span className="text-zinc-400 font-bold text-xs">
                    {questions[currentQuestionIndex].points} Puncte
                  </span>
                </div>
                
                <div className="flex-1">
                  <div className="text-xl lg:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-12 leading-relaxed">
                    <Markdown>
                      {questions[currentQuestionIndex].question}
                    </Markdown>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {questions[currentQuestionIndex].options?.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => setAnswers({ ...answers, [questions[currentQuestionIndex].id]: i })}
                        className={`p-5 rounded-2xl text-left border-2 transition-all flex items-center justify-between group ${
                          answers[questions[currentQuestionIndex].id] === i
                            ? 'bg-rose-50 dark:bg-rose-900/20 border-rose-500 text-rose-700 dark:text-rose-400'
                            : 'bg-zinc-50 dark:bg-zinc-800/50 border-zinc-100 dark:border-zinc-700 hover:border-zinc-300'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                            answers[questions[currentQuestionIndex].id] === i
                              ? 'bg-rose-500 text-white'
                              : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-500'
                          }`}>
                            {String.fromCharCode(97 + i)}
                          </div>
                          <Markdown>{opt}</Markdown>
                        </div>
                        {answers[currentQuestionIndex] === i && <CheckCircle size={20} />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <button 
                    disabled={currentQuestionIndex === 0}
                    onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                    className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-zinc-900 disabled:opacity-30"
                  >
                    <ChevronLeft size={20} /> Înapoi
                  </button>
                  
                  <div className="flex gap-2">
                    {questions.map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === currentQuestionIndex ? 'w-6 bg-rose-500' : answers[questions[i].id] !== undefined ? 'bg-rose-200' : 'bg-zinc-200'
                        }`} 
                      />
                    ))}
                  </div>

                  {currentQuestionIndex === questions.length - 1 ? (
                    <button 
                      onClick={finishExam}
                      className="flex items-center gap-2 px-6 py-3 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 transition-all"
                    >
                      Finalizează <Save size={18} />
                    </button>
                  ) : (
                    <button 
                      onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                      className="flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-bold hover:bg-zinc-800 transition-all"
                    >
                      Următoarea <ChevronRight size={20} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">Navigare Subiecte</h4>
                <div className="grid grid-cols-5 gap-2">
                  {questions.map((q, i) => (
                    <button
                      key={q.id}
                      onClick={() => setCurrentQuestionIndex(i)}
                      className={`w-full aspect-square rounded-xl flex items-center justify-center text-xs font-bold transition-all ${
                        i === currentQuestionIndex 
                          ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/20' 
                          : answers[q.id] !== undefined
                            ? 'bg-rose-100 dark:bg-rose-900/30 text-rose-600'
                            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-900 p-6 rounded-3xl text-white">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Punctaj Estimativ</h4>
                <div className="text-4xl font-black mb-2">
                  {(10 + questions.reduce((acc, q) => acc + (answers[q.id] === q.correctAnswer ? q.points : 0), 0)) / 10}
                </div>
                <div className="text-xs text-zinc-400">Nota curentă bazată pe răspunsurile bifate</div>
              </div>
            </div>
          </motion.div>
        )}

        {examState === 'finished' && (
          <motion.div 
            key="finished"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-zinc-900 p-12 rounded-[40px] border border-zinc-200 dark:border-zinc-800 shadow-2xl text-center"
          >
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Trophy size={48} />
              </div>
              <h3 className="text-4xl font-black text-zinc-900 dark:text-zinc-100 mb-2 tracking-tighter">Rezultat Examen</h3>
              <div className="text-7xl font-black text-indigo-600 mb-8 tracking-tighter">
                {score.toFixed(2)}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700">
                  <div className="text-xs text-zinc-400 font-bold uppercase mb-1">Status</div>
                  <div className={`font-bold ${score >= 6 ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {score >= 6 ? 'ADMIS' : 'RESPINS'}
                  </div>
                </div>
                <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700">
                  <div className="text-xs text-zinc-400 font-bold uppercase mb-1">Timp Rămas</div>
                  <div className="font-bold text-zinc-900 dark:text-zinc-100">
                    {formatTime(timeLeft)}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setExamState('idle')}
                className="w-full py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-2xl font-black text-lg transition-all hover:scale-[1.02]"
              >
                Înapoi la Panou
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
