import React from 'react';
import { personalData } from '../data/siteData';
import { Link } from '../router/Router';
import { IconArrowUp, IconGithub, IconLinkedin, IconInstagram, IconMail } from './Icons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerNav = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Hackathons', to: '/hackathons' },
    { label: 'Experience', to: '/experience' },
    { label: 'Certifications', to: '/certifications' },
    { label: 'Skills', to: '/skills' },
    { label: 'Resume', to: '/resume' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <footer className="footer-wrapper" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-top" style={{ alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ maxWidth: '420px' }}>
              <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem', textDecoration: 'none' }}>
                <span className="brand-monogram">NP</span>
                <span style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                  {personalData.name}
                </span>
              </Link>
              <p className="footer-quote" style={{ marginBottom: '1rem' }}>
                "Building the skills, products, and architectures for what comes next."
              </p>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                {personalData.education.institution} · Navi Mumbai, India
              </div>
            </div>

            {/* Social Identity Channels */}
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                Personal Channels
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <a
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  aria-label="LinkedIn profile"
                  title="LinkedIn"
                >
                  <IconLinkedin size={14} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  aria-label="GitHub profile"
                  title="GitHub"
                >
                  <IconGithub size={14} />
                  <span>GitHub</span>
                </a>
                {personalData.contact.instagram && (
                  <a
                    href={personalData.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    aria-label="Instagram profile"
                    title="Instagram"
                  >
                    <IconInstagram size={14} />
                    <span>Instagram</span>
                  </a>
                )}
                <a
                  href={`mailto:${personalData.contact.email}`}
                  className="btn btn-secondary btn-sm"
                  aria-label="Send direct email"
                  title="Email"
                >
                  <IconMail size={14} />
                  <span>Email</span>
                </a>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <IconArrowUp size={14} />
            </button>
          </div>

          {/* Crawlable Navigation Bar */}
          <nav style={{ padding: '1.25rem 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', margin: '1.5rem 0' }} aria-label="Footer Navigation">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', justifyContent: 'center' }}>
              {footerNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.15s ease' }}
                  className="footer-nav-link"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="footer-bottom">
            <div>
              © 2026 {personalData.name}. All rights reserved.
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78125rem' }}>
              Built with React & Vanilla CSS · Hosted on GitHub Pages
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
