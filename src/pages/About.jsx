import { useEffect, useState } from 'react'
import { chips, education, experience, skills } from '../data'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const [tab, setTab] = useState('skills')
  const [counted, setCounted] = useState(false)
  const [stats, setStats] = useState({ projects: 0, stacks: 0, year: 0 })
  useReveal([tab])

  useEffect(() => {
    const root = document.getElementById('skills-block')
    root?.classList.add('skills-on')
    if (counted) return undefined
    setCounted(true)
    const start = performance.now()
    let frame
    const tick = (now) => {
      const t = Math.min(1, (now - start) / 1100)
      const ease = 1 - (1 - t) ** 3
      setStats({
        projects: Math.round(8 * ease),
        stacks: Math.round(3 * ease),
        year: Math.round(2025 * ease),
      })
      if (t < 1) frame = requestAnimationFrame(tick)
      else setStats({ projects: 8, stacks: 3, year: 2025 })
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [counted])

  return (
    <section className="section page-section">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">About</p>
          <h2>A developer who starts with the user</h2>
        </div>
        <div className="about-grid">
          <div className="about-photo reveal">
            <div className="about-portrait">
              <img src="/profile.png" alt="Anurag Kumar" />
              <div className="portrait-shade" />
            </div>
            <div className="photo-glow" />
          </div>
          <div className="about-copy">
            <p className="reveal">
              I believe the user’s experience should lead every design and engineering decision.
              With a background in frontend development and full-stack training, I combine
              technical depth with a practical, product-minded approach.
            </p>
            <p className="reveal">
              I have a strong foundation in HTML, CSS, and JavaScript, and I work across Java,
              the MERN stack, and C# .NET. I keep learning current frontend and backend practices
              so the systems I ship stay maintainable and current.
            </p>
            <div className="stat-row">
              <div className="reveal">
                <strong>{stats.projects === 8 ? '8+' : stats.projects}</strong>
                <span>Shipped projects</span>
              </div>
              <div className="reveal">
                <strong>{stats.stacks}</strong>
                <span>Stack specializations</span>
              </div>
              <div className="reveal">
                <strong>{stats.year}</strong>
                <span>PG-DAC, C-DAC Delhi</span>
              </div>
            </div>
            <div className="tabs reveal" role="tablist">
              {['skills', 'education', 'experience'].map((item) => (
                <button
                  key={item}
                  className={`tab-link${tab === item ? ' active' : ''}`}
                  type="button"
                  onClick={() => setTab(item)}
                >
                  {item[0].toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
            {tab === 'skills' && (
              <div className="tab-panel active skills-on" id="skills-block">
                <div className="skill-bars">
                  {skills.map((skill) => (
                    <div key={skill.label}>
                      <div className="skill-label">
                        <span>{skill.label}</span>
                        <span>{skill.value}%</span>
                      </div>
                      <div className="bar">
                        <i style={{ '--p': `${skill.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="chips">
                  {chips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
              </div>
            )}
            {tab === 'education' && (
              <div className="tab-panel active">
                <ul className="timeline">
                  {education.map((item) => (
                    <li key={item.title}>
                      <span>{item.dates}</span>
                      <strong>{item.title}</strong>
                      <p>{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {tab === 'experience' && (
              <div className="tab-panel active">
                <ul className="timeline">
                  {experience.map((item) => (
                    <li key={item.title + item.dates}>
                      <span>
                        {item.dates}
                        {item.location ? ` · ${item.location}` : ''}
                      </span>
                      <strong>{item.title}</strong>
                      {item.company ? <p className="company">{item.company}</p> : null}
                      <p>{item.detail}</p>
                      {item.bullets ? (
                        <ul className="exp-points">
                          {item.bullets.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
