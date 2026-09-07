import React from 'react';
import { whatIBuild } from '../data/siteData';
import { IconCpu, IconLayers, IconZap, IconClock, IconCode } from './Icons';

export const WhatIBuild = () => {
  const getPillarIcon = (id) => {
    switch (id) {
      case 'aiml':
        return <IconCpu size={24} />;
      case 'software-products':
        return <IconLayers size={24} />;
      case 'startup-experiments':
        return <IconZap size={24} />;
      case 'rapid-prototyping':
        return <IconClock size={24} />;
      default:
        return <IconCode size={24} />;
    }
  };

  return (
    <section className="section" id="what-i-build" aria-labelledby="what-i-build-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Focus Areas</span>
          <h2 id="what-i-build-heading" className="section-title">What I Build</h2>
          <p className="section-subtitle">
            The categories of problems, software systems, and technologies I work with.
          </p>
        </div>

        <div className="pillars-grid">
          {whatIBuild.map((pillar) => (
            <div key={pillar.id} className="glass-card pillar-card">
              <div className="pillar-top">
                <div className="pillar-icon" aria-hidden="true">
                  {getPillarIcon(pillar.id)}
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>
              </div>

              <div className="pillar-tags">
                {pillar.tags.map((tag, idx) => (
                  <span key={idx} className="badge badge-neutral">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
