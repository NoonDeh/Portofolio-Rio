import { Github } from 'lucide-react'
import { profile } from '../data/profile.js'
import { githubUrl } from '../data/contacts.js'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>

        <nav aria-label="Footer navigation">
          <ul className="site-footer__links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            {githubUrl && (
              <li>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={16} aria-hidden="true" />
                  GitHub
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
