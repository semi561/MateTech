import React, { useState } from 'react';
import { ClipboardCheck, AlertCircle, CheckCircle2 } from 'lucide-react';

export const BacSimulator: React.FC = () => {
  const [started, setStarted] = useState(false);

  return (
    <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm text-center">
      {!started ? (
        <>
          <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ClipboardCheck size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">Simulare Examen BAC</h3>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-md mx-auto">
            Ești gata să îți testezi cunoștințele? Vom genera un test cu 10 întrebări din toată materia de profil tehnologic.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-100 dark:border-zinc-700">
              <div className="text-xs font-bold text-zinc-400 uppercase mb-1">Timp</div>
              <div className="font-bold">30 Minute</div>
            </div>
            <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-100 dark:border-zinc-700">
              <div className="text-xs font-bold text-zinc-400 uppercase mb-1">Întrebări</div>
              <div className="font-bold">10 Grilă</div>
            </div>
            <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-100 dark:border-zinc-700">
              <div className="text-xs font-bold text-zinc-400 uppercase mb-1">Dificultate</div>
              <div className="font-bold">Medie</div>
            </div>
          </div>
          <button 
            onClick={() => setStarted(true)}
            className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none"
          >
            Începe Simularea
          </button>
        </>
      ) : (
        <div className="py-12">
          <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h4 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">Modul în Construcție</h4>
          <p className="text-zinc-500 dark:text-zinc-400">Lucrăm la generarea automată a subiectelor. Revino curând!</p>
          <button onClick={() => setStarted(false)} className="mt-6 text-indigo-600 font-medium">Înapoi</button>
        </div>
      )}
    </div>
  );
};
