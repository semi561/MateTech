import React, { useState } from 'react';
import { Search } from 'lucide-react';

const TERMS = [
  { term: 'Asimptotă', definition: 'O dreaptă de care graficul unei funcții se apropie oricât de mult fără a o atinge.' },
  { term: 'Bijectivă', definition: 'O funcție care este și injectivă și surjectivă.' },
  { term: 'Codomeniu', definition: 'Mulțimea în care funcția ia valori.' },
  { term: 'Determinant', definition: 'O valoare numerică asociată unei matrice pătratice.' },
  { term: 'Domeniu de definiție', definition: 'Mulțimea pe care este definită o funcție.' },
  { term: 'Injectivă', definition: 'O funcție care asociază elemente diferite din domeniu cu elemente diferite din codomeniu.' },
  { term: 'Integrală', definition: 'Operația inversă derivării, reprezentând adesea aria de sub graficul unei funcții.' },
  { term: 'Matrice', definition: 'Un tabel dreptunghiular de numere organizate pe linii și coloane.' },
  { term: 'Primitivă', definition: 'O funcție a cărei derivată este egală cu funcția dată.' },
  { term: 'Surjectivă', definition: 'O funcție în care fiecare element din codomeniu este imaginea a cel puțin unui element din domeniu.' },
];

export const Glossary: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = TERMS.filter(t => 
    t.term.toLowerCase().includes(search.toLowerCase()) || 
    t.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
        <input 
          type="text" 
          placeholder="Caută un termen..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-sm"
        />
      </div>

      <div className="space-y-3">
        {filtered.map((t, i) => (
          <div key={i} className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h4 className="font-bold text-indigo-600 mb-1">{t.term}</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{t.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
