import React, { useState, useEffect } from 'react';
import { IconMenu, IconClose, IconArrowRight } from './Icons';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'What I Build', href: '#what-i-build' },
    { label: 'Projects', href: '#projects' },
    { label: 'Hackathons', href: '#hackathons' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Skills', href: '#skills' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'what-i-build', 'projects', 'hackathons', 'achievements', 'certifications', 'skills', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="navbar-header" role="banner">
      <div className="container">
        <div className="navbar-inner">
          <a href="#home" className="brand-link" aria-label="Nikhil Pandey Home">
            <span className="brand-monogram">NP</span>
            <span>Nikhil Pandey</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-links-desktop" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary nav-cta-btn">
              Connect
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <IconClose size={24} /> : <IconMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          <div
            className="mobile-drawer-overlay"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <aside className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
            <div className="mobile-drawer-header">
              <span className="brand-link">
                <span className="brand-monogram">NP</span>
                <span>Nikhil Pandey</span>
              </span>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <IconClose size={20} />
              </button>
            </div>

            <nav className="mobile-drawer-links" aria-label="Mobile Navigation Links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  onClick={handleLinkClick}
                >
                  <span>{link.label}</span>
                  <IconArrowRight size={14} />
                </a>
              ))}
              <div style={{ marginTop: '1.5rem' }}>
                <a
                  href="#contact"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  onClick={handleLinkClick}
                >
                  Connect With Me
                </a>
              </div>
            </nav>
          </aside>
        </>
      )}
    </header>
  );
};
