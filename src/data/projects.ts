export interface Project {
  id: string
  name: string
  description: string
  stack: string[]
  demoUrl: string
  githubUrl?: string
  mockupType: 'todo' | 'budget' | 'booking' | 'names' | 'poker' | 'foodJournal' | 'ytSummarizer'
}

export const projects: Project[] = [
  {
    id: 'foodJournal',
    name: 'Food journal',
    description: 'PWA carnet alimentaire & symptômes — saisie repas en texte ou photo + IA Claude, log symptômes en 2 taps, mode offline avec sync queue, export ZIP pour analyse LLM.',
    stack: ['React 19', 'Vite', 'Supabase', 'Anthropic', 'PWA'],
    demoUrl: 'https://food-journal-demo.vercel.app/',
    mockupType: 'foodJournal',
  },
  {
    id: 'ytSummarizer',
    name: 'YT Summarizer',
    description: 'Colle une URL YouTube — Claude transcrit (Supadata), structure les idées clés, envoie le résumé par mail. Cron quotidien sur les chaînes suivies.',
    stack: ['Next.js', 'Anthropic', 'Supabase', 'Supadata', 'Nodemailer'],
    demoUrl: 'https://yt-summarizer-demo.vercel.app/',
    mockupType: 'ytSummarizer',
  },
  {
    id: 'todo',
    name: 'Tâches en duo',
    description: 'To-do list collaborative temps réel — assignation de tâches, catégories dynamiques, drag & drop, notifications email automatiques.',
    stack: ['Next.js', 'Supabase', 'Tailwind', 'Framer Motion'],
    demoUrl: 'https://family-todo-demo.vercel.app/',
    mockupType: 'todo',
  },
  {
    id: 'budget',
    name: 'Smart Budget',
    description: 'Suivi des dépenses personnelles - import CSV bancaire, catégorisation automatique, budgets mensuels.',
    stack: ['React', 'Vite', 'Zustand', 'IndexedDB'],
    demoUrl: 'https://finance-playground-liart.vercel.app/',
    mockupType: 'budget',
  },
  {
    id: 'booking',
    name: 'Réservation maisons',
    description: 'Calendrier partagé pour gérer les disponibilités de deux maisons — anti-conflits, rôles différenciés.',
    stack: ['Next.js', 'PostgreSQL', 'Supabase'],
    demoUrl: 'https://maison-booking-demo.vercel.app/',
    mockupType: 'booking',
  },
  {
    id: 'names',
    name: 'Fréquence prénoms',
    description: "Exploration des tendances de prénoms en France depuis 1900 — données INSEE, vues partageables.",
    stack: ['Next.js', 'Recharts', 'Turso', 'Drizzle'],
    demoUrl: 'https://find-names-by91.vercel.app/',
    mockupType: 'names',
  },
  {
    id: 'poker',
    name: 'Poker trainer',
    description: "Entraînement aux décisions en Texas Hold'em - scénarios de mains, suivi de progression.",
    stack: ['React', 'TypeScript'],
    demoUrl: 'https://poker-learn.vercel.app/',
    mockupType: 'poker',
  },
]
