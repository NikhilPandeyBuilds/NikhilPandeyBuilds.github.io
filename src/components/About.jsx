import React from 'react';
import { aboutNarrative } from '../data/siteData';
import { IconCode, IconTerminal, IconAward, IconUsers, IconShield, IconGlobe } from './Icons';

export const About = () => {
  const getDimensionIcon = (id) => {
    switch (id) {
      case 'collaborative-engineering':
        return <IconUsers size={22} />;
      case 'ai-systems':
        return <IconCode size={22} />;
      case 'community-leadership':
        return <IconShield size={22} />;
      default:
        return <IconTerminal size={22} />;
    }
  };

  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Identity & Narrative</span>
          <h2 id="about-heading" className="section-title">About Me</h2>
          <p className="section-subtitle">
            Engineering student, AI systems builder, and collegiate technical leader.
          </p>
        </div>

        <div className="about-grid">
          {/* Narrative Body */}
          <div className="about-narrative-text">
            {aboutNarrative.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Three Interconnected Dimensions */}
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#ffffff' }}>
              Core Operating Pillars
            </h3>
            <div className="about-dimensions">
              {aboutNarrative.dimensions.map((dim) => (
                <div key={dim.id} className="glass-card dimension-card">
                  <div>
                    <div className="dimension-icon-wrap" aria-hidden="true">
                      {getDimensionIcon(dim.id)}
                    </div>
                    <h4 className="dimension-title">{dim.title}</h4>
                    <span className="dimension-focus">{dim.focus}</span>
                    <p className="dimension-desc">{dim.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integrated Collegiate Leadership & Governance */}
        <div style={{ marginTop: '2.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <IconShield size={20} style={{ color: 'var(--accent-cyan)' }} />
            <span>Collegiate Leadership & Institutional Responsibility</span>
          </h3>
          <div className="leadership-integration-grid">
            {aboutNarrative.leadershipPositions.map((item) => (
              <div key={item.id} className="glass-card leadership-card">
                <div className="leadership-card-header">
                  <span className="badge badge-cyan">{item.role}</span>
                  <span className="badge badge-neutral" style={{ fontSize: '0.75rem' }}>{item.period}</span>
                </div>
                <h4 className="leadership-org-title">{item.organization}</h4>
                <div className="leadership-institution">{item.institution}</div>
                <p className="leadership-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Quote Callout */}
        <div style={{ marginTop: '2.5rem' }}>
          <blockquote className="about-quote-box">
            "{aboutNarrative.closingQuote}"
          </blockquote>
        </div>
      </div>
    </section>
  );
};
