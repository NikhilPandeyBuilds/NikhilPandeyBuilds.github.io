import React from 'react';
import { Link } from '../router/Router';
import { IconArrowRight, IconLayers, IconAward, IconFileText, IconShield, IconCpu, IconMail } from './Icons';

export const AskMore = () => {
  const exploreLinks = [
    { label: 'Explore All Projects', to: '/projects', icon: <IconLayers size={18} />, tag: '8 Systems' },
    { label: 'Explore Hackathons', to: '/hackathons', icon: <IconAward size={18} />, tag: '8 Sprints' },
    { label: 'View Certifications', to: '/certifications', icon: <IconFileText size={18} />, tag: '8 Verified' },
    { label: 'View Experience', to: '/experience', icon: <IconShield size={18} />, tag: 'Leadership' },
    { label: 'View Technical Skills', to: '/skills', icon: <IconCpu size={18} />, tag: 'Stack' },
    { label: 'View Official Resume', to: '/resume', icon: <IconFileText size={18} />, tag: 'PDF' },
    { label: 'Connect Directly', to: '/contact', icon: <IconMail size={18} />, tag: 'Channels' },
  ];

  return (
    <section className="section" id="ask-more" aria-labelledby="ask-more-heading" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <div className="container">
        <div className="glass-card" style={{ padding: '2.5rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.7) 0%, rgba(2, 6, 23, 0.85) 100%)', border: '1px solid rgba(56, 189, 248, 0.25)' }}>
          <span className="section-tag" style={{ marginBottom: '0.75rem' }}>Ask More & Explore</span>
          <h2 id="ask-more-heading" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
            Explore the Complete Engineering Portfolio
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
            Looking for detailed architecture diagrams, slide decks, verified credentials, or competition records? Navigate directly to any section below.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {exploreLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="btn btn-secondary btn-sm"
                style={{
                  padding: '0.6rem 1.15rem',
                  fontSize: '0.85rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  borderColor: 'rgba(255, 255, 255, 0.12)',
                }}
              >
                <span style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center' }}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
                <span className="badge badge-neutral" style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem', marginLeft: '0.2rem' }}>
                  {item.tag}
                </span>
                <IconArrowRight size={12} style={{ opacity: 0.6 }} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
