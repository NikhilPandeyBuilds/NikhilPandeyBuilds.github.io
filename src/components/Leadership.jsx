import React from 'react';
import { leadershipAndExposure } from '../data/siteData';

export const Leadership = () => {
  return (
    <section className="section" id="leadership" aria-labelledby="leadership-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Community & Ecosystem</span>
          <h2 id="leadership-heading" className="section-title">Leadership & Ecosystem Exposure</h2>
          <p className="section-subtitle">
            Organizational leadership, student chapter responsibilities, and early ecosystem involvement across institutional and pan-India initiatives.
          </p>
        </div>

        <div className="leadership-grid">
          {leadershipAndExposure.map((item) => (
            <article key={item.id} className="glass-card leadership-card">
              <div className="leadership-header">
                <span className="badge badge-indigo" style={{ marginBottom: '0.75rem' }}>
                  {item.type}
                </span>
                <h3 className="leadership-role-title">{item.role}</h3>
                <div className="leadership-org">{item.organization}</div>
                <div className="leadership-affiliation">{item.affiliation}</div>
              </div>

              <div className="leadership-narrative">
                {item.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
