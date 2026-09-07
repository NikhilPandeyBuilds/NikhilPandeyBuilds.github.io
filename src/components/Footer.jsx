import React from 'react';
import { personalData } from '../data/siteData';
import { IconArrowUp } from './Icons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.35rem' }}>
                <span className="brand-monogram">NP</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>
                  {personalData.name}
                </span>
              </div>
              <p className="footer-quote">
                "Building the skills, products, and companies for what comes next."
              </p>
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

          <div className="footer-bottom">
            <div>
              © 2026 {personalData.name}. All rights reserved.
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78125rem' }}>
              Built for GitHub Pages · Zero-dependency Font Architecture
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
