import React from 'react';
import { personalData } from '../data/siteData';
import { Link } from '../router/Router';
import { IconArrowRight, IconCpu } from './Icons';

export const Hero = () => {
  return (
    <section className="section hero-section" id="home" aria-label="Introduction">
      <div className="container">
        <div className="hero-layout-grid">
          {/* Left Column: Narrative & Actions */}
          <div className="hero-content">
            {/* Status Indicator */}
            <div className="hero-status-pill">
              <span className="status-dot" aria-hidden="true"></span>
              <span>{personalData.statusTicker}</span>
            </div>

            {/* Single H1 for SEO */}
            <h1 className="hero-name">{personalData.name}</h1>
            <p className="hero-headline">{personalData.headline}</p>
            <p className="hero-statement">{personalData.primaryStatement}</p>

            {/* Academic Background Card */}
            <div className="hero-academic-card">
              <div className="academic-icon-box" aria-hidden="true">
                <IconCpu size={20} />
              </div>
              <div className="academic-text">
                <strong>{personalData.education.degree} ({personalData.education.specialization})</strong>
                <span>{personalData.education.institution} · {personalData.education.currentStage}</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                <span>Explore Projects</span>
                <IconArrowRight size={16} />
              </Link>
              <Link to="/resume" className="btn btn-secondary">
                <span>Resume (PDF)</span>
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <span>Connect</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Treatment */}
          <div className="hero-portrait-col">
            <div className="hero-portrait-frame">
              <img
                src="/images/nikhil-pandey-profile.jpg"
                alt="Nikhil Pandey"
                className="hero-portrait-img"
                loading="eager"
                decoding="async"
                width="320"
                height="426"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
