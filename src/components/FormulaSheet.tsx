import React from 'react';
import { Search, Copy, Check } from 'lucide-react';

const FORMULAS = [
  { category: 'Algebră', title: 'Ecuația de gradul II', formula: 'ax^2 + bx + c = 0 => Delta = b^2 - 4ac, x1,2 = (-b +/- sqrt(Delta)) / 2a' },
  { category: 'Algebră', title: 'Progresii Aritmetice', formula: 'an = a1 + (n-1)r, Sn = (a1 + an) * n / 2' },
  { category: 'Algebră', title: 'Progresii Geometrice', formula: 'bn = b1 * q^(n-1), Sn = b1 * (q^n - 1) / (q - 1)' },
  { category: 'Trigonometrie', title: 'Formula Fundamentală', formula: 'sin^2(x) + cos^2(x) = 1' },
  { category: 'Trigonometrie', title: 'Teorema Sinusurilor', formula: 'a / sin(A) = b / sin(B) = c / sin(C) = 2R' },
  { category: 'Analiză', title: 'Derivate Uzuale', formula: '(x^n)\' = n*x^(n-1), (ln x)\' = 1/x, (e^x)\' = e^x' },
  { category: 'Analiză', title: 'Integrale Uzuale', formula: 'integral(x^n dx) = x^(n+1) / (n+1) + C, integral(1/x dx) = ln|x| + C' },
];

export const FormulaSheet: React.FC = () => {
  const [search, setSearch] = React.useState('');
  const [copied, setCopied] = React.useState<string | null>(null);

  const filtered = FORMULAS.filter(f => 
    f.title.toLowerCase().includes(search.toLowerCase()) || 
    f.category.toLowerCase().includes(search.toLowerCase())
  );

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
        <input 
          type="text" 
          placeholder="Caută o formulă..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white border border-zinc-200 rounded-2xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((f, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm hover:border-indigo-200 transition-all group">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded-full">
                  {f.category}
                </span>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-100 mt-1">{f.title}</h4>
              </div>
              <button 
                onClick={() => copyToClipboard(f.formula)}
                className="p-2 text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
              >
                {copied === f.formula ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-xl font-mono text-sm text-zinc-700 dark:text-zinc-300 overflow-x-auto">
              {f.formula}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
