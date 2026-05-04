import { projects } from './data/projects'
import ProjectCard from './components/ProjectCard'
import budgetImg from './assets/budget.png'
import bookingImg from './assets/booking.png'
import namesImg from './assets/names.png'
import pokerImg from './assets/poker.png'
import todoImg from './assets/todo.png'
import foodJournalImg from './assets/food-journal.png'
import ytSummarizerImg from './assets/yt-summarizer.png'
import pdfStudioImg from './assets/pdf-studio.png'
import moleTrackerImg from './assets/moleTracker.png'

const images: Record<string, string> = {
  todo: todoImg,
  budget: budgetImg,
  booking: bookingImg,
  names: namesImg,
  poker: pokerImg,
  foodJournal: foodJournalImg,
  ytSummarizer: ytSummarizerImg,
  pdfStudio: pdfStudioImg,
  moleTracker: moleTrackerImg,
}

const ArrowIcon = ({ className = '' }: { className?: string }) => (
  <svg
    className={`inline-block ${className}`}
    width="11"
    height="11"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M3 2h7v7M9.5 2.5L2 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ISSUE_NUMBER = String(projects.length).padStart(2, '0')

export default function App() {
  return (
    <div className="paper-grain min-h-screen bg-paper text-ink font-sans relative overflow-x-hidden">
      <div className="relative z-10">
        {/* ── Top bar ──────────────────────────────────────────────── */}
        <div className="border-b border-ink/15">
          <div className="max-w-5xl mx-auto px-5 md:px-10 py-3 flex justify-between items-center text-[10px] md:text-[11px] font-mono uppercase tracking-[0.22em] text-ink-soft">
            <span>Atelier&nbsp;·&nbsp;Vol.&nbsp;{ISSUE_NUMBER}&nbsp;/&nbsp;2026</span>
            <span className="hidden sm:flex items-center gap-2">
              <span
                className="w-[7px] h-[7px] rounded-full bg-forest"
                style={{ boxShadow: '0 0 0 3px rgba(61, 90, 64, 0.18)' }}
              />
              <span>En ligne&nbsp;·&nbsp;Paris</span>
            </span>
          </div>
        </div>

        {/* ── Hero / Une ───────────────────────────────────────────── */}
        <header className="max-w-5xl mx-auto px-5 md:px-10 pt-14 md:pt-24 pb-16 md:pb-24">
          <p className="rise font-mono text-[11px] uppercase tracking-[0.28em] text-rust mb-7 md:mb-10">
            № {ISSUE_NUMBER} &nbsp;—&nbsp; Mai 2026
          </p>

          <h1 className="rise font-serif font-light text-[clamp(72px,16vw,200px)] leading-[0.86] tracking-[-0.025em] text-ink">
            Côme<span className="font-serif italic font-normal text-rust">.</span>
            <span
              aria-hidden
              className="cursor-blink inline-block w-[0.08em] h-[0.78em] align-baseline ml-2 bg-ink/80"
            />
          </h1>

          <div className="grid md:grid-cols-12 gap-x-8 gap-y-8 mt-10 md:mt-14">
            <p className="rise md:col-span-7 font-serif text-[26px] md:text-[34px] leading-[1.15] tracking-tight text-ink">
              <span className="italic font-light">Data analyst</span>,
              analytics engineer et bricoleur —{' '}
              <span className="italic font-light">
                je construis de petits outils pour les frictions du quotidien.
              </span>
            </p>

            <div className="rise md:col-span-4 md:col-start-9 md:self-end space-y-5">
              <p className="text-[14px] leading-relaxed text-ink-soft">
                Aujourd'hui chez NielsenIQ. Tous les projets ci-dessous sont
                publics et utilisables.
              </p>

              {/* Outils du quotidien */}
              <div className="space-y-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-rust">
                  Pratique
                </p>
                <p className="font-mono text-[11px] text-ink-soft leading-relaxed">
                  SQL <span className="text-ink-faint/50">·</span> dbt{' '}
                  <span className="text-ink-faint/50">·</span> Python{' '}
                  <span className="text-ink-faint/50">·</span> React{' '}
                  <span className="text-ink-faint/50">·</span> Postgres{' '}
                  <span className="text-ink-faint/50">·</span> Supabase
                </p>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px]">
                <a
                  href="https://www.linkedin.com/in/come-lescure/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono uppercase tracking-[0.2em] text-[11px] link-underline text-ink hover:text-rust transition-colors"
                >
                  LinkedIn <ArrowIcon className="ml-0.5 -mt-px" />
                </a>
                <a
                  href="https://github.com/come97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono uppercase tracking-[0.2em] text-[11px] link-underline text-ink hover:text-rust transition-colors"
                >
                  GitHub <ArrowIcon className="ml-0.5 -mt-px" />
                </a>
                <a
                  href="mailto:comelescure@gmail.com"
                  className="font-mono uppercase tracking-[0.2em] text-[11px] link-underline text-ink hover:text-rust transition-colors"
                >
                  Email <ArrowIcon className="ml-0.5 -mt-px" />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* ── Sommaire ────────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-5 md:px-10 pb-20 md:pb-28">
          <div className="flex items-end justify-between border-b border-ink pb-3 md:pb-4 mb-10 md:mb-14">
            <div className="flex items-baseline gap-4 md:gap-6">
              <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-rust">
                Sommaire
              </span>
              <h2 className="font-serif italic font-light text-[22px] md:text-[28px] tracking-tight text-ink">
                Sélection 2026
              </h2>
            </div>
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-ink-soft text-right">
              {projects.length} projets
              <span className="hidden sm:inline">
                &nbsp;·&nbsp;maj&nbsp;04.05.26
              </span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14 md:gap-y-16">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                image={images[project.mockupType]}
                index={i}
                featured={i === 0}
              />
            ))}

            {/* ── Tuile Contact ─ Le 10e projet ─ */}
            <article className="group relative">
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-forest">
                  ✉ &nbsp; Contact
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-forest border border-forest/60 px-2 py-[2px] rounded-sm">
                  Disponible
                </span>
              </div>

              <div
                className="relative aspect-[3/2] overflow-hidden rounded-[3px] border border-forest/30 flex items-center justify-center px-6"
                style={{
                  background:
                    'linear-gradient(135deg, color-mix(in oklab, var(--color-forest) 8%, transparent), color-mix(in oklab, var(--color-rust) 5%, transparent))',
                }}
              >
                <p className="font-serif italic font-light text-[clamp(48px,7vw,72px)] leading-none tracking-tight text-forest text-center">
                  Discutons<span className="text-rust">.</span>
                </p>
                <div className="absolute inset-0 ring-1 ring-inset ring-forest/10 pointer-events-none rounded-[3px]" />
              </div>

              <div className="mt-5 flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-[26px] leading-tight tracking-tight text-ink">
                  Le 10<sup className="italic font-light text-[16px] -top-1">e</sup>{' '}
                  projet
                </h3>
              </div>

              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                C'est peut-être avec toi. Une mission analytics, un pipeline à
                clarifier, un side-project à co-construire — écris-moi, je
                réponds vite.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] font-mono text-ink-faint">
                <span>SQL</span>
                <span aria-hidden className="text-ink-faint/50">·</span>
                <span>dbt</span>
                <span aria-hidden className="text-ink-faint/50">·</span>
                <span>Python</span>
                <span aria-hidden className="text-ink-faint/50">·</span>
                <span>BigQuery</span>
                <span aria-hidden className="text-ink-faint/50">·</span>
                <span>React</span>
              </div>

              <div className="mt-4 pt-3 border-t border-ink/10 flex justify-between items-center">
                <a
                  href="mailto:comelescure@gmail.com"
                  className="font-mono text-[11px] uppercase tracking-[0.2em] text-forest hover:text-rust transition-colors"
                >
                  comelescure@gmail.com{' '}
                  <ArrowIcon className="ml-0.5 -mt-px" />
                </a>
                <a
                  href="https://www.linkedin.com/in/come-lescure/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint hover:text-ink transition-colors"
                >
                  LinkedIn <ArrowIcon className="ml-0.5 -mt-px" />
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* ── Pied de page ────────────────────────────────────────── */}
        <footer className="max-w-5xl mx-auto px-5 md:px-10 pb-16 md:pb-20">
          <div className="rule-asterism mb-10">
            <span className="font-serif text-[22px] tracking-[0.6em] pl-[0.6em] text-ink-faint">
              ⁂
            </span>
          </div>
          <div className="text-center max-w-md mx-auto">
            <p className="font-serif italic text-[18px] md:text-[20px] leading-snug text-ink-soft">
              «&nbsp;Construire pour comprendre. Comprendre pour mieux
              construire.&nbsp;»
            </p>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-faint">
              Atelier de Côme &nbsp;·&nbsp; Paris &nbsp;·&nbsp; MMXXVI
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
