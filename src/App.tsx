import { projects } from './data/projects'
import ProjectCard from './components/ProjectCard'
import budgetImg from './assets/budget.png'
import bookingImg from './assets/booking.png'
import namesImg from './assets/names.png'
import pokerImg from './assets/poker.png'
import todoImg from './assets/todo.png'
import foodJournalImg from './assets/food-journal.png'
import ytSummarizerImg from './assets/yt-summarizer.png'

const images: Record<string, string> = {
  todo: todoImg,
  budget: budgetImg,
  booking: bookingImg,
  names: namesImg,
  poker: pokerImg,
  foodJournal: foodJournalImg,
  ytSummarizer: ytSummarizerImg,
}

const ArrowIcon = () => (
  <svg
    className="inline ml-0.5 -mt-0.5"
    width="10"
    height="10"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5 2h6.5v6.5M9.5 2.5L2 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="max-w-3xl mx-auto px-8 pt-10 pb-8">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Côme
        </h1>
        <p className="text-slate-500">
          Data Analyst · Analytics Engineer · Builder
        </p>
        <p className="text-sm text-slate-400 mt-1">
          Data Analyst chez NielsenIQ. Je construis des outils pour les problèmes que je rencontre au quotidien.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/come-lescure/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-600 hover:text-indigo-700"
          >
            LinkedIn <ArrowIcon />
          </a>
        </div>
      </header>

      {/* Projects */}
      <main className="max-w-3xl mx-auto px-8">
        <p className="text-xs uppercase tracking-widest text-slate-400 mb-4">
          Projets
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} image={images[project.mockupType]} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-slate-300 py-8">
        côme · paris · 2026
      </footer>
    </div>
  )
}
