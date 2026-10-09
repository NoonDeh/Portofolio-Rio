import Reveal from './Reveal.jsx'
import ContactCard from './ContactCard.jsx'
import ContactForm from './ContactForm.jsx'
import { contacts } from '../data/contacts.js'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <Reveal className="section-heading">
        <h2 id="contact-heading">Contact Me</h2>
        <p>
          Feel free to reach out through any of these channels, or send a message
          directly using the form.
        </p>
      </Reveal>

      <div className="contact__layout">
        <Reveal className="contact__channels">
          <ul className="contact__list">
            {contacts.map((contact) => (
              <ContactCard key={contact.name} {...contact} />
            ))}
          </ul>
        </Reveal>

        <Reveal className="contact__form" delay={100}>
          <h3 className="contact__form-title">Send a message</h3>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
