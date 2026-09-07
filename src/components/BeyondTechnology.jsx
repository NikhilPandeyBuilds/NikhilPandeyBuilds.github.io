import React from 'react';
import { beyondTechnology } from '../data/siteData';

export const BeyondTechnology = () => {
  return (
    <section className="section" id="beyond" aria-labelledby="beyond-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Discipline & Resilience</span>
          <h2 id="beyond-heading" className="section-title">{beyondTechnology.heading}</h2>
          <p className="section-subtitle">{beyondTechnology.subheading}</p>
        </div>

        <div className="glass-card" style={{ padding: '2.25rem' }}>
          <div className="beyond-grid">
            <div className="beyond-narrative">
              {beyondTechnology.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="disciplines-list">
              {beyondTechnology.disciplines.map((d, idx) => (
                <div key={idx} className="discipline-card">
                  <div>
                    <div className="discipline-name">{d.name}</div>
                    <div className="discipline-detail">{d.detail}</div>
                  </div>
                  <span className="badge badge-neutral">Discipline</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
