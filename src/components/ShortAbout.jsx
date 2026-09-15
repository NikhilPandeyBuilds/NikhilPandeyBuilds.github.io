import React from 'react';
import { whatIBuild, personalData } from '../data/siteData';
import { Link } from '../router/Router';
import { IconCpu, IconLayers, IconZap, IconClock, IconCode, IconArrowRight } from './Icons';

export const ShortAbout = () => {
  const getPillarIcon = (id) => {
    switch (id) {
      case 'aiml':
        return <IconCpu size={22} />;
      case 'software-products':
        return <IconLayers size={22} />;
      case 'startup-experiments':
        return <IconZap size={22} />;
      case 'rapid-prototyping':
        return <IconClock size={22} />;
      default:
        return <IconCode size={22} />;
    }
  };

  return (
    <section className="section" id="short-about" aria-labelledby="short-about-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Focus & Approach</span>
          <h2 id="short-about-heading" className="section-title">What I Build & Focus On</h2>
          <p className="section-subtitle">
            Grounded problem solving at the intersection of applied AI/ML, software systems, and rapid product validation.
          </p>
        </div>

        {/* 4 Pillars Compact Grid */}
        <div className="pillars-grid" style={{ marginBottom: '2.5rem' }}>
          {whatIBuild.map((pillar) => (
            <div key={pillar.id} className="glass-card pillar-card">
              <div className="pillar-top">
                <div className="pillar-icon" aria-hidden="true">
                  {getPillarIcon(pillar.id)}
                </div>
                <h3 className="pillar-title" style={{ fontSize: '1.1rem' }}>{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>
              </div>

              <div className="pillar-tags">
                {pillar.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/about" className="btn btn-secondary" style={{ padding: '0.75rem 2rem' }}>
            <span>More About Nikhil & Full Bio</span>
            <IconArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
