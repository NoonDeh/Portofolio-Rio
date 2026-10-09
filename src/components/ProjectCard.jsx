import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({
  title,
  description,
  image,
  technologies = [],
  githubUrl,
  demoUrl,
}) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        <img src={image} alt={`Screenshot of ${title}`} loading="lazy" />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>

        {technologies.length > 0 && (
          <ul className="project-card__tags">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        )}

        <div className="project-card__actions">
          {githubUrl && (
            <a
              className="btn btn--ghost btn--sm"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
          )}
          {demoUrl && (
            <a
              className="btn btn--ghost btn--sm"
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
