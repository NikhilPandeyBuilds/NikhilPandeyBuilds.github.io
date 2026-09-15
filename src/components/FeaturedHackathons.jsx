import React from 'react';
import { hackathonsTimeline } from '../data/siteData';
import { Link } from '../router/Router';
import { IconAward, IconUsers, IconArrowRight } from './Icons';

export const FeaturedHackathons = () => {
  // Select top verified competitions
  const featured = hackathonsTimeline.filter(
    (h) => h.id === 'pitchathon' || h.id === 'hackathon-360' || h.id === 'hackfusion' || h.id === 'kdsh'
  );

  return (
    <section className="section" id="featured-hackathons" aria-labelledby="featured-hackathons-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Competitive Record</span>
          <h2 id="featured-hackathons-heading" className="section-title">Featured Hackathons & Competitions</h2>
          <p className="section-subtitle">
            Notable competition standings, team finalist distinctions, and technical sprints.
          </p>
        </div>

        <div className="timeline-entries" style={{ marginBottom: '2.5rem' }}>
          {featured.map((entry) => (
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

                <p className="timeline-item-desc" style={{ marginBottom: '0.4rem' }}>
                  {entry.note || entry.description}
                </p>
              </div>

              <div className="timeline-item-meta">
                <span className="badge badge-neutral">{entry.type}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/hackathons" className="btn btn-secondary" style={{ padding: '0.75rem 2rem' }}>
            <span>View All Hackathons ({hackathonsTimeline.length})</span>
            <IconArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
