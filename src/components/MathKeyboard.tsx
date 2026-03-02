import React from 'react';
import { cn } from '../lib/utils';

interface MathKeyboardProps {
  onInsert: (symbol: string) => void;
  className?: string;
}

export const MathKeyboard: React.FC<MathKeyboardProps> = ({ onInsert, className }) => {
  const symbols = [
    { label: '√', value: '\\sqrt{}' },
    { label: 'x²', value: '^2' },
    { label: 'xⁿ', value: '^{}' },
    { label: 'log', value: '\\log_{}' },
    { label: 'ln', value: '\\ln' },
    { label: 'sin', value: '\\sin' },
    { label: 'cos', value: '\\cos' },
    { label: 'tan', value: '\\tan' },
    { label: 'π', value: '\\pi' },
    { label: 'θ', value: '\\theta' },
    { label: 'α', value: '\\alpha' },
    { label: 'β', value: '\\beta' },
    { label: 'Δ', value: '\\Delta' },
    { label: 'Σ', value: '\\sum' },
    { label: '∫', value: '\\int' },
    { label: '∞', value: '\\infty' },
    { label: '±', value: '\\pm' },
    { label: '≠', value: '\\neq' },
    { label: '≤', value: '\\le' },
    { label: '≥', value: '\\ge' },
    { label: '∈', value: '\\in' },
    { label: '⊂', value: '\\subset' },
    { label: '∪', value: '\\cup' },
    { label: '∩', value: '\\cap' },
  ];

  return (
    <div className={cn("grid grid-cols-6 sm:grid-cols-8 gap-1.5 p-2 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700", className)}>
      {symbols.map((symbol) => (
        <button
          key={symbol.label}
          onClick={() => onInsert(symbol.value)}
          className="h-10 flex items-center justify-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm font-medium hover:border-indigo-500 hover:text-indigo-600 transition-all shadow-sm"
        >
          {symbol.label}
        </button>
      ))}
    </div>
  );
};
