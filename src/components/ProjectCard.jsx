import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <article className="work-card tilt reveal">
      <div className="work-media">
        <img src={project.image} alt={project.title} />
        <div className="work-overlay">
          <Link to={`/work/${project.slug}`}>View project</Link>
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          ) : null}
        </div>
      </div>
      <div className="work-body">
        <p className="tag">{project.tag}</p>
        <h3>
          <Link to={`/work/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.summary}</p>
        <div className="work-links">
          <Link to={`/work/${project.slug}`}>Details</Link>
          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
