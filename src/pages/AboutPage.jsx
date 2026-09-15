import React from 'react';
import { personalData, aboutNarrative } from '../data/siteData';
import { SITE_CONFIG } from '../config/site';
import { SEO } from '../components/SEO';
import { getAboutJsonLd } from '../utils/seoData';
import { Link } from '../router/Router';
import { 
  IconGithub, 
  IconLinkedin, 
  IconInstagram, 
  IconMail, 
  IconArrowRight, 
  IconFileText, 
  IconShield, 
  IconCode, 
  IconUsers, 
  IconTerminal 
} from '../components/Icons';

export const AboutPage = () => {
  const getDimensionIcon = (id) => {
    switch (id) {
      case 'collaborative-engineering':
        return <IconUsers size={22} />;
      case 'ai-systems':
        return <IconCode size={22} />;
      case 'community-leadership':
        return <IconShield size={22} />;
      default:
        return <IconTerminal size={22} />;
    }
  };

  return (
    <>
      <SEO
        title="Nikhil Pandey — About | AI/ML Builder & Technologist"
        description="Learn about Nikhil Pandey, a CSE (AI & Machine Learning) student at LTCE Navi Mumbai, building AI/ML systems, edge intelligence architectures, and leading student technical initiatives."
        path="/about"
        structuredData={getAboutJsonLd()}
        type="profile"
      />

      <section className="section" id="about-page" aria-labelledby="about-page-heading" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Breadcrumb Navigation */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
            <Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link>
            <span style={{ color: 'var(--text-dim)' }}>/</span>
            <span style={{ color: 'var(--accent-cyan)' }}>About</span>
          </div>

          {/* Profile Header Block */}
          <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div style={{ maxWidth: '300px', margin: '0 auto' }}>
              <div className="hero-portrait-frame" style={{ width: '100%', maxWidth: '280px', aspectRatio: '3/4', margin: '0 auto' }}>
                <img
                  src="/images/nikhil-pandey-profile.jpg"
                  alt="Nikhil Deviprasad Pandey"
                  className="hero-portrait-img"
                  loading="eager"
                  width="280"
                  height="373"
                />
              </div>
            </div>

            <div>
              <span className="section-tag" style={{ marginBottom: '0.5rem' }}>Professional Profile</span>
              <h1 id="about-page-heading" style={{ fontSize: '2.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem', letterSpacing: '-0.02em' }}>
                {personalData.name}
              </h1>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--accent-cyan)', marginBottom: '1rem' }}>
                Full Name: {SITE_CONFIG.fullName}
              </p>
              <p style={{ fontSize: '1.15rem', color: '#e2e8f0', fontWeight: 500, lineHeight: 1.5, marginBottom: '1.25rem' }}>
                {personalData.headline}
              </p>
              <p style={{ fontSize: '0.975rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {personalData.primaryStatement}
              </p>

              {/* Verified Education Box */}
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1rem 1.25rem', marginBottom: '1.5rem' }}>
                <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.25rem' }}>
                  {personalData.education.degree} ({personalData.education.specialization})
                </strong>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  {personalData.education.institution} · {personalData.education.currentStage}
                </span>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', marginTop: '0.25rem' }}>
                  Location: {SITE_CONFIG.location}
                </div>
              </div>

              {/* Social Channels & Deep Links */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center' }}>
                <a
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  aria-label="Nikhil Pandey LinkedIn Profile"
                >
                  <IconLinkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  aria-label="Nikhil Pandey GitHub Profile"
                >
                  <IconGithub size={16} />
                  <span>GitHub</span>
                </a>
                {personalData.contact.instagram && (
                  <a
                    href={personalData.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    aria-label="Nikhil Pandey Instagram Profile"
                  >
                    <IconInstagram size={16} />
                    <span>Instagram</span>
                  </a>
                )}
                <Link to="/resume" className="btn btn-primary btn-sm">
                  <IconFileText size={16} />
                  <span>View Resume</span>
                </Link>
                <Link to="/projects" className="btn btn-secondary btn-sm">
                  <span>Explore Projects</span>
                  <IconArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Narrative Biography */}
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            <span className="section-tag">Background & Journey</span>
            <h2 className="section-title">Engineering Philosophy & Approach</h2>
          </div>

          <div className="about-grid" style={{ marginBottom: '3rem' }}>
            <div className="about-narrative-text">
              {aboutNarrative.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#ffffff' }}>
                Core Operating Pillars
              </h3>
              <div className="about-dimensions">
                {aboutNarrative.dimensions.map((dim) => (
                  <div key={dim.id} className="glass-card dimension-card">
                    <div>
                      <div className="dimension-icon-wrap" aria-hidden="true">
                        {getDimensionIcon(dim.id)}
                      </div>
                      <h4 className="dimension-title">{dim.title}</h4>
                      <span className="dimension-focus">{dim.focus}</span>
                      <p className="dimension-desc">{dim.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Collegiate Leadership & Student Governance */}
          <div style={{ marginBottom: '3rem' }}>
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              <span className="section-tag">Student Governance</span>
              <h2 className="section-title">Collegiate Leadership & Institutional Responsibility</h2>
              <p className="section-subtitle" style={{ margin: 0 }}>
                Verified positions of responsibility within college societies and national initiatives.
              </p>
            </div>

            <div className="leadership-integration-grid">
              {aboutNarrative.leadershipPositions.map((item) => (
                <div key={item.id} className="glass-card leadership-card">
                  <div className="leadership-card-header">
                    <span className="badge badge-cyan">{item.role}</span>
                    <span className="badge badge-neutral" style={{ fontSize: '0.75rem' }}>{item.period}</span>
                  </div>
                  <h3 className="leadership-org-title" style={{ fontSize: '1.1rem' }}>{item.organization}</h3>
                  <div className="leadership-institution">{item.institution}</div>
                  <p className="leadership-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Quote & Direction */}
          <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', background: 'rgba(56, 189, 248, 0.03)', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
            <blockquote className="about-quote-box" style={{ margin: '0 auto 1.5rem auto' }}>
              "{aboutNarrative.closingQuote}"
            </blockquote>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/projects" className="btn btn-primary">
                <span>Inspect Verified Projects</span>
                <IconArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <span>Start a Conversation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
