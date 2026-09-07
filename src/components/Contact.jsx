import React, { useState } from 'react';
import { personalData } from '../data/siteData';
import { IconMail, IconGithub, IconLinkedin, IconCopy, IconCheck, IconExternalLink } from './Icons';

export const Contact = ({ onToast }) => {
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
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Direct Channels</span>
          <h2 id="contact-heading" className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Open to discussions with builders, researchers, founders, and engineers working on meaningful technical problems.
          </p>
        </div>

        <div className="contact-grid">
          {/* Narrative Message Card */}
          <div className="glass-card contact-message-card">
            <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '1rem' }}>
              Let's Start a Conversation
            </h3>
            <p style={{ fontSize: '1rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              I am open to discussions with engineers, founders, and researchers working on practical software systems, machine learning pipelines, and product architecture.
            </p>
            <p style={{ fontSize: '1rem', color: '#cbd5e1', lineHeight: 1.7 }}>
              Whether you are working on a challenging technical problem or exploring project collaboration, feel free to connect through any of the channels here.
            </p>
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
              >
                <span>Profile</span>
                <IconExternalLink size={14} />
              </a>
            </div>

            {/* LinkedIn Channel Verified */}
            <div className="channel-row">
              <div className="channel-info">
                <IconLinkedin size={20} className="channel-icon" />
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
              >
                <span>Connect</span>
                <IconExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
