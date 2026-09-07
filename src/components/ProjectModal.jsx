import React, { useState, useEffect } from 'react';
import { IconClose, IconExternalLink, IconGithub, IconPlay, IconCheck, IconLayers, IconCpu, IconUsers, IconFileText } from './Icons';

export const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  const hasSlides = project.presentation && project.presentation.slides && project.presentation.slides.length > 0;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay modal-backdrop" onClick={handleOverlayClick} role="dialog" aria-modal="true">
      <div 
        className="glass-card modal-box modal-container project-detail-modal" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '980px', width: '95vw', maxHeight: '90vh', overflowY: 'auto' }}
      >
        {/* Modal Header */}
        <div className="modal-header project-modal-header">
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <span className="badge badge-cyan">{project.badge}</span>
              <span className="badge badge-indigo">
                <IconUsers size={12} />
                <span>{project.team.startsWith('Team:') || project.team.startsWith('Developed with') ? project.team : `Team: ${project.team}`}</span>
              </span>
              {project.competition && (
                <span className="badge badge-neutral">{project.competition} ({project.year})</span>
              )}
              <span className="badge badge-emerald">{project.status}</span>
            </div>
            <h2 style={{ fontSize: '1.75rem', color: '#ffffff', fontWeight: 700, margin: '0 0 0.35rem 0' }}>
              {project.title}
            </h2>
            <p style={{ color: 'var(--accent-cyan)', fontSize: '1rem', margin: 0, fontWeight: 500 }}>
              {project.subtitle}
            </p>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose} 
            aria-label="Close modal"
          >
            <IconClose size={20} />
          </button>
        </div>

        {/* Action Quicklinks Bar */}
        <div className="project-modal-quicklinks">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <IconExternalLink size={14} />
              <span>Launch Live MVP</span>
            </a>
          )}
          {project.demoVideoUrl && (
            <a
              href={project.demoVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ borderColor: 'rgba(239, 68, 68, 0.4)', color: '#f87171' }}
            >
              <IconPlay size={14} />
              <span>Watch Demo Video</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <IconGithub size={14} />
              <span>GitHub Codebase</span>
            </a>
          )}
          {hasSlides && (
            <span className="badge badge-neutral" style={{ padding: '0.4rem 0.75rem' }}>
              <IconFileText size={14} />
              <span>{project.presentation.slides.length} Presentation Slides Attached</span>
            </span>
          )}
        </div>

        {/* Modal Navigation Tabs */}
        <div className="project-modal-tabs">
          <button
            type="button"
            className={`modal-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Problem & Solution
          </button>
          <button
            type="button"
            className={`modal-tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
            onClick={() => setActiveTab('architecture')}
          >
            System Architecture
          </button>
          <button
            type="button"
            className={`modal-tab-btn ${activeTab === 'team' ? 'active' : ''}`}
            onClick={() => setActiveTab('team')}
          >
            Team & Attribution
          </button>
          {hasSlides && (
            <button
              type="button"
              className={`modal-tab-btn ${activeTab === 'evidence' ? 'active' : ''}`}
              onClick={() => setActiveTab('evidence')}
            >
              Slide Deck Previewer ({project.presentation.slides.length})
            </button>
          )}
        </div>

        {/* Tab Content */}
        <div className="modal-body project-modal-body">
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Problem Block */}
              <div className="modal-content-box">
                <h3 className="modal-subheading" style={{ color: '#f87171' }}>The Core Problem</h3>
                <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: '0.975rem', margin: 0 }}>
                  {project.problem}
                </p>
              </div>

              {/* Solution Block */}
              <div className="modal-content-box">
                <h3 className="modal-subheading" style={{ color: 'var(--accent-cyan)' }}>Proposed Solution</h3>
                <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: '0.975rem', margin: 0 }}>
                  {project.solution}
                </p>
              </div>

              {/* Core Philosophy if available */}
              {project.corePhilosophy && (
                <div className="modal-content-box" style={{ borderLeft: '3px solid var(--accent-indigo)', background: 'rgba(99, 102, 241, 0.05)' }}>
                  <h3 className="modal-subheading" style={{ color: '#a5b4fc' }}>Foundational Philosophy</h3>
                  <blockquote style={{ color: '#e2e8f0', fontStyle: 'italic', margin: 0, fontSize: '0.95rem' }}>
                    "{project.corePhilosophy}"
                  </blockquote>
                </div>
              )}

              {/* Key Highlights */}
              {project.highlights && (
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                    Key System Highlights
                  </h4>
                  <div className="work-scope-grid">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="work-scope-item">
                        <IconCheck size={16} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                  Technologies & Frameworks
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="badge badge-neutral" style={{ fontSize: '0.8rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="modal-content-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <IconLayers size={20} style={{ color: 'var(--accent-cyan)' }} />
                  <h3 className="modal-subheading" style={{ color: '#ffffff', margin: 0 }}>
                    {project.architecture.overview}
                  </h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                  Structured engineering layers ensuring modularity, reliability, and fail-safe execution.
                </p>
              </div>

              <div className="architecture-layers-stack">
                {project.architecture.layers.map((layer, idx) => (
                  <div key={idx} className="architecture-layer-item">
                    <div className="layer-badge-col">
                      <span className="layer-step-num">{idx + 1}</span>
                    </div>
                    <div className="layer-content-col">
                      <h4 className="layer-title">{layer.name}</h4>
                      <p className="layer-details">{layer.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="modal-content-box">
                <h3 className="modal-subheading" style={{ color: 'var(--accent-cyan)' }}>Strict Team & Contribution Disclosure</h3>
                <p style={{ color: '#cbd5e1', lineHeight: 1.6, fontSize: '0.95rem', margin: '0 0 1rem 0' }}>
                  In accordance with portfolio integrity principles, all projects distinguish between individual authorship and team collaborations. No claims of sole authorship are made on collaborative efforts.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: 'var(--radius-sm)' }}>
                  <div>
                    <strong style={{ color: '#ffffff' }}>Operating Team: </strong>
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>{project.team}</span>
                  </div>
                  <div>
                    <strong style={{ color: '#ffffff' }}>Nikhil's Contribution / Role: </strong>
                    <span style={{ color: '#cbd5e1' }}>{project.contribution}</span>
                  </div>
                  {project.competition && (
                    <div>
                      <strong style={{ color: '#ffffff' }}>Competition / Showcase: </strong>
                      <span style={{ color: '#cbd5e1' }}>{project.competition} ({project.year})</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'evidence' && hasSlides && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Slide Previewer */}
              <div className="slide-viewer-container">
                <div className="slide-viewer-main">
                  <img
                    src={project.presentation.slides[selectedSlideIndex].image}
                    alt={project.presentation.slides[selectedSlideIndex].title}
                    className="slide-viewer-img"
                  />
                  <div className="slide-viewer-caption">
                    <strong>Slide {project.presentation.slides[selectedSlideIndex].num}: {project.presentation.slides[selectedSlideIndex].title}</strong>
                    <p>{project.presentation.slides[selectedSlideIndex].caption}</p>
                  </div>
                </div>

                {/* Thumbnails rail */}
                <div className="slide-thumbnails-rail">
                  {project.presentation.slides.map((s, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`slide-thumb-btn ${selectedSlideIndex === idx ? 'active' : ''}`}
                      onClick={() => setSelectedSlideIndex(idx)}
                    >
                      <img src={s.image} alt={`Slide ${s.num}`} className="slide-thumb-img" />
                      <span className="slide-thumb-num">{s.num}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Status: <span style={{ color: '#ffffff' }}>{project.status}</span>
          </div>
          <button type="button" className="btn btn-secondary btn-sm" onClick={onClose}>
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
