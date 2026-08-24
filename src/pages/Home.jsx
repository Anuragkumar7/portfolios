import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee'
import ProjectCard from '../components/ProjectCard'
import {
  chips,
  education,
  process,
  projects,
  services,
  socials,
  tech,
} from '../data'
import { useReveal } from '../hooks/useReveal'
import { useTypewriter } from '../hooks/useTypewriter'

export default function Home() {
  const typeRef = useRef(null)
  useTypewriter(typeRef)
  useReveal()

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow reveal">
              <span className="pulse" /> Available for full-time roles
            </p>
            <h1 className="reveal delay-1">
              Hi, I’m <span className="gradient-text">Anurag Kumar</span>
            </h1>
            <p className="hero-sub reveal delay-2">Full Stack Developer from India</p>
            <p className="hero-role reveal delay-3">
              <span ref={typeRef} />
            </p>
            <p className="lead reveal delay-4">
              I design and build web applications that are fast, accessible, and easy to use —
              from React interfaces to Spring Boot, Node.js, and .NET backends.
            </p>
            <div className="hero-actions reveal delay-5">
              <Link className="btn magnetic" to="/work">
                View my work
              </Link>
              <Link className="btn btn-ghost magnetic" to="/contact">
                Get in touch
              </Link>
            </div>
            <div className="socials reveal delay-6">
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github" />
              </a>
              <a href={socials.email} aria-label="Email">
                <i className="fa-solid fa-envelope" />
              </a>
            </div>
          </div>
          <div className="hero-visual reveal delay-2">
            <div className="hero-stage">
              <div className="orbit orbit-a" aria-hidden="true" />
              <div className="orbit orbit-b" aria-hidden="true" />
              <div className="core-glow" aria-hidden="true" />
              <article className="code-window tilt">
                <div className="code-bar">
                  <span />
                  <span />
                  <span />
                  <p>developer.config.ts</p>
                </div>
                <pre>
                  <code>
                    <span className="cmt">// currently shipping</span>
                    {'\n'}
                    <span className="kw">const</span> <span className="var">anurag</span> = {'{'}
                    {'\n'}
                    {'  '}
                    <span className="key">role</span>: <span className="str">&quot;Full Stack Developer&quot;</span>,
                    {'\n'}
                    {'  '}
                    <span className="key">stack</span>: [<span className="str">&quot;Java&quot;</span>, <span className="str">&quot;MERN&quot;</span>, <span className="str">&quot;.NET&quot;</span>],
                    {'\n'}
                    {'  '}
                    <span className="key">focus</span>: [<span className="str">&quot;APIs&quot;</span>, <span className="str">&quot;UX&quot;</span>, <span className="str">&quot;scale&quot;</span>],
                    {'\n'}
                    {'  '}
                    <span className="key">openToWork</span>: <span className="bool">true</span>,
                    {'\n'}
                    {'};'}
                    {'\n\n'}
                    <span className="kw">export default</span> <span className="var">anurag</span>;
                  </code>
                </pre>
              </article>
              <span className="float-chip chip-1">Spring Boot</span>
              <span className="float-chip chip-2">React</span>
              <span className="float-chip chip-3">MongoDB</span>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={tech} />

      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">About</p>
            <h2>Built around users, not just features</h2>
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
                I’m a full-stack developer from India with training from C-DAC New Delhi (PG-DAC)
                and a B.Tech. in Computer Science. I care about interfaces people can actually use
                and backends that stay reliable as products grow.
              </p>
              <p className="reveal">
                Day to day that means React on the frontend, Java / Spring Boot, Node.js, or C# .NET
                on the server, and MySQL or MongoDB for data — with role-based access, APIs, and
                performance treated as part of the build, not extras.
              </p>
              <div className="stat-row">
                <div className="reveal">
                  <strong>8+</strong>
                  <span>Shipped projects</span>
                </div>
                <div className="reveal">
                  <strong>3</strong>
                  <span>Core stacks</span>
                </div>
                <div className="reveal">
                  <strong>2025</strong>
                  <span>PG-DAC, C-DAC Delhi</span>
                </div>
              </div>
              <div className="hero-actions reveal">
                <Link className="btn magnetic" to="/about">
                  More about me
                </Link>
                <Link className="btn btn-ghost magnetic" to="/services">
                  What I offer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Stack</p>
            <h2>Tools I use to ship</h2>
          </div>
          <p className="lead reveal">
            Comfortable across Java full stack, MERN, and .NET — enough range to pick the right
            tool for the product, not the other way around.
          </p>
          <div className="chips reveal">
            {chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Process</p>
            <h2>How a project usually moves</h2>
          </div>
          <div className="process-grid">
            {process.map((item) => (
              <article className="process-card reveal" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Selected work</p>
            <h2>Projects that show how I build</h2>
          </div>
          <div className="work-grid">
            {projects.slice(0, 4).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="center-action reveal">
            <Link className="btn btn-ghost magnetic" to="/work">
              See all projects
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Education</p>
            <h2>Where the craft was trained</h2>
          </div>
          <ul className="timeline reveal">
            {education.map((item) => (
              <li key={item.title}>
                <span>{item.dates}</span>
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Have a role or a product in mind?</h2>
              <p className="lead">
                I’m open to full-time software engineering roles and focused freelance work.
                Email me or send a short note through the contact page.
              </p>
            </div>
            <div className="hero-actions">
              <Link className="btn magnetic" to="/contact">
                Let’s talk
              </Link>
              <a className="btn btn-ghost magnetic" href={socials.email}>
                Email directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
