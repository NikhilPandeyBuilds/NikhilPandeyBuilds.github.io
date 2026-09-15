import React from 'react';
import { aboutNarrative, achievements } from '../data/siteData';
import { SEO } from '../components/SEO';
import { Link } from '../router/Router';
import { IconShield, IconAward, IconTerminal, IconUsers, IconCode, IconGlobe, IconCpu, IconArrowRight } from '../components/Icons';

export const ExperiencePage = () => {
  const getAchievementIcon = (iconName) => {
    switch (iconName) {
      case 'award':
        return <IconAward size={22} />;
      case 'terminal':
        return <IconTerminal size={22} />;
      case 'users':
        return <IconUsers size={22} />;
      case 'shield':
        return <IconShield size={22} />;
      case 'globe':
        return <IconGlobe size={22} />;
      case 'cpu':
        return <IconCpu size={22} />;
      default:
        return <IconCode size={22} />;
    }
  };

  return (
    <>
      <SEO
        title="Nikhil Pandey — Experience & Leadership"
        description="Collegiate technical leadership and governance roles held by Nikhil Pandey, including Technical Vidya Secretary and CSI LTCE Co-Technical Secretary."
        path="/experience"
      />

      <section className="section" id="experience-page" aria-labelledby="experience-page-heading" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Breadcrumb Navigation */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
            <Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link>
            <span style={{ color: 'var(--text-dim)' }}>/</span>
            <span style={{ color: 'var(--accent-cyan)' }}>Experience</span>
          </div>

          <div className="section-header">
            <span className="section-tag">Institutional Responsibility</span>
            <h1 id="experience-page-heading" className="section-title">Experience & Collegiate Leadership</h1>
            <p className="section-subtitle">
              Verified student chapter leadership, department governance, and organizing team responsibilities at Lokmanya Tilak College of Engineering.
            </p>
          </div>

          {/* Leadership Positions Grid */}
          <div className="leadership-integration-grid" style={{ marginBottom: '3.5rem' }}>
            {aboutNarrative.leadershipPositions.map((item) => (
              <div key={item.id} className="glass-card leadership-card">
                <div className="leadership-card-header">
                  <span className="badge badge-cyan">{item.role}</span>
                  <span className="badge badge-neutral" style={{ fontSize: '0.75rem' }}>{item.period}</span>
                </div>
                <h2 className="leadership-org-title" style={{ fontSize: '1.2rem' }}>{item.organization}</h2>
                <div className="leadership-institution">{item.institution}</div>
                <p className="leadership-desc">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Verified Achievements & Distinctions */}
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            <span className="section-tag">Verified Accomplishments</span>
            <h2 className="section-title">Achievements & Distinctions</h2>
            <p className="section-subtitle" style={{ margin: 0 }}>
              Genuinely notable competition awards, team finalist distinctions, and student governance appointments.
            </p>
          </div>

          <div className="achievements-grid" style={{ marginBottom: '3rem' }}>
            {achievements.map((item) => (
              <div key={item.id} className="glass-card achievement-card">
                <div>
                  <div className="achievement-top">
                    <div className="achievement-icon" aria-hidden="true">
                      {getAchievementIcon(item.icon)}
                    </div>
                    <span className={`badge ${item.badge.includes('Award') ? 'badge-amber' : 'badge-cyan'}`}>
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="achievement-title">{item.title}</h3>
                </div>
                <p className="achievement-desc">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Cross-Linking Section */}
          <div className="glass-card" style={{ padding: '1.75rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', background: 'rgba(255, 255, 255, 0.02)' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0 0 0.25rem 0' }}>Discover More</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                Learn more about Nikhil's full engineering background or review the official resume.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn btn-secondary btn-sm">
                <span>About Nikhil</span>
                <IconArrowRight size={14} />
              </Link>
              <Link to="/resume" className="btn btn-primary btn-sm">
                <span>View Resume</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperiencePage;
