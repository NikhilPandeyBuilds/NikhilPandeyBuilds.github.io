import React from 'react';
import { entrepreneurialJourney } from '../data/siteData';

export const EntrepreneurialJourney = () => {
  return (
    <section className="section" id="journey" aria-labelledby="journey-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Long-Term Ambition</span>
          <h2 id="journey-heading" className="section-title">{entrepreneurialJourney.heading}</h2>
          <p className="section-subtitle">{entrepreneurialJourney.statement}</p>
        </div>

        <div className="glass-card journey-card">
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            The Multi-Dimensional Intersection
          </span>

          <div className="intersection-row" aria-label="Technology by Business by Capital by People">
            {entrepreneurialJourney.intersection.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="intersection-node">{item}</div>
                {idx < entrepreneurialJourney.intersection.length - 1 && (
                  <span className="intersection-multiply">×</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="journey-narrative-text">
            {entrepreneurialJourney.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="journey-mantra-box">
            <span style={{ color: 'var(--accent-cyan)' }}>// Core Loop:</span>
            <span>{entrepreneurialJourney.mantra}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
