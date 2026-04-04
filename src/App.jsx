import { useEffect } from 'react'
import './App.css'
 
function ServiceIcon({ type }) {
  if (type === 'web') return (
    <svg className="service-icon" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="36" height="26" rx="4" stroke="#111" strokeWidth="1.5"/>
      <path d="M14 20l-4 4 4 4M30 20l4 4-4 4M21 16l2 12" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
  if (type === 'mobile') return (
    <svg className="service-icon" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="13" y="4" width="18" height="36" rx="4" stroke="#111" strokeWidth="1.5"/>
      <circle cx="22" cy="35" r="1.5" fill="#111"/>
      <path d="M18 8h8" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
  if (type === 'api') return (
    <svg className="service-icon" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="8" stroke="#111" strokeWidth="1.5"/>
      <circle cx="22" cy="22" r="16" stroke="#111" strokeWidth="1.5" strokeDasharray="4 3"/>
      <path d="M22 6v4M22 34v4M6 22h4M34 22h4" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
  if (type === 'strategy') return (
    <svg className="service-icon" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 36L22 8l14 28H8z" stroke="#111" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M14 28h16" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="22" cy="8" r="2" fill="#111"/>
    </svg>
  )
  return null
}
 
export default function App() {
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
          <a href="#" className="nav-logo">
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
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="/work">Work</a></li>
            <li><a href="#contact" className="cta">Contact</a></li>
          </ul>
        </div>
      </nav>
 
      {/* HERO */}
      <div className="container">
        <div className="hero-wrap">
          <div className="hero fade-up">
            <p className="eyebrow">Hawkes Technologies LLC</p>
            <h1>Software built for <em>real</em> impact.</h1>
            <p className="hero-sub">
              We design and develop software, web, and mobile applications that
              help businesses move faster and reach further.
            </p>
            <div className="cta-group">
              <a href="#contact" className="btn btn-primary">Start a project</a>
              <a href="#services" className="btn btn-secondary">Our services</a>
            </div>
          </div>
        </div>
      </div>
 
      <div className="divider" />
 
      {/* SERVICES */}
      <section id="services" className="services-section">
        <div className="fade-up">
          <p className="section-label">What we do</p>
          <h2 className="section-title">End-to-end development, from idea to launch.</h2>
        </div>
        <div className="services-grid fade-up">
          {[
            { type: 'web', title: 'Web Development', desc: 'High-performance web applications built with modern frameworks. Scalable, secure, and crafted to convert.' },
            { type: 'mobile', title: 'Mobile Apps', desc: 'Native iOS and cross-platform applications with intuitive UX. App Store ready, built to scale.' },
            { type: 'api', title: 'API & Backend', desc: 'Robust APIs, cloud infrastructure, and backend systems designed for reliability and growth.' },
            { type: 'strategy', title: 'Strategy & Consulting', desc: 'From architecture decisions to product roadmaps — technical guidance that keeps projects on track.' },
          ].map(({ type, title, desc }) => (
            <div className="service-card" key={type}>
              <ServiceIcon type={type} />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
 
      <div className="divider" />
 
      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="about-inner">
          <div className="about-text fade-up">
            <p className="section-label">About</p>
            <h2>Small team. Big focus. Better software.</h2>
            <p>
              Hawkes Technologies LLC is a US-based software and web development
              firm dedicated to building polished, purposeful digital products.
              We work closely with startups and growing businesses to turn
              complex problems into elegant solutions.
            </p>
            <p>
              Every project we take on is treated like our own — with care,
              clarity, and a relentless attention to quality.
            </p>
            <div className="stats-row">
              <div className="stat">
                <div className="stat-num">100%</div>
                <div className="stat-label">US-based & LLC registered</div>
              </div>
              <div className="stat">
                <div className="stat-num">Full stack</div>
                <div className="stat-label">Web, mobile & backend</div>
              </div>
            </div>
          </div>
          <div className="about-visual fade-up">
            <img src="/logo.svg" className="about-logo-img" alt="Hawkes Technologies logo" />
          </div>
        </div>
      </section>
 
      {/* PROCESS */}
      <section id="process" className="process-section">
        <div className="process-inner">
          <div className="fade-up">
            <p className="section-label">How we work</p>
            <h2 className="section-title">A clear process from day one.</h2>
          </div>
          <div className="process-steps fade-up">
            {[
              { num: '01', title: 'Discovery', desc: 'We learn your goals, constraints, and users before writing a single line of code.' },
              { num: '02', title: 'Design', desc: 'Architecture, wireframes, and prototypes that align your team before development begins.' },
              { num: '03', title: 'Build', desc: 'Agile sprints, clear milestones, and transparent communication throughout.' },
              { num: '04', title: 'Launch', desc: 'Rigorous QA, smooth deployment, and ongoing support after go-live.' },
            ].map(({ num, title, desc }) => (
              <div className="step" key={num}>
                <div className="step-num">{num}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="fade-up">
          <h2>Let&apos;s build something together.</h2>
          <p>Have a project in mind? We&apos;d love to hear about it.</p>
          <div className="cta-group">
            <a href="mailto:hello@hawkestechnologies.com" className="btn btn-primary">
              Get in touch
            </a>
          </div>
          <a href="mailto:hello@hawkestechnologies.com" className="contact-email">
            hello@hawkestechnologies.com
          </a>
        </div>
      </section>
 
      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} Hawkes Technologies LLC. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="/work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}
