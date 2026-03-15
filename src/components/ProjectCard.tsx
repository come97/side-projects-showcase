import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  image: string
}

export default function ProjectCard({ project, image }: ProjectCardProps) {
  return (
    <a
      href={project.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-indigo-300 transition-colors block no-underline group"
    >
      {/* Screenshot zone */}
      <div className="h-44 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <img
          src={image}
          alt={`Aperçu de ${project.name}`}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Card body */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-slate-900">{project.name}</h3>
        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
          {project.description}
        </p>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex justify-between items-center mt-4">
          <div>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:text-indigo-700"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
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
              </a>
            )}
          </div>
          <span className="text-xs text-indigo-600 font-medium">
            Voir la démo
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
          </span>
        </div>
      </div>
    </a>
  )
}
