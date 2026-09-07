import React, { useState } from 'react';
import { projects } from '../data/siteData';
import { IconCheck, IconExternalLink, IconGithub, IconArrowRight, IconUsers, IconPlay, IconFileText } from './Icons';
import { ProjectModal } from './ProjectModal';

export const Projects = ({ onToast }) => {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredProjects = projects.filter((p) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'mvp') return !!p.liveUrl;
    if (filterCategory === 'ai') return p.technologies.some(t => t.toLowerCase().includes('ai') || t.toLowerCase().includes('ml') || t.toLowerCase().includes('nlp'));
    if (filterCategory === 'hackathon') return !!p.competition;
    return true;
  });

  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Visual Centerpiece · Systems & Prototypes</span>
          <h2 id="projects-heading" className="section-title">Evidence-Backed Project Showcases</h2>
          <p className="section-subtitle">
            Functional architectures, intelligence systems, and competitive prototypes engineered with multidisciplinary teams and individual research.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="projects-filter-bar">
          <button
            type="button"
            className={`filter-chip ${filterCategory === 'all' ? 'active' : ''}`}
            onClick={() => setFilterCategory('all')}
          >
            All Showcases ({projects.length})
          </button>
          <button
            type="button"
            className={`filter-chip ${filterCategory === 'mvp' ? 'active' : ''}`}
            onClick={() => setFilterCategory('mvp')}
          >
            Live MVPs Deployed
          </button>
          <button
            type="button"
            className={`filter-chip ${filterCategory === 'ai' ? 'active' : ''}`}
            onClick={() => setFilterCategory('ai')}
          >
            AI & Intelligence Models
          </button>
          <button
            type="button"
            className={`filter-chip ${filterCategory === 'hackathon' ? 'active' : ''}`}
            onClick={() => setFilterCategory('hackathon')}
          >
            Hackathons & Challenges
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-showcase-grid">
          {filteredProjects.map((project) => {
            const hasSlides = project.presentation && project.presentation.slides && project.presentation.slides.length > 0;
            const previewImage = hasSlides ? project.presentation.slides[0].image : null;

            return (
              <article key={project.id} className="glass-card project-showcase-card">
                {/* Visual Preview Header if slides available */}
                {previewImage && (
                  <div 
                    className="project-card-image-wrap"
                    onClick={() => setActiveModalProject(project)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open presentation for ${project.title}`}
                  >
                    <img 
                      src={previewImage} 
                      alt={`${project.title} presentation preview`}
                      className="project-card-preview-img"
                      loading="lazy"
                    />
                    <div className="project-image-overlay">
                      <span className="badge badge-cyan" style={{ fontSize: '0.75rem' }}>
                        <IconFileText size={12} />
                        <span>Inspect Architecture & Slides</span>
                      </span>
                    </div>
                  </div>
                )}

                <div className="project-card-body">
                  {/* Metadata Row */}
                  <div className="project-meta-row">
                    <span className="badge badge-cyan">{project.badge}</span>
                    <span className="badge badge-indigo">
                      <IconUsers size={12} />
                      <span>{project.team.startsWith('Team:') || project.team.startsWith('Developed with') ? project.team : `Team: ${project.team}`}</span>
                    </span>
                  </div>

                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-subtitle">{project.subtitle}</p>
                  <p className="project-card-problem">{project.problem}</p>

                  {/* Technology Tags */}
                  <div className="project-tech-tags">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Bar */}
                  <div className="project-card-actions">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => setActiveModalProject(project)}
                    >
                      <span>Deep Dive Case Study</span>
                      <IconArrowRight size={14} />
                    </button>

                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-sm"
                          title="Open Live MVP"
                          aria-label={`Open Live MVP for ${project.title}`}
                        >
                          <IconExternalLink size={14} />
                          <span>MVP</span>
                        </a>
                      )}
                      {project.demoVideoUrl && (
                        <a
                          href={project.demoVideoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-sm"
                          title="Watch Demo Video"
                          aria-label={`Watch Demo Video for ${project.title}`}
                          style={{ borderColor: 'rgba(239, 68, 68, 0.4)', color: '#f87171' }}
                        >
                          <IconPlay size={14} />
                          <span>Video</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-sm"
                          title="View GitHub Repository"
                          aria-label={`View GitHub Repository for ${project.title}`}
                        >
                          <IconGithub size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};
