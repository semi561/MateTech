import React, { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { Send, Users, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';

export function GlobalChat() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [userCount, setUserCount] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newSocket = io();
    setSocket(newSocket);

    newSocket.on('connect', () => {
      newSocket.emit('join', `Elev_${Math.floor(Math.random() * 1000)}`);
    });

    newSocket.on('init_messages', (msgs) => setMessages(msgs));
    newSocket.on('new_message', (msg) => setMessages(prev => [...prev, msg]));
    newSocket.on('user_count', (count) => setUserCount(count));

    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() && socket) {
      socket.emit('send_message', input);
      setInput('');
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl flex flex-col h-[500px] overflow-hidden">
      <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-800/50">
        <div className="flex items-center gap-2">
          <MessageSquare size={20} className="text-indigo-500" />
          <h3 className="font-bold text-zinc-900 dark:text-zinc-100">Chat Global</h3>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold">
          <Users size={12} />
          {userCount} online
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-xs text-indigo-600 dark:text-indigo-400">{msg.user}</span>
              <span className="text-[10px] text-zinc-400">{msg.timestamp}</span>
            </div>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800 p-2.5 rounded-2xl rounded-tl-none mt-1 border border-zinc-100 dark:border-zinc-700/50">
              {msg.text}
            </p>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Scrie un mesaj..."
          className="flex-1 bg-zinc-100 dark:bg-zinc-800 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-zinc-900 dark:text-zinc-100"
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-xl transition-colors"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
