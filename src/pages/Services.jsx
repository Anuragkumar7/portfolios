import { Link } from 'react-router-dom'
import { services } from '../data'
import { useReveal } from '../hooks/useReveal'

export default function Services() {
  useReveal()
  return (
    <section className="section page-section">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">What I do</p>
          <h2>Services</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card reveal" key={service.title}>
              <div className="icon-wrap">
                <i className={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul className="timeline">
                {service.points.map((point) => (
                  <li key={point}>
                    <strong>{point}</strong>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="center-action reveal">
          <Link className="btn magnetic" to="/contact">
            Start a project
          </Link>
        </div>
      </div>
    </section>
  )
}
