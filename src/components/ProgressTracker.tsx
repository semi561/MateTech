import React from 'react';
import { Trophy, Target, BookOpen, Star, TrendingUp } from 'lucide-react';
import { cn } from '../lib/utils';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Lun', score: 40 },
  { name: 'Mar', score: 30 },
  { name: 'Mie', score: 65 },
  { name: 'Joi', score: 45 },
  { name: 'Vin', score: 90 },
  { name: 'Sâm', score: 70 },
  { name: 'Dum', score: 85 },
];

export const ProgressTracker: React.FC = () => {
  const stats = [
    { label: 'Lecții Parcurse', value: '12', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { label: 'Scor Mediu', value: '85%', icon: Target, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
    { label: 'Zile Consecutive', value: '5', icon: Star, color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-900/20' },
    { label: 'Realizări', value: '3', icon: Trophy, color: 'text-indigo-600', bg: 'bg-indigo-50 dark:bg-indigo-900/20' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-white dark:bg-zinc-900 p-5 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-3", s.bg, s.color)}>
              <s.icon size={20} />
            </div>
            <div className="text-2xl font-black text-zinc-900 dark:text-zinc-100">{s.value}</div>
            <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <TrendingUp className="text-indigo-600" size={20} />
            Activitate Săptămânală
          </h3>
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Scor Mediu</span>
        </div>
        
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#9ca3af' }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#9ca3af' }}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '16px', 
                  border: 'none', 
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                  backgroundColor: '#18181b',
                  color: '#fff'
                }}
                itemStyle={{ color: '#fff' }}
              />
              <Area 
                type="monotone" 
                dataKey="score" 
                stroke="#4f46e5" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorScore)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
