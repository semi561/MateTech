import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ChevronRight, GraduationCap, Menu, X, Calculator, Info, Search, Sun, Moon, Star } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { CURRICULUM } from './constants';
import { Grade, Topic, Lesson } from './types';
import { AIAssistant } from './components/AIAssistant';
import { PracticeSection } from './components/PracticeSection';
import { FormulaSheet } from './components/FormulaSheet';
import { StudyTimer } from './components/StudyTimer';
import { NotesSection } from './components/NotesSection';
import { ProgressTracker } from './components/ProgressTracker';
import { Glossary } from './components/Glossary';
import { BacSimulator } from './components/BacSimulator';
import { cn } from './lib/utils';

type View = 'curriculum' | 'formulas' | 'simulator' | 'dashboard' | 'glossary';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('curriculum');
  const [selectedGrade, setSelectedGrade] = useState<Grade>(9);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showAI, setShowAI] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const grades: Grade[] = [9, 10, 11, 12];

  const handleGradeChange = (grade: Grade) => {
    setSelectedGrade(grade);
    setSelectedTopic(null);
    setSelectedLesson(null);
  };

  return (
    <div className={cn("min-h-screen font-sans flex flex-col transition-colors duration-300", isDarkMode ? "bg-zinc-950 text-zinc-100" : "bg-[#F8F9FA] text-zinc-900")}>
      {/* Header */}
      <header className={cn("h-16 border-b sticky top-0 z-50 px-4 flex items-center justify-between transition-colors", isDarkMode ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200")}>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-zinc-100 rounded-lg lg:hidden"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentView('curriculum')}>
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
              <Calculator size={24} />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-none">MateTech</h1>
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Profil Tehnologic</p>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 p-1 rounded-xl">
          <button onClick={() => setCurrentView('curriculum')} className={cn("px-4 py-1.5 rounded-lg text-sm font-medium transition-all", currentView === 'curriculum' ? "bg-white dark:bg-zinc-700 text-indigo-600 shadow-sm" : "text-zinc-500 hover:text-zinc-800")}>Lecții</button>
          <button onClick={() => setCurrentView('formulas')} className={cn("px-4 py-1.5 rounded-lg text-sm font-medium transition-all", currentView === 'formulas' ? "bg-white dark:bg-zinc-700 text-indigo-600 shadow-sm" : "text-zinc-500 hover:text-zinc-800")}>Formule</button>
          <button onClick={() => setCurrentView('simulator')} className={cn("px-4 py-1.5 rounded-lg text-sm font-medium transition-all", currentView === 'simulator' ? "bg-white dark:bg-zinc-700 text-indigo-600 shadow-sm" : "text-zinc-500 hover:text-zinc-800")}>Simulare</button>
          <button onClick={() => setCurrentView('glossary')} className={cn("px-4 py-1.5 rounded-lg text-sm font-medium transition-all", currentView === 'glossary' ? "bg-white dark:bg-zinc-700 text-indigo-600 shadow-sm" : "text-zinc-500 hover:text-zinc-800")}>Glosar</button>
          <button onClick={() => setCurrentView('dashboard')} className={cn("px-4 py-1.5 rounded-lg text-sm font-medium transition-all", currentView === 'dashboard' ? "bg-white dark:bg-zinc-700 text-indigo-600 shadow-sm" : "text-zinc-500 hover:text-zinc-800")}>Progres</button>
        </nav>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setShowAI(!showAI)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all",
              showAI ? "bg-indigo-600 text-white" : "bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50"
            )}
          >
            <GraduationCap size={18} />
            <span className="hidden sm:inline">Asistent AI</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <aside className={cn(
          "fixed inset-y-0 left-0 z-40 w-72 border-r transform transition-transform duration-300 lg:relative lg:translate-x-0",
          isDarkMode ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="h-full flex flex-col">
            <div className="p-4 border-b border-zinc-100 dark:border-zinc-800">
              <div className="flex gap-2 mb-4">
                {grades.map((grade) => (
                  <button
                    key={grade}
                    onClick={() => handleGradeChange(grade)}
                    className={cn(
                      "flex-1 py-1.5 rounded-lg text-xs font-bold transition-all",
                      selectedGrade === grade 
                        ? "bg-indigo-600 text-white" 
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
                    )}
                  >
                    {grade}
                  </button>
                ))}
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Caută lecție..." 
                  className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {CURRICULUM[selectedGrade].map((topic) => (
                <div key={topic.id} className="space-y-2">
                  <h3 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest px-2">
                    {topic.title}
                  </h3>
                  <div className="space-y-1">
                    {topic.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          setCurrentView('curriculum');
                          setSelectedTopic(topic);
                          setSelectedLesson(lesson);
                          if (window.innerWidth < 1024) setIsSidebarOpen(false);
                        }}
                        className={cn(
                          "w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all flex items-center justify-between group",
                          selectedLesson?.id === lesson.id && currentView === 'curriculum'
                            ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 font-medium"
                            : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200"
                        )}
                      >
                        <span className="truncate">{lesson.title}</span>
                        <ChevronRight size={14} className={cn(
                          "shrink-0 transition-transform",
                          selectedLesson?.id === lesson.id ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        )} />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {currentView === 'formulas' ? (
                <motion.div key="formulas" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <h2 className="text-3xl font-bold mb-6">Breviar de Formule</h2>
                  <FormulaSheet />
                </motion.div>
              ) : currentView === 'simulator' ? (
                <motion.div key="simulator" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <h2 className="text-3xl font-bold mb-6">Simulare BAC</h2>
                  <BacSimulator />
                </motion.div>
              ) : currentView === 'glossary' ? (
                <motion.div key="glossary" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <h2 className="text-3xl font-bold mb-6">Glosar de Termeni</h2>
                  <Glossary />
                </motion.div>
              ) : currentView === 'dashboard' ? (
                <motion.div key="dashboard" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                  <h2 className="text-3xl font-bold mb-6">Progresul Meu</h2>
                  <ProgressTracker />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <StudyTimer />
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Star className="text-amber-500" size={20} />
                        Provocarea Zilei
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Rezolvă o problemă de logică pentru a-ți menține mintea antrenată!</p>
                      <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-2xl mb-4 text-sm italic">
                        "Dacă toți A sunt B și unii B sunt C, rezultă obligatoriu că unii A sunt C?"
                      </div>
                      <button className="w-full py-2 bg-zinc-900 dark:bg-zinc-700 text-white rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors">
                        Vezi Răspunsul
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : selectedLesson ? (
                <motion.div
                  key={selectedLesson.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
                    <div className="p-6 lg:p-10">
                      <div className="flex items-center gap-2 text-indigo-600 mb-4">
                        <BookOpen size={20} />
                        <span className="text-sm font-semibold uppercase tracking-wider">Lecție • Clasa {selectedGrade}-a</span>
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight text-zinc-900 dark:text-zinc-100">
                        {selectedLesson.title}
                      </h2>
                      <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-li:text-zinc-600 dark:prose-li:text-zinc-400">
                        <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{selectedLesson.content}</Markdown>
                      </div>

                      {selectedLesson.problems && selectedLesson.problems.length > 0 && (
                        <div className="mt-12">
                          <PracticeSection problems={selectedLesson.problems} />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <NotesSection lessonId={selectedLesson.id} />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-[60vh] flex flex-col items-center justify-center text-center px-4"
                >
                  <div className="w-20 h-20 bg-white dark:bg-zinc-900 rounded-3xl flex items-center justify-center text-zinc-300 border border-zinc-200 dark:border-zinc-800 shadow-sm mb-6">
                    <BookOpen size={40} />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Bun venit la MateTech</h2>
                  <p className="text-zinc-500 max-w-md mx-auto">
                    Selectează o lecție din meniul lateral pentru a începe studiul. 
                    Avem tot curriculum-ul pentru profilul tehnologic, clasele 9-12.
                  </p>
                  
                  <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {grades.map(g => (
                      <button 
                        key={g}
                        onClick={() => handleGradeChange(g)}
                        className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-2xl hover:border-indigo-500 hover:text-indigo-600 transition-all group"
                      >
                        <span className="block text-xs font-bold text-zinc-400 group-hover:text-indigo-400 uppercase mb-1">Clasa</span>
                        <span className="text-xl font-bold">{g}-a</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

        {/* AI Assistant Overlay */}
        <AnimatePresence>
          {showAI && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowAI(false)}
                className="fixed inset-0 bg-zinc-900/20 backdrop-blur-sm z-[60]"
              />
              <motion.div
                initial={{ opacity: 0, x: 400 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 400 }}
                className="fixed top-4 right-4 bottom-4 w-full max-w-md z-[70] flex flex-col"
              >
                <div className="flex justify-end mb-2">
                  <button 
                    onClick={() => setShowAI(false)}
                    className="bg-white p-2 rounded-full shadow-lg border border-zinc-200 text-zinc-500 hover:text-zinc-900"
                  >
                    <X size={20} />
                  </button>
                </div>
                <AIAssistant />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-200 p-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">© 2024 MateTech - Platformă educațională pentru profil tehnologic.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-zinc-400 hover:text-zinc-600">Termeni</a>
            <a href="#" className="text-xs text-zinc-400 hover:text-zinc-600">Confidențialitate</a>
            <a href="#" className="text-xs text-zinc-400 hover:text-zinc-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
