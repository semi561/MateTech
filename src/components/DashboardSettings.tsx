import React from 'react';
import { Palette, Download, Upload, Trash2 } from 'lucide-react';
import { cn } from '../lib/utils';

export const DashboardSettings: React.FC = () => {
  const themes = [
    { name: 'Modern', class: 'bg-indigo-600' },
    { name: 'Emerald', class: 'bg-emerald-600' },
    { name: 'Rose', class: 'bg-rose-600' },
    { name: 'Amber', class: 'bg-amber-600' },
  ];

  const handleExport = () => {
    const data = localStorage.getItem('mate-tech-progress') || '{}';
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mate-tech-backup.json';
    a.click();
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      localStorage.setItem('mate-tech-progress', content);
      window.location.reload();
    };
    reader.readAsText(file);
  };

  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6">
      <div>
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Palette className="text-indigo-600" size={20} />
          Personalizare Aspect
        </h3>
        <div className="flex gap-3">
          {themes.map((t) => (
            <button
              key={t.name}
              className={cn(
                "w-10 h-10 rounded-full border-2 border-white dark:border-zinc-800 shadow-sm transition-transform hover:scale-110",
                t.class
              )}
              title={t.name}
            />
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Download className="text-indigo-600" size={20} />
          Date și Backup
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button 
            onClick={handleExport}
            className="flex items-center justify-center gap-2 py-2.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl text-sm font-bold hover:bg-zinc-200 transition-all"
          >
            <Download size={16} />
            Exportă Date
          </button>
          <label className="flex items-center justify-center gap-2 py-2.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl text-sm font-bold hover:bg-zinc-200 transition-all cursor-pointer">
            <Upload size={16} />
            Importă Date
            <input type="file" className="hidden" onChange={handleImport} accept=".json" />
          </label>
        </div>
        <button className="w-full mt-3 flex items-center justify-center gap-2 py-2.5 text-red-600 dark:text-red-400 rounded-xl text-sm font-bold hover:bg-red-50 dark:hover:bg-red-900/20 transition-all">
          <Trash2 size={16} />
          Șterge tot progresul
        </button>
      </div>
    </div>
  );
};
