import React from 'react';
import { aboutNarrative } from '../data/siteData';
import { Link } from '../router/Router';
import { IconShield, IconArrowRight } from './Icons';

export const FeaturedExperience = () => {
  const leadership = aboutNarrative.leadershipPositions;

  return (
    <section className="section" id="featured-experience" aria-labelledby="featured-experience-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Institutional Responsibility</span>
          <h2 id="featured-experience-heading" className="section-title">Leadership & Governance</h2>
          <p className="section-subtitle">
            Student chapter governance, technical department coordination, and pan-India collegiate initiatives.
          </p>
        </div>

        <div className="leadership-integration-grid" style={{ marginBottom: '2.5rem' }}>
          {leadership.map((item) => (
            <div key={item.id} className="glass-card leadership-card">
              <div className="leadership-card-header">
                <span className="badge badge-cyan">{item.role}</span>
                <span className="badge badge-neutral" style={{ fontSize: '0.75rem' }}>{item.period}</span>
              </div>
              <h3 className="leadership-org-title" style={{ fontSize: '1.1rem' }}>{item.organization}</h3>
              <div className="leadership-institution">{item.institution}</div>
              <p className="leadership-desc">{item.description}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/experience" className="btn btn-secondary" style={{ padding: '0.75rem 2rem' }}>
            <span>View Full Experience & Achievements</span>
            <IconArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
