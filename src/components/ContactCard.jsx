import { ArrowUpRight } from 'lucide-react'

export default function ContactCard({ name, value, url, icon: Icon }) {
  const content = (
    <>
      <span className="contact-card__icon" aria-hidden="true">
        <Icon size={20} />
      </span>
      <span className="contact-card__body">
        <span className="contact-card__name">{name}</span>
        <span className="contact-card__value">{value}</span>
      </span>
      {url && <ArrowUpRight className="contact-card__arrow" size={18} aria-hidden="true" />}
    </>
  )

  if (!url) {
    return (
      <li className="contact-card" aria-disabled="true">
        <span className="contact-card__inner">{content}</span>
      </li>
    )
  }

  return (
    <li className="contact-card contact-card--link">
      <a className="contact-card__inner" href={url}>
        <span className="visually-hidden">Open {name} profile ({value})</span>
        <span aria-hidden="true">{content}</span>
      </a>
    </li>
  )
}
