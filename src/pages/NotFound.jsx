import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section page-section">
      <div className="container">
        <p className="eyebrow">404</p>
        <h2>This page does not exist</h2>
        <Link className="btn" to="/">
          Back home
        </Link>
      </div>
    </section>
  )
}
