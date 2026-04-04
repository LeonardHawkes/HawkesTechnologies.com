import { useEffect, useState } from 'react'
import './Portfolio.css'

const projects = [
  {
    name: 'VibeLink',
    url: 'https://getvibelink.com',
    displayUrl: 'getvibelink.com',
    category: 'Mobile App',
    platforms: ['iOS', 'Android'],
    desc: 'Convert Spotify, Apple Music, and YouTube playlists instantly. AI-powered matching with 95%+ accuracy across all major music platforms.',
    accent: '#c3fb74',
  },
  {
    name: 'PilotHelper',
    url: 'https://pilothelper.com',
    displayUrl: 'pilothelper.com',
    category: 'Web Platform',
    platforms: ['Web'],
    desc: 'Aviation-specific peer support training for pilots, flight schools, colleges, and airlines. Reaching 100K+ pilots across 100+ countries.',
    accent: '#3768bd',
  },
  {
    name: 'Homecoming Love',
    url: 'https://homecominglove.com',
    displayUrl: 'homecominglove.com',
    category: 'Web App',
    platforms: ['Web', 'Mobile'],
    desc: 'A values-based matchmaking platform for Black professionals seeking genuine connections built on emotional compatibility and authentic chemistry.',
    accent: '#92c1e9',
  },
]

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <svg viewBox="260 30 160 260" height="26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <g transform="translate(290, 40)">
                <polygon points="0,90 36,55 36,240 0,240" fill="currentColor"/>
                <rect x="36" y="128" width="28" height="28" fill="currentColor"/>
                <polygon points="64,20 100,0 100,240 64,240" fill="currentColor"/>
              </g>
            </svg>
            Hawkes Technologies
          </a>
          <ul className="nav-links">
            <li><a href="/#services">Services</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#process">Process</a></li>
            <li><a href="/work" className="active">Work</a></li>
            <li><a href="/#contact" className="cta">Contact</a></li>
          </ul>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            <a href="/#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="/#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="/#process" onClick={() => setMenuOpen(false)}>Process</a>
            <a href="/work" className="active" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="/#contact" className="cta" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <div className="container">
        <div className="portfolio-hero fade-up">
          <p className="eyebrow">Our work</p>
          <h1>Products we&apos;ve <em>built.</em></h1>
          <p className="hero-sub">
            A selection of products designed and developed by Hawkes Technologies — live, in use, and growing.
          </p>
        </div>
      </div>

      <div className="divider" />

      {/* PROJECTS */}
      <section className="projects-section">
        <div className="projects-grid">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card fade-up"
            >
              <div className="project-card-top" style={{ '--accent': p.accent }}>
                <span className="project-domain">{p.displayUrl}</span>
                <svg className="project-arrow" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="project-card-body">
                <div className="project-meta">
                  <span className="project-category">{p.category}</span>
                  {p.platforms.map((pl) => (
                    <span key={pl} className="project-platform">{pl}</span>
                  ))}
                </div>
                <h2 className="project-name">{p.name}</h2>
                <p className="project-desc">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="portfolio-cta fade-up">
        <h2>Want to build your own?</h2>
        <p>We bring the same care and craft to every project we take on.</p>
        <div className="cta-group">
          <a href="/#contact" className="btn btn-primary">Start a project</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} Hawkes Technologies LLC. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="/#services">Services</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/work">Work</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}
