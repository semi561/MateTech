import React, { useState } from 'react';
import { Calendar, CheckCircle2, Circle, Plus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface Task {
  id: string;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

export const StudyPlanner: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Rezolvă 10 probleme cu logaritmi', completed: false, priority: 'high' },
    { id: '2', text: 'Recapitulează funcția de gradul II', completed: true, priority: 'medium' },
    { id: '3', text: 'Învață formulele de trigonometrie', completed: false, priority: 'high' },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask.trim()) return;
    const task: Task = {
      id: Date.now().toString(),
      text: newTask,
      completed: false,
      priority: 'medium',
    };
    setTasks([task, ...tasks]);
    setNewTask('');
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <Calendar className="text-indigo-500" size={20} />
          Planificator Studiu
        </h3>
        <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
          {tasks.filter(t => t.completed).length}/{tasks.length} Finalizate
        </span>
      </div>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Adaugă un obiectiv de studiu..."
          className="flex-1 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
        <button
          onClick={addTask}
          className="p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
        >
          <Plus size={20} />
        </button>
      </div>

      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className={cn(
                "flex items-center gap-3 p-3 rounded-2xl border transition-all",
                task.completed 
                  ? "bg-zinc-50 dark:bg-zinc-800/50 border-transparent opacity-60" 
                  : "bg-white dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800 shadow-sm"
              )}
            >
              <button
                onClick={() => toggleTask(task.id)}
                className={cn(
                  "transition-colors",
                  task.completed ? "text-emerald-500" : "text-zinc-300 hover:text-indigo-500"
                )}
              >
                {task.completed ? <CheckCircle2 size={20} /> : <Circle size={20} />}
              </button>
              <span className={cn(
                "flex-1 text-sm font-medium",
                task.completed && "line-through text-zinc-400"
              )}>
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-zinc-300 hover:text-rose-500 transition-colors p-1"
              >
                <Trash2 size={16} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
