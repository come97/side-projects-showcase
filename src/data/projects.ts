export interface Project {
  id: string
  name: string
  description: string
  stack: string[]
  demoUrl: string
  githubUrl?: string
  mockupType: 'budget' | 'booking' | 'names' | 'poker'
}

export const projects: Project[] = [
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
