import React from 'react';
import { currentlyBuilding } from '../data/siteData';
import { IconArrowRight } from './Icons';

export const CurrentlyBuilding = () => {
  return (
    <section className="section" id="currently-building" aria-labelledby="currently-building-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Evolution & Product Philosophy</span>
          <h2 id="currently-building-heading" className="section-title">{currentlyBuilding.heading}</h2>
          <p className="section-subtitle">{currentlyBuilding.description}</p>
        </div>

        <div className="progression-container glass-card">
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              The Product Progression Loop
            </span>
            <span className="badge badge-emerald">Active Mindset Shift</span>
          </div>

          <div className="progression-pipeline" role="list">
            {currentlyBuilding.pipeline.map((item, index) => (
              <React.Fragment key={item.step}>
                <div className="pipeline-step-node" role="listitem">
                  <span className="step-num-badge">0{item.step}</span>
                  <span className="step-label">{item.label}</span>
                  <span className="step-desc">{item.desc}</span>
                </div>
                {index < currentlyBuilding.pipeline.length - 1 && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-dim)',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    <IconArrowRight size={16} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="pipeline-supporting-box">
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>// Note:</span>
            <span>{currentlyBuilding.supportingText}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
