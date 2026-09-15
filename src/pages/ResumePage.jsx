import React from 'react';
import { resumeData } from '../data/siteData';
import { SEO } from '../components/SEO';
import { Link } from '../router/Router';
import { IconFileText, IconExternalLink, IconArrowRight } from '../components/Icons';

export const ResumePage = () => {
  const resumeUrl = "/resume/Nikhil_Pandey_Final_A4_Portrait_Resume_v4.pdf";

  return (
    <>
      <SEO
        title="Nikhil Pandey — Resume"
        description="Academic background, technical capabilities, and verified professional resume of Nikhil Pandey in B.Tech CSE (AI & Machine Learning)."
        path="/resume"
      />

      <section className="section" id="resume-page" aria-labelledby="resume-page-heading" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Breadcrumb Navigation */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
            <Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link>
            <span style={{ color: 'var(--text-dim)' }}>/</span>
            <span style={{ color: 'var(--accent-cyan)' }}>Resume</span>
          </div>

          <div className="section-header">
            <span className="section-tag">Verified Curriculum Vitae</span>
            <h1 id="resume-page-heading" className="section-title">Official Resume & Academic Summary</h1>
            <p className="section-subtitle">
              Verified second-year B.Tech CSE (AI & ML) student credentials, focus areas, and institutional standing.
            </p>
          </div>

          {/* Resume Summary Card */}
          <div className="glass-card resume-card" style={{ marginBottom: '2.5rem' }}>
            <div className="resume-details">
              <h2 className="resume-name" style={{ fontSize: '1.6rem' }}>{resumeData.heading}</h2>
              <p className="resume-sub">{resumeData.subheading}</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                {resumeData.institution}
              </p>
              <p className="resume-summary-text">{resumeData.summary}</p>

              <div className="focus-pills-row">
                {resumeData.focusAreas.map((area, idx) => (
                  <span key={idx} className="badge badge-indigo">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', flexShrink: 0 }}>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                download="Nikhil_Pandey_Final_A4_Portrait_Resume_v4.pdf"
              >
                <IconFileText size={18} />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ justifyContent: 'center' }}
              >
                <span>Open in New Tab</span>
                <IconExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Embedded Native PDF Viewer */}
          <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2.5rem', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="badge badge-cyan">Document Preview</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Nikhil_Pandey_Final_A4_Portrait_Resume_v4.pdf</span>
              </div>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <IconExternalLink size={14} />
                <span>Full Window View</span>
              </a>
            </div>

            <div style={{ width: '100%', height: '800px', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: '#020408', border: '1px solid var(--border-subtle)' }}>
              <object
                data={resumeUrl}
                type="application/pdf"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              >
                <div style={{ padding: '3rem 1.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  <p style={{ marginBottom: '1.25rem' }}>PDF preview is rendered natively by your browser or device.</p>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <IconFileText size={16} />
                    <span>View Official PDF</span>
                  </a>
                </div>
              </object>
            </div>
          </div>

          {/* Cross-Linking Section */}
          <div className="glass-card" style={{ padding: '1.75rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', background: 'rgba(255, 255, 255, 0.02)' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0 0 0.25rem 0' }}>Connect or Explore Projects</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                Explore live project prototypes or connect directly for collaborative discussions.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/projects" className="btn btn-secondary btn-sm">
                <span>Explore Projects</span>
                <IconArrowRight size={14} />
              </Link>
              <Link to="/contact" className="btn btn-primary btn-sm">
                <span>Contact Nikhil</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResumePage;
