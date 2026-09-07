import React, { useState } from 'react';
import { writingAndPublic, personalData } from '../data/siteData';
import { IconExternalLink, IconLinkedin, IconFileText } from './Icons';
import { Modal } from './Modal';

export const Writing = () => {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section className="section" id="writing" aria-labelledby="writing-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Documenting the Journey</span>
          <h2 id="writing-heading" className="section-title">{writingAndPublic.heading}</h2>
          <p className="section-subtitle">{writingAndPublic.description}</p>
        </div>

        {/* Action Bar */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href={personalData.contact.linkedinPlaceholder}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <IconLinkedin size={16} />
            <span>{writingAndPublic.ctaText}</span>
            <IconExternalLink size={14} />
          </a>
        </div>

        {/* Expandable Journal Entries Architecture */}
        <div className="writing-articles-grid">
          {writingAndPublic.articles.map((article) => (
            <article key={article.id} className="glass-card article-card">
              <div className="article-header">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                  <span className="badge badge-indigo">{article.category}</span>
                  <span className="badge badge-neutral">{article.status}</span>
                </div>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-summary">{article.summary}</p>
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%' }}
                  onClick={() => setActiveArticle(article)}
                >
                  <IconFileText size={15} />
                  <span>Read Log Overview</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Log Preview Modal */}
      {activeArticle && (
        <Modal
          title={activeArticle.title}
          subtitle={`${activeArticle.category} · ${activeArticle.status}`}
          onClose={() => setActiveArticle(null)}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ fontSize: '1rem', color: '#cbd5e1', lineHeight: 1.65 }}>
              {activeArticle.summary}
            </p>
            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Full-length technical essays, postmortems from hackathons, and architectural deep-dives will be published here and syndicated to LinkedIn as documentation continues.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setActiveArticle(null)}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
