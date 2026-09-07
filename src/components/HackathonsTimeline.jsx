import React, { useState } from 'react';
import { hackathonsTimeline } from '../data/siteData';
import { IconAward, IconUsers, IconFileText, IconArrowRight, IconCheck } from './Icons';

export const HackathonsTimeline = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', 'National Hackathons', 'Pitching & Case Challenges', 'Data Science & AI'];

  const filteredEntries = hackathonsTimeline.filter((item) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'National Hackathons') {
      return item.type.toLowerCase().includes('hackathon') && !item.type.includes('Data Science');
    }
    if (activeFilter === 'Pitching & Case Challenges') {
      return item.type.toLowerCase().includes('pitch') || item.type.toLowerCase().includes('case');
    }
    if (activeFilter === 'Data Science & AI') {
      return item.type.toLowerCase().includes('data science') || item.type.toLowerCase().includes('ai');
    }
    return true;
  });

  return (
    <section className="section" id="hackathons" aria-labelledby="hackathons-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Competition Record</span>
          <h2 id="hackathons-heading" className="section-title">Hackathons & Competitions</h2>
          <p className="section-subtitle">
            A concise chronological record of national hackathons, technical innovation sprints, and case challenges.
          </p>
        </div>

        {/* Filter bar */}
        <div className="timeline-filter-bar" role="tablist" aria-label="Filter competitions">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              className={`filter-btn ${activeFilter === opt ? 'active' : ''}`}
              onClick={() => setActiveFilter(opt)}
              role="tab"
              aria-selected={activeFilter === opt}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Concise Timeline Entries */}
        <div className="timeline-entries">
          {filteredEntries.map((entry) => (
            <div
              key={entry.id}
              className={`timeline-item ${entry.isHighlight ? 'highlight' : ''}`}
            >
              <div className="timeline-item-info">
                <div className="timeline-item-title-row">
                  <h3 className="timeline-item-name">{entry.name}</h3>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    {entry.isHighlight ? (
                      <span className="badge badge-amber" style={{ fontWeight: 700 }}>
                        <IconAward size={14} />
                        <span>{entry.role}</span>
                      </span>
                    ) : (
                      <span className="badge badge-cyan">{entry.role}</span>
                    )}
                    {entry.teamName && (
                      <span className="badge badge-indigo">
                        <IconUsers size={12} />
                        <span>Team: {entry.teamName}</span>
                      </span>
                    )}
                  </div>
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  {entry.organizer} · {entry.year}
                </div>

                <p className="timeline-item-desc" style={{ marginBottom: '0.6rem' }}>
                  {entry.note || entry.description}
                </p>

                {/* Connected Portfolio Links */}
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '0.35rem' }}>
                  {entry.projectId && (
                    <a
                      href="#projects"
                      className="btn btn-secondary btn-sm"
                      style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                    >
                      <span>View project</span>
                      <IconArrowRight size={12} />
                    </a>
                  )}
                  {entry.hasCertificate && (
                    <a
                      href="#certifications"
                      className="badge badge-neutral"
                      style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', textDecoration: 'none' }}
                      title="View certificate document in Certifications section"
                    >
                      <IconCheck size={12} style={{ color: 'var(--accent-emerald)' }} />
                      <span>Certificate available</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="timeline-item-meta">
                <span className="badge badge-neutral">{entry.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
