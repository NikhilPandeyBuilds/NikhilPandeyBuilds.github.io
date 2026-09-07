import React from 'react';
import { resumeData } from '../data/siteData';
import { IconFileText, IconExternalLink } from './Icons';

export const ResumeSection = () => {
  const resumeUrl = "/resume/Nikhil_Pandey_Final_A4_Portrait_Resume_v4.pdf";

  return (
    <section className="section" id="resume" aria-labelledby="resume-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Professional Summary</span>
          <h2 id="resume-heading" className="section-title">Resume</h2>
          <p className="section-subtitle">
            Academic background, technical capabilities, and professional summary.
          </p>
        </div>

        <div className="glass-card resume-card">
          <div className="resume-details">
            <h3 className="resume-name">{resumeData.heading}</h3>
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
              <span>Download Resume</span>
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ justifyContent: 'center' }}
            >
              <span>View PDF</span>
              <IconExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

