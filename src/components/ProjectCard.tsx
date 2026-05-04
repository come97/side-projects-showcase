import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  image: string
  index: number
  featured?: boolean
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

export default function ProjectCard({
  project,
  image,
  index,
  featured = false,
}: ProjectCardProps) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <article className="group relative">
      {/* Eyebrow ligne — numéro + badge éventuel */}
      <div className="flex items-baseline justify-between mb-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
          № {num}
        </span>
        {featured && (
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-rust border border-rust/60 px-2 py-[2px] rounded-sm">
            Coup de cœur
          </span>
        )}
      </div>

      {/* Lien principal : image + titre + description */}
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
      >
        <div className="relative aspect-[3/2] overflow-hidden bg-paper-warm border border-ink/10 rounded-[3px]">
          <img
            src={image}
            alt={`Aperçu de ${project.name}`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-[700ms] ease-out group-hover:scale-[1.035]"
          />
          {/* vignette discrète */}
          <div className="absolute inset-0 ring-1 ring-inset ring-ink/5 pointer-events-none" />
          {/* halo de hover */}
          <div className="absolute inset-0 bg-rust/0 transition-colors duration-500 group-hover:bg-rust/[0.04] pointer-events-none" />
        </div>

        <div className="mt-5 flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-[26px] leading-tight tracking-tight text-ink">
            {project.name}
          </h3>
          <ArrowIcon className="text-ink-faint transition-all duration-300 group-hover:text-rust group-hover:-translate-y-[1px] group-hover:translate-x-[1px] shrink-0 mt-1" />
        </div>

        <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
          {project.description}
        </p>
      </a>

      {/* Stack en mono séparé par puces typographiques */}
      <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] font-mono text-ink-faint">
        {project.stack.map((tech, j) => (
          <span key={tech} className="flex items-center gap-1.5">
            {j > 0 && <span aria-hidden className="text-ink-faint/50">·</span>}
            <span>{tech}</span>
          </span>
        ))}
      </div>

      {/* Footer : démo + github */}
      <div className="mt-4 pt-3 border-t border-ink/10 flex justify-between items-center">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft hover:text-rust transition-colors"
        >
          Voir la démo <ArrowIcon className="ml-0.5 -mt-px" />
        </a>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint hover:text-ink transition-colors"
          >
            GitHub <ArrowIcon className="ml-0.5 -mt-px" />
          </a>
        )}
      </div>
    </article>
  )
}
