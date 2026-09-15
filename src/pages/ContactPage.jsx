import React, { useState } from 'react';
import { personalData } from '../data/siteData';
import { SEO } from '../components/SEO';
import { Link } from '../router/Router';
import { IconMail, IconGithub, IconLinkedin, IconInstagram, IconCopy, IconCheck, IconExternalLink, IconArrowRight } from '../components/Icons';

export const ContactPage = ({ onToast }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.contact.email);
    setCopied(true);
    if (onToast) {
      onToast("Email address copied to clipboard!");
    }
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <>
      <SEO
        title="Nikhil Pandey — Contact"
        description="Connect directly with Nikhil Pandey for discussions on AI/ML systems, product engineering, software architecture, and collaborative projects."
        path="/contact"
      />

      <section className="section" id="contact-page" aria-labelledby="contact-page-heading" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Breadcrumb Navigation */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
            <Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link>
            <span style={{ color: 'var(--text-dim)' }}>/</span>
            <span style={{ color: 'var(--accent-cyan)' }}>Contact</span>
          </div>

          <div className="section-header">
            <span className="section-tag">Direct Communication</span>
            <h1 id="contact-page-heading" className="section-title">Let's Connect & Collaborate</h1>
            <p className="section-subtitle">
              Open to discussions with builders, researchers, founders, and engineers working on meaningful technical problems.
            </p>
          </div>

          <div className="contact-grid" style={{ marginBottom: '3rem' }}>
            {/* Narrative Message Card */}
            <div className="glass-card contact-message-card">
              <h2 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '1rem' }}>
                Let's Start a Conversation
              </h2>
              <p style={{ fontSize: '1rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                I am open to discussions with engineers, founders, and researchers working on practical software systems, machine learning pipelines, edge computing, and product architecture.
              </p>
              <p style={{ fontSize: '1rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Whether you are working on a challenging technical problem or exploring project collaboration, feel free to connect through any of the channels here.
              </p>

              <div style={{ padding: '1.25rem', background: 'rgba(56, 189, 248, 0.04)', border: '1px solid rgba(56, 189, 248, 0.2)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.25rem' }}>
                  Location & Availability
                </div>
                <div style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>
                  Navi Mumbai, Maharashtra, India · Second Year B.Tech CSE (AI & ML)
                </div>
              </div>
            </div>

            {/* Contact Channels Card */}
            <div className="glass-card contact-channels-card">
              {/* Email Channel */}
              <div className="channel-row">
                <div className="channel-info">
                  <IconMail size={20} className="channel-icon" />
                  <div>
                    <div className="channel-label">Email</div>
                    <div className="channel-value">{personalData.contact.email}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    title="Copy email"
                  >
                    {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                  <a
                    href={`mailto:${personalData.contact.email}`}
                    className="btn btn-primary btn-sm"
                    aria-label="Send direct email"
                  >
                    Mail
                  </a>
                </div>
              </div>

              {/* GitHub Channel */}
              <div className="channel-row">
                <div className="channel-info">
                  <IconGithub size={20} className="channel-icon" />
                  <div>
                    <div className="channel-label">GitHub</div>
                    <div className="channel-value">@{personalData.contact.githubUsername}</div>
                  </div>
                </div>
                <a
                  href={personalData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  aria-label="Open GitHub profile"
                >
                  <span>Profile</span>
                  <IconExternalLink size={14} />
                </a>
              </div>

              {/* LinkedIn Channel */}
              <div className="channel-row">
                <div className="channel-info">
                  <IconLinkedin size={20} className="channel-info channel-icon" />
                  <div>
                    <div className="channel-label">LinkedIn</div>
                    <div className="channel-value">/in/nikhilpandeybharat</div>
                  </div>
                </div>
                <a
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  aria-label="Connect on LinkedIn"
                >
                  <span>Connect</span>
                  <IconExternalLink size={14} />
                </a>
              </div>

              {/* Instagram Channel (Configured) */}
              {personalData.contact.instagram && (
                <div className="channel-row">
                  <div className="channel-info">
                    <IconInstagram size={20} className="channel-icon" />
                    <div>
                      <div className="channel-label">Instagram</div>
                      <div className="channel-value">Follow Updates</div>
                    </div>
                  </div>
                  <a
                    href={personalData.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    aria-label="Open Instagram profile"
                  >
                    <span>Follow</span>
                    <IconExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Cross-Linking Section */}
          <div className="glass-card" style={{ padding: '1.75rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', background: 'rgba(255, 255, 255, 0.02)' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0 0 0.25rem 0' }}>Review Engineering Credentials</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                Looking for technical capabilities or official resume?
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/skills" className="btn btn-secondary btn-sm">
                <span>View Skills</span>
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

export default ContactPage;
