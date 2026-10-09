export default function SkillCard({ name, level, experience, icon: Icon }) {
  return (
    <article className="skill-card">
      <span className="skill-card__icon" aria-hidden="true">
        <Icon size={22} />
      </span>
      <h3 className="skill-card__name">{name}</h3>
      <p className="skill-card__meta">
        <span className="skill-card__level">{level}</span>
        <span className="skill-card__dot" aria-hidden="true">
          •
        </span>
        <span>{experience}</span>
      </p>
    </article>
  )
}
