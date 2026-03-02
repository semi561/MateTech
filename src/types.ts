export type Grade = 9 | 10 | 11 | 12;

export interface Problem {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index of the correct option
  explanation: string;
}

export interface UserProgress {
  completedLessons: string[];
  quizScores: { [lessonId: string]: number };
  dailyChallengeDone: string | null; // date string
}

export interface Note {
  id: string;
  lessonId: string;
  content: string;
  updatedAt: number;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  problems?: Problem[];
}

export interface Topic {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Curriculum {
  [key: number]: Topic[];
}
