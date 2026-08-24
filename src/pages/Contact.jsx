import { useState } from 'react'
import { cvHref, formEndpoint, socials } from '../data'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const [status, setStatus] = useState('')
  useReveal()

  const onSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    fetch(formEndpoint, { method: 'POST', body: new FormData(form) })
      .then(() => {
        setStatus('Message sent successfully.')
        form.reset()
        setTimeout(() => setStatus(''), 5000)
      })
      .catch(() => setStatus('Something went wrong. Please email me instead.'))
  }

  return (
    <section className="section page-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow reveal">Contact</p>
          <h2 className="reveal">Let’s build something useful</h2>
          <p className="lead reveal">
            Open to software engineering roles and freelance collaborations. Send a note and I’ll
            reply promptly.
          </p>
          <ul className="contact-list reveal">
            <li>
              <i className="fa-solid fa-envelope" />
              <a href={socials.email}>anurag.kum.135@gmail.com</a>
            </li>
            <li>
              <i className="fa-solid fa-phone" />
              <a href={socials.phone}>+91 89579 90220</a>
            </li>
          </ul>
          <div className="socials reveal">
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github" />
            </a>
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fa-brands fa-x-twitter" />
            </a>
          </div>
          <a className="btn magnetic reveal" href={cvHref} download>
            Download CV
          </a>
        </div>
        <form className="contact-form reveal" onSubmit={onSubmit}>
          <label>
            Name
            <input type="text" name="Name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="Email" placeholder="you@email.com" required />
          </label>
          <label>
            Message
            <textarea name="Massage" rows="6" placeholder="How can I help?" required />
          </label>
          <button className="btn magnetic" type="submit">
            Send message
          </button>
          <p id="msg" role="status">
            {status}
          </p>
        </form>
      </div>
    </section>
  )
}
