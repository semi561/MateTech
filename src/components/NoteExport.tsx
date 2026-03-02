import React from 'react';
import { Download, FileText, Share2 } from 'lucide-react';

export function NoteExport({ lessonTitle, content }: { lessonTitle: string, content: string }) {
  const exportToTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([`MateTech - Note: ${lessonTitle}\n\n${content}`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `Note_${lessonTitle.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="flex gap-2">
      <button 
        onClick={exportToTxt}
        className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-lg text-xs font-bold transition-colors"
      >
        <Download size={14} />
        Exportă TXT
      </button>
      <button className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-lg text-xs font-bold transition-colors">
        <Share2 size={14} />
        Partajează
      </button>
    </div>
  );
}
