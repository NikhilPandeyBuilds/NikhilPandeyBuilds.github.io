import React from 'react';
import { buildingInPublic } from '../data/siteData';
import { IconLinkedin, IconExternalLink } from './Icons';

export const BuildingInPublic = () => {
  return (
    <section className="section" id="network" aria-labelledby="network-heading">
      <div className="container">
        <div className="glass-card building-public-card">
          <div className="building-public-header">
            <div>
              <span className="section-tag">Professional Network</span>
              <h2 id="network-heading" className="section-title" style={{ marginBottom: '0.5rem' }}>
                {buildingInPublic.heading}
              </h2>
              <p style={{ color: 'var(--accent-cyan)', fontSize: '1.05rem', fontWeight: 500, margin: 0 }}>
                {buildingInPublic.statement}
              </p>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '680px', marginTop: '0.75rem', marginBottom: 0 }}>
                {buildingInPublic.description}
              </p>
            </div>

            <a
              href={buildingInPublic.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: '0.5rem', flexShrink: 0 }}
            >
              <IconLinkedin size={18} />
              <span>{buildingInPublic.ctaText}</span>
              <IconExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
