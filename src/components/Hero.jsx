import Reveal from './Reveal.jsx'
import { ArrowRight, MessageSquare } from 'lucide-react'
import { profile } from '../data/profile.js'
import './Hero.css'

export default function Hero() {
  return (
    <section id="about" className="hero">
      <Reveal className="hero__grid">
        <div className="hero__content">
          <span className="eyebrow">{profile.availability}</span>
          <h1 className="hero__title">
            {profile.name}
            <span className="hero__title--subtle">{profile.role}</span>
          </h1>
          <p className="hero__bio">{profile.bio}</p>

          <dl className="hero__facts">
            {profile.facts.map((fact) => (
              <div className="hero__fact" key={fact.label}>
                <dt className="hero__fact-label">{fact.label}</dt>
                <dd className="hero__fact-value">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="hero__hobbies">
            <h2 className="hero__hobbies-title">Hobby</h2>
            <ul className="hero__hobbies-list">
              {profile.hobbies.map((hobby) => (
                <li key={hobby}>{hobby}</li>
              ))}
            </ul>
          </div>

          <div className="cta-row">
            <a className="btn btn--primary" href="#projects">
              View My Projects
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn btn--ghost" href="#contact">
              <MessageSquare size={18} aria-hidden="true" />
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__portrait">
            <img
              src={profile.profileImage}
              alt={`Portrait of ${profile.name}`}
              loading="eager"
            />
            <div className="hero__glow" aria-hidden="true" />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
