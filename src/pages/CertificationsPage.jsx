import React, { useState, useEffect } from 'react';
import { certifications } from '../data/siteData';
import { SEO } from '../components/SEO';
import { Link } from '../router/Router';
import { IconFileText, IconCheck, IconExternalLink, IconClose, IconArrowRight } from '../components/Icons';

export const CertificationsPage = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    if (!selectedCert) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  return (
    <>
      <SEO
        title="Nikhil Pandey — Certifications & Credentials"
        description="Verified certificates and credentials earned by Nikhil Pandey from national hackathons, technical workshops, and competitive challenges."
        path="/certifications"
      />

      <section className="section" id="certifications-page" aria-labelledby="certifications-page-heading" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Breadcrumb Navigation */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
            <Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link>
            <span style={{ color: 'var(--text-dim)' }}>/</span>
            <span style={{ color: 'var(--accent-cyan)' }}>Certifications</span>
          </div>

          <div className="section-header">
            <span className="section-tag">Authentic Credentials ({certifications.length} Documents)</span>
            <h1 id="certifications-page-heading" className="section-title">Verified Certifications & Credentials</h1>
            <p className="section-subtitle">
              Authentic credentials from national hackathons, technical workshops, and case competitions with exact official wording.
            </p>
          </div>

          {/* 8 Verified Certificates Grid */}
          <div className="cert-gallery-grid" style={{ marginBottom: '3rem' }}>
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="cert-gallery-card glass-card"
                onClick={() => setSelectedCert(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedCert(cert);
                  }
                }}
                aria-label={`View verified certificate for ${cert.title}`}
              >
                <div>
                  {/* Visual Certificate Preview */}
                  <div className="cert-card-preview-wrap">
                    {cert.fileType === 'image' ? (
                      <img
                        src={cert.file}
                        alt={cert.title}
                        className="cert-card-preview-img"
                        loading="lazy"
                        width="300"
                        height="200"
                      />
                    ) : (
                      <div className="cert-preview-placeholder">
                        <IconFileText size={32} />
                        <span className="badge badge-neutral" style={{ fontSize: '0.65rem' }}>Verified PDF Document</span>
                      </div>
                    )}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.35rem', gap: '0.5rem' }}>
                    <h2 className="cert-card-title" style={{ fontSize: '1.05rem', margin: 0 }}>{cert.title}</h2>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', flexShrink: 0 }}>
                      {cert.date}
                    </span>
                  </div>

                  <div className="cert-credential-type">
                    {cert.credentialType}
                  </div>

                  <div className="cert-meta-row">
                    {cert.issuer}
                  </div>
                </div>

                <div className="cert-verified-action">
                  <span className="cert-badge-status">
                    <IconCheck size={14} />
                    <span>Verified</span>
                  </span>
                  <span className="btn btn-secondary btn-sm" style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}>
                    View Document
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Cross-Linking Section */}
          <div className="glass-card" style={{ padding: '1.75rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', background: 'rgba(255, 255, 255, 0.02)' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0 0 0.25rem 0' }}>Competitions & Resume</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                Explore the hackathon timeline where these certificates were earned or view the official resume.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/hackathons" className="btn btn-secondary btn-sm">
                <span>View Hackathons</span>
                <IconArrowRight size={14} />
              </Link>
              <Link to="/resume" className="btn btn-primary btn-sm">
                <span>View Resume</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Certificate Viewer Modal */}
        {selectedCert && (
          <div
            className="modal-overlay modal-backdrop"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedCert(null);
            }}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="glass-card modal-box modal-container cert-viewer-modal"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '900px', width: '95vw', maxHeight: '92vh', overflowY: 'auto' }}
            >
              <div className="modal-header">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <span className="badge badge-cyan">{selectedCert.badge}</span>
                    <span className="badge badge-neutral">{selectedCert.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
                    {selectedCert.title}
                  </h3>
                  <p style={{ color: 'var(--accent-cyan)', fontSize: '0.875rem', margin: '0.25rem 0 0 0' }}>
                    {selectedCert.issuer}
                  </p>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close certificate modal"
                >
                  <IconClose size={20} />
                </button>
              </div>

              <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="cert-document-frame-wrap">
                  {selectedCert.fileType === 'image' ? (
                    <img
                      src={selectedCert.file}
                      alt={selectedCert.title}
                      className="cert-viewer-full-image"
                    />
                  ) : (
                    <object
                      data={selectedCert.file}
                      type="application/pdf"
                      className="cert-viewer-pdf-object"
                    >
                      <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                        <p>PDF preview is rendered natively by your browser.</p>
                        <a
                          href={selectedCert.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm"
                        >
                          <IconExternalLink size={14} />
                          <span>Open Document in Full Window</span>
                        </a>
                      </div>
                    </object>
                  )}
                </div>

                <div className="modal-content-box" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                    Official Certificate Citation
                  </div>
                  <p style={{ fontSize: '0.925rem', color: '#e2e8f0', lineHeight: 1.6, margin: 0 }}>
                    "{selectedCert.exactWording}"
                  </p>
                </div>
              </div>

              <div className="modal-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a
                  href={selectedCert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <IconExternalLink size={14} />
                  <span>Open Raw Document</span>
                </a>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setSelectedCert(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default CertificationsPage;
