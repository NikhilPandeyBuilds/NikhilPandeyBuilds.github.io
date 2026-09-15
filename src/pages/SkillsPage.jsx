import React from 'react';
import { technicalSkills } from '../data/siteData';
import { SEO } from '../components/SEO';
import { Link } from '../router/Router';
import { IconCpu, IconArrowRight } from '../components/Icons';

export const SkillsPage = () => {
  return (
    <>
      <SEO
        title="Nikhil Pandey — Skills | AI/ML & Software Development"
        description="Grounded technical capabilities of Nikhil Pandey across Python, C++, AI/ML, NLP, system design, and edge intelligence architectures."
        path="/skills"
      />

      <section className="section" id="skills-page" aria-labelledby="skills-page-heading" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Breadcrumb Navigation */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
            <Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link>
            <span style={{ color: 'var(--text-dim)' }}>/</span>
            <span style={{ color: 'var(--accent-cyan)' }}>Skills</span>
          </div>

          <div className="section-header">
            <span className="section-tag">Capabilities & Learning</span>
            <h1 id="skills-page-heading" className="section-title">Technical Skills & Focus Areas</h1>
            <p className="section-subtitle">
              Grounded inventory of active engineering capabilities and areas under active coursework and system development.
            </p>
          </div>

          <div className="skills-container" style={{ marginBottom: '3rem' }}>
            {/* Categorized Skills Grid */}
            <div className="skills-categories-grid">
              {technicalSkills.categories.map((cat, idx) => (
                <div key={idx} className="glass-card skill-category-card">
                  <h2 className="skill-category-title" style={{ fontSize: '1.15rem' }}>{cat.name}</h2>
                  <div className="skill-tags-list">
                    {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-tag-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Distinct Active Learning Container: Currently Developing */}
            <div className="developing-container">
              <div className="developing-header">
                <IconCpu size={20} style={{ color: 'var(--accent-cyan)' }} />
                <div>
                  <h2 className="developing-title" style={{ fontSize: '1.15rem' }}>Currently Developing & Deepening</h2>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Active learning targets being expanded through academic coursework, architectural builds, and technical literature.
                  </p>
                </div>
              </div>

              <div className="developing-grid">
                {technicalSkills.currentlyDeveloping.map((item, idx) => (
                  <div key={idx} className="developing-item">
                    <div className="developing-item-name">{item.name}</div>
                    <div className="developing-item-note">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cross-Linking Section */}
          <div className="glass-card" style={{ padding: '1.75rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', background: 'rgba(255, 255, 255, 0.02)' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0 0 0.25rem 0' }}>See Skills in Action</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                Explore live MVPs and functional prototypes demonstrating these capabilities.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/projects" className="btn btn-primary btn-sm">
                <span>Explore Projects</span>
                <IconArrowRight size={14} />
              </Link>
              <Link to="/resume" className="btn btn-secondary btn-sm">
                <span>View Resume</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsPage;
