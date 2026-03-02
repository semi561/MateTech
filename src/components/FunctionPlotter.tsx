import React, { useState, useEffect, useRef } from 'react';
import { Activity, Trash2, RefreshCcw } from 'lucide-react';

export function FunctionPlotter() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [expression, setExpression] = useState('Math.sin(x)');
  const [range, setRange] = useState({ min: -10, max: 10 });

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const scale = width / (range.max - range.min);

    ctx.clearRect(0, 0, width, height);

    // Draw Axes
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, centerY); ctx.lineTo(width, centerY);
    ctx.moveTo(centerX, 0); ctx.lineTo(centerX, height);
    ctx.stroke();

    // Draw Function
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2;
    ctx.beginPath();

    let first = true;
    for (let px = 0; px < width; px++) {
      const x = (px - centerX) / scale;
      try {
        // Safe eval-ish for simple math
        const y = eval(expression.replace(/x/g, `(${x})`));
        const py = centerY - y * scale;

        if (first) {
          ctx.moveTo(px, py);
          first = false;
        } else {
          ctx.lineTo(px, py);
        }
      } catch (e) {}
    }
    ctx.stroke();
  };

  useEffect(() => {
    draw();
  }, [expression, range]);

  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          <Activity className="text-indigo-500" size={20} />
          Vizualizator Funcții
        </h3>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 font-mono">f(x) =</span>
          <input 
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl pl-16 pr-4 py-3 font-mono text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-zinc-900 dark:text-zinc-100"
            placeholder="x * x"
          />
        </div>

        <canvas 
          ref={canvasRef} 
          width={400} 
          height={300} 
          className="w-full bg-zinc-50 dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700/50"
        />

        <div className="flex gap-2 text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
          <span>Exemple: Math.sin(x), x*x, Math.sqrt(x), 1/x</span>
        </div>
      </div>
    </div>
  );
}
