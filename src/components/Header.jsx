import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { cvHref } from '../data'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="logo" to="/" onClick={() => setOpen(false)}>
          AK<span>.</span>
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="site-nav" className={`site-nav${open ? ' open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a className="btn btn-small magnetic" href={cvHref} download>
            Download CV
          </a>
        </nav>
      </div>
    </header>
  )
}
