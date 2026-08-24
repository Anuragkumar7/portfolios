import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'
import { useReveal } from '../hooks/useReveal'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full stack' },
  { id: 'frontend', label: 'Frontend' },
]

export default function Work() {
  const [filter, setFilter] = useState('all')
  const visible =
    filter === 'all' ? projects : projects.filter((item) => item.category === filter)
  useReveal([filter])

  return (
    <section className="section page-section">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Selected work</p>
          <h2>Projects that show how I build</h2>
        </div>
        <div className="filters reveal" role="tablist" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              key={item.id}
              className={`filter-btn${filter === item.id ? ' active' : ''}`}
              type="button"
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="work-grid">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="center-action reveal">
          <a
            className="btn btn-ghost magnetic"
            href="https://github.com/Anuragkumar7"
            target="_blank"
            rel="noopener noreferrer"
          >
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
