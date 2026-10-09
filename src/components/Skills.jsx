import Reveal from './Reveal.jsx'
import SkillCard from './SkillCard.jsx'
import { skills } from '../data/skills.js'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <Reveal className="section-heading">
        <h2 id="skills-heading">Skills &amp; Technologies</h2>
        <p>
          Tools and technologies I am actively learning and using to build projects as a
          junior developer.
        </p>
      </Reveal>

      {skills.length === 0 ? (
        <Reveal>
          <p className="skills__empty">
            Skills data is not available yet. Add entries in{' '}
            <code>src/data/skills.js</code>.
          </p>
        </Reveal>
      ) : (
        <ul className="skills__grid">
          {skills.map((skill, index) => (
            <li key={skill.name}>
              <Reveal delay={index * 60}>
                <SkillCard {...skill} />
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
