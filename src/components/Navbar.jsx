import React, { useState } from 'react';
import { Link, useRouter } from '../router/Router';
import { IconMenu, IconClose, IconArrowRight } from './Icons';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { currentPath } = useRouter();

  const navLinks = [
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Hackathons', to: '/hackathons' },
    { label: 'Experience', to: '/experience' },
    { label: 'Certifications', to: '/certifications' },
    { label: 'Skills', to: '/skills' },
    { label: 'Resume', to: '/resume' },
    { label: 'Contact', to: '/contact' },
  ];

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="navbar-header" role="banner">
      <div className="container">
        <div className="navbar-inner">
          <Link to="/" className="brand-link" aria-label="Nikhil Pandey Home" onClick={handleLinkClick}>
            <span className="brand-monogram">NP</span>
            <span>Nikhil Pandey</span>
          </Link>

          {/* Desktop Navigation with Real Crawlable Links */}
          <nav className="nav-links-desktop" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="nav-link"
                activeClassName="active"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary nav-cta-btn">
              Connect
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
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

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <>
          <div
            className="mobile-drawer-overlay"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <aside className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
            <div className="mobile-drawer-header">
              <Link to="/" className="brand-link" onClick={handleLinkClick}>
                <span className="brand-monogram">NP</span>
                <span>Nikhil Pandey</span>
              </Link>
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
              <Link
                to="/"
                className="mobile-nav-link"
                activeClassName="active"
                onClick={handleLinkClick}
              >
                <span>Home</span>
                <IconArrowRight size={14} />
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="mobile-nav-link"
                  activeClassName="active"
                  onClick={handleLinkClick}
                >
                  <span>{link.label}</span>
                  <IconArrowRight size={14} />
                </Link>
              ))}
              <div style={{ marginTop: '1.5rem' }}>
                <Link
                  to="/contact"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  onClick={handleLinkClick}
                >
                  Connect With Me
                </Link>
              </div>
            </nav>
          </aside>
        </>
      )}
    </header>
  );
};
