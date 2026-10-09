import Reveal from './Reveal.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <Reveal className="section-heading">
        <h2 id="projects-heading">Featured Projects</h2>
        <p>
          A selection of projects I have built while learning.
        </p>
      </Reveal>

      {projects.length === 0 ? (
        <Reveal>
          <p className="projects__empty">
            No projects yet. Add your first project in <code>src/data/projects.js</code>.
          </p>
        </Reveal>
      ) : (
        <div className="projects__grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 80}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  )
}
