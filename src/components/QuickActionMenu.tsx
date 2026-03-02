import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, MessageSquare, Timer, PenLine, Sparkles, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface QuickActionMenuProps {
  onAction: (action: string) => void;
}

export const QuickActionMenu: React.FC<QuickActionMenuProps> = ({ onAction }) => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { id: 'ai', icon: Sparkles, label: 'Asistent AI', color: 'bg-indigo-600' },
    { id: 'chat', icon: MessageSquare, label: 'Chat Global', color: 'bg-blue-600' },
    { id: 'timer', icon: Timer, label: 'Pomodoro', color: 'bg-rose-600' },
    { id: 'notes', icon: PenLine, label: 'Notițe', color: 'bg-amber-600' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-16 right-0 flex flex-col gap-3 items-end">
            {actions.map((action, i) => (
              <motion.button
                key={action.id}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => {
                  onAction(action.id);
                  setIsOpen(false);
                }}
                className="flex items-center gap-3 group"
              >
                <span className="px-3 py-1.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {action.label}
                </span>
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-xl transition-transform hover:scale-110 active:scale-95",
                  action.color
                )}>
                  <action.icon size={20} />
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform",
          isOpen ? "bg-zinc-900 rotate-45" : "bg-indigo-600 hover:scale-110 active:scale-95"
        )}
      >
        {isOpen ? <X size={24} /> : <Plus size={24} />}
      </button>
    </div>
  );
};
