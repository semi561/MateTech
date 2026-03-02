import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Send, Loader2, BookOpen, PenTool, Lightbulb, ChevronRight, Lock } from 'lucide-react';
import Markdown from 'react-markdown';
import { cn } from '../lib/utils';
import { MathKeyboard } from './MathKeyboard';

export function UltimateMath() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false); // Mock subscription state

  const generateUltimateContent = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Ești un expert în educație matematică pentru profilul tehnologic din România. 
        Utilizatorul a cerut: "${prompt}".
        Creează un plan de lecție complet care să includă:
        1. Titlu și Obiective
        2. Explicație teoretică detaliată folosind limbaj matematic simplu, fără simboluri speciale precum $ sau LaTeX. Folosește notații precum x^2, sqrt(x), a/b.
        3. 3 Exemple rezolvate pas cu pas.
        4. Un set de 5 exerciții propuse cu grade diferite de dificultate.
        
        Folosește formatare Markdown.
        Răspunde în limba română.`,
      });

      setResult(response.text || "Nu am putut genera conținutul. Te rugăm să încerci din nou.");
    } catch (error) {
      console.error("Error generating ultimate content:", error);
      setResult("A apărut o eroare la conectarea cu serverul AI.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isSubscribed) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-4">
        <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-600 rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-orange-200 dark:shadow-none mb-8 animate-pulse">
          <Sparkles size={40} />
        </div>
        <h2 className="text-4xl font-black text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight">Ultimate Math</h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-md mb-10 text-lg">
          Deblochează puterea inteligenței artificiale generative pentru a crea planuri de studiu personalizate, exerciții nelimitate și explicații instantanee pentru orice problemă.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-3xl">
          {[
            { icon: BookOpen, title: "Lecții Custom", desc: "Planuri de lecție create special pentru nivelul tău." },
            { icon: PenTool, title: "Exerciții Infinite", desc: "Generăm probleme noi de fiecare dată când ai nevoie." },
            { icon: Lightbulb, title: "Rezolvări Pas-cu-Pas", desc: "Înțelege logica din spatele fiecărei formule." }
          ].map((feature, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
              <feature.icon className="text-orange-500 mb-3" size={24} />
              <h4 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">{feature.title}</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        <button 
          onClick={() => setIsSubscribed(true)}
          className="group relative px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all flex items-center gap-3 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative z-10 flex items-center gap-2">
            Activează Ultimate Math <ChevronRight size={20} />
          </span>
        </button>
        <p className="mt-4 text-xs text-zinc-400 font-medium uppercase tracking-widest">Doar 19.99 RON / lună</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
            <Sparkles size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight">Ultimate Math</h2>
            <p className="text-xs text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wider">Plan Premium Activ</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Ce vrei să învățăm astăzi?</h3>
        <p className="text-zinc-500 dark:text-zinc-400 mb-6">Introdu un subiect, o problemă sau o temă pe care vrei să o aprofundezi. Voi crea tot materialul necesar pentru tine.</p>
        
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && generateUltimateContent()}
              placeholder="Ex: Explică-mi derivatele de ordinul 2 și dă-mi 5 exerciții..."
              className="flex-1 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-zinc-900 dark:text-zinc-100"
            />
            <button 
              onClick={generateUltimateContent}
              disabled={isLoading || !prompt.trim()}
              className="bg-orange-600 hover:bg-orange-700 disabled:bg-zinc-300 text-white px-8 rounded-2xl font-bold transition-all flex items-center gap-2"
            >
              {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
              Generează
            </button>
          </div>
          <MathKeyboard onInsert={(symbol) => setPrompt(prev => prev + symbol)} />
        </div>
      </div>

      {result && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
        >
          <div className="prose dark:prose-invert max-w-none markdown-body">
            <Markdown>
              {result}
            </Markdown>
          </div>
        </motion.div>
      )}
    </div>
  );
}
