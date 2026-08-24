import { Link, useParams } from 'react-router-dom'
import { projects } from '../data'
import { useReveal } from '../hooks/useReveal'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  useReveal([slug])

  if (!project) {
    return (
      <section className="section page-section">
        <div className="container">
          <h2>Project not found</h2>
          <Link className="btn" to="/work">
            Back to work
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section page-section">
      <div className="container project-detail">
        <p className="eyebrow reveal">
          <Link to="/work">Work</Link> / {project.tag}
        </p>
        <h2 className="reveal">{project.title}</h2>
        <img className="detail-image reveal" src={project.image} alt={project.title} />
        <p className="lead reveal">{project.details}</p>
        <div className="chips reveal">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="work-links reveal">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          ) : null}
          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live demo
            </a>
          ) : null}
          <Link to="/work">All projects</Link>
        </div>
      </div>
    </section>
  )
}
