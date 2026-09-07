import React from 'react';
import { technicalSkills } from '../data/siteData';
import { IconCpu } from './Icons';

export const TechnicalSkills = () => {
  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Capabilities & Learning</span>
          <h2 id="skills-heading" className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Grounded inventory of active engineering capabilities and areas under rigorous active study. No exaggerated percentage bars or arbitrary ratings.
          </p>
        </div>

        <div className="skills-container">
          {/* Categorized Skills Grid */}
          <div className="skills-categories-grid">
            {technicalSkills.categories.map((cat, idx) => (
              <div key={idx} className="glass-card skill-category-card">
                <h3 className="skill-category-title">{cat.name}</h3>
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
                <h3 className="developing-title">Currently Developing & Deepening</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Active learning targets being expanded through coursework, hands-on architectural builds, and technical literature.
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
      </div>
    </section>
  );
};
