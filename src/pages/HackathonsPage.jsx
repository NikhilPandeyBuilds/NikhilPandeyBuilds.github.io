import React, { useState } from 'react';
import { hackathonsTimeline } from '../data/siteData';
import { SEO } from '../components/SEO';
import { Link } from '../router/Router';
import { IconAward, IconUsers, IconArrowRight, IconCheck } from '../components/Icons';

export const HackathonsPage = () => {
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
    <>
      <SEO
        title="Nikhil Pandey — Hackathons & Competitions"
        description="Chronological record of national hackathons, technical innovation sprints, and case competitions attended by Nikhil Pandey."
        path="/hackathons"
      />

      <section className="section" id="hackathons-page" aria-labelledby="hackathons-page-heading" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Breadcrumb Navigation */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
            <Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link>
            <span style={{ color: 'var(--text-dim)' }}>/</span>
            <span style={{ color: 'var(--accent-cyan)' }}>Hackathons</span>
          </div>

          <div className="section-header">
            <span className="section-tag">Competition History ({hackathonsTimeline.length} Entries)</span>
            <h1 id="hackathons-page-heading" className="section-title">Hackathons & Competitions Timeline</h1>
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

          {/* Timeline Entries */}
          <div className="timeline-entries" style={{ marginBottom: '3rem' }}>
            {filteredEntries.map((entry) => (
              <div
                key={entry.id}
                className={`timeline-item ${entry.isHighlight ? 'highlight' : ''}`}
              >
                <div className="timeline-item-info">
                  <div className="timeline-item-title-row">
                    <h2 className="timeline-item-name" style={{ fontSize: '1.25rem' }}>{entry.name}</h2>
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

                  {/* Connected Internal Links */}
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '0.35rem' }}>
                    {entry.projectId && (
                      <Link
                        to="/projects"
                        className="btn btn-secondary btn-sm"
                        style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                      >
                        <span>View Project</span>
                        <IconArrowRight size={12} />
                      </Link>
                    )}
                    {entry.hasCertificate && (
                      <Link
                        to="/certifications"
                        className="badge badge-neutral"
                        style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', textDecoration: 'none' }}
                        title="View certificate document in Certifications section"
                      >
                        <IconCheck size={12} style={{ color: 'var(--accent-emerald)' }} />
                        <span>Certificate Available</span>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="timeline-item-meta">
                  <span className="badge badge-neutral">{entry.type}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Cross-Linking Card */}
          <div className="glass-card" style={{ padding: '1.75rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', background: 'rgba(255, 255, 255, 0.02)' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0 0 0.25rem 0' }}>Credentials & Experience</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                Inspect verified certificates issued for these competitions or view collegiate leadership experience.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/certifications" className="btn btn-secondary btn-sm">
                <span>View Certifications</span>
                <IconArrowRight size={14} />
              </Link>
              <Link to="/experience" className="btn btn-secondary btn-sm">
                <span>View Leadership</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HackathonsPage;
