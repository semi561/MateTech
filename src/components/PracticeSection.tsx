import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { Problem } from '../types';
import { cn } from '../lib/utils';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface PracticeSectionProps {
  problems: Problem[];
}

export const PracticeSection: React.FC<PracticeSectionProps> = ({ problems }) => {
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentProblem = problems[currentProblemIndex];

  const handleOptionSelect = (index: number) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (selectedOption === currentProblem.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentProblemIndex < problems.length - 1) {
      setCurrentProblemIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentProblemIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center">
        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Felicitări!</h3>
        <p className="text-zinc-500 dark:text-zinc-400 mb-6">Ai terminat setul de exerciții.</p>
        <div className="text-4xl font-black text-indigo-600 mb-8">
          {score} / {problems.length}
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all mx-auto"
        >
          <RotateCcw size={18} />
          Încearcă din nou
        </button>
      </div>
    );
  }

  return (
    <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="p-4 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HelpCircle className="text-indigo-600" size={20} />
          <span className="font-bold text-zinc-800 dark:text-zinc-200">Exercițiu interactiv</span>
        </div>
        <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
          Problema {currentProblemIndex + 1} din {problems.length}
        </span>
      </div>

      <div className="p-6">
        <div className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-6">
          <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{currentProblem.question}</Markdown>
        </div>

        <div className="space-y-3">
          {currentProblem.options.map((option, index) => {
            const isCorrect = index === currentProblem.correctAnswer;
            const isSelected = index === selectedOption;
            
            let variantClass = "border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:border-indigo-300 dark:hover:border-indigo-500 text-zinc-800 dark:text-zinc-200";
            if (isSubmitted) {
              if (isCorrect) variantClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400";
              else if (isSelected) variantClass = "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400";
              else variantClass = "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 opacity-50";
            } else if (isSelected) {
              variantClass = "border-indigo-600 dark:border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 shadow-sm shadow-indigo-100 dark:shadow-none";
            }

            return (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                disabled={isSubmitted}
                className={cn(
                  "w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between group",
                  variantClass
                )}
              >
                <div className="flex items-center gap-3">
                  <span className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0",
                    isSelected ? "bg-indigo-600 text-white" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 group-hover:text-indigo-600"
                  )}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{option}</Markdown>
                </div>
                {isSubmitted && isCorrect && <CheckCircle2 className="text-emerald-500" size={20} />}
                {isSubmitted && isSelected && !isCorrect && <XCircle className="text-red-500" size={20} />}
              </button>
            );
          })}
        </div>

        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "mt-6 p-4 rounded-xl border",
              selectedOption === currentProblem.correctAnswer 
                ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300" 
                : "bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-800 text-red-800 dark:text-red-300"
            )}
          >
            <p className="font-bold mb-1">
              {selectedOption === currentProblem.correctAnswer ? "Corect!" : "Incorect!"}
            </p>
            <div className="text-sm opacity-90">
              <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{currentProblem.explanation}</Markdown>
            </div>
          </motion.div>
        )}

        <div className="mt-8 flex justify-end">
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={selectedOption === null}
              className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 disabled:opacity-50 transition-all shadow-lg shadow-indigo-200"
            >
              Verifică răspunsul
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-2.5 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-all"
            >
              {currentProblemIndex < problems.length - 1 ? "Următoarea problemă" : "Vezi rezultatele"}
              <ArrowRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
