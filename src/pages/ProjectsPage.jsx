import React, { useState, Suspense, lazy } from 'react';
import { projects } from '../data/siteData';
import { SEO } from '../components/SEO';
import { getProjectsJsonLd } from '../utils/seoData';
import { Link } from '../router/Router';
import { IconExternalLink, IconGithub, IconArrowRight, IconUsers, IconPlay, IconFileText } from '../components/Icons';

const ProjectModal = lazy(() => import('../components/ProjectModal').then(m => ({ default: m.ProjectModal })));

export const ProjectsPage = ({ onToast }) => {
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
    <>
      <SEO
        title="Nikhil Pandey — Projects | AI/ML, Software & Product Development"
        description="Explore evidence-backed engineering projects, live MVPs, and architecture prototypes built by Nikhil Pandey, including DHARTI, Campus Hub, LIL, and CareConnect."
        path="/projects"
        structuredData={getProjectsJsonLd()}
      />

      <section className="section" id="projects-page" aria-labelledby="projects-page-heading" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Breadcrumb Navigation */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
            <Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link>
            <span style={{ color: 'var(--text-dim)' }}>/</span>
            <span style={{ color: 'var(--accent-cyan)' }}>Projects</span>
          </div>

          <div className="section-header">
            <span className="section-tag">Complete Portfolio ({projects.length} Projects)</span>
            <h1 id="projects-page-heading" className="section-title">Evidence-Backed Project Showcases</h1>
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
          <div className="projects-showcase-grid" style={{ marginBottom: '3rem' }}>
            {filteredProjects.map((project) => {
              const hasSlides = project.presentation && project.presentation.slides && project.presentation.slides.length > 0;
              const previewImage = hasSlides ? project.presentation.slides[0].image : null;

              return (
                <article key={project.id} className="glass-card project-showcase-card">
                  {/* Visual Preview Header if slides available */}
                  {previewImage ? (
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
                        width="400"
                        height="225"
                      />
                      <div className="project-image-overlay">
                        <span className="badge badge-cyan" style={{ fontSize: '0.75rem' }}>
                          <IconFileText size={12} />
                          <span>Inspect Architecture & Slides</span>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="project-card-image-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '160px', background: 'rgba(15, 23, 42, 0.6)' }}>
                      <span className="badge badge-indigo">{project.badge}</span>
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

                    <h2 className="project-card-title" style={{ fontSize: '1.25rem', marginTop: '0.5rem' }}>{project.title}</h2>
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

          {/* Internal Cross-Linking Section */}
          <div className="glass-card" style={{ padding: '1.75rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', background: 'rgba(255, 255, 255, 0.02)' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0 0 0.25rem 0' }}>Explore Related Records</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                See how these projects were created in hackathon sprints or inspect verified credentials.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/hackathons" className="btn btn-secondary btn-sm">
                <span>View Hackathons</span>
                <IconArrowRight size={14} />
              </Link>
              <Link to="/resume" className="btn btn-secondary btn-sm">
                <span>Download Resume</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Project Detail Modal */}
        {activeModalProject && (
          <Suspense fallback={null}>
            <ProjectModal
              project={activeModalProject}
              onClose={() => setActiveModalProject(null)}
            />
          </Suspense>
        )}
      </section>
    </>
  );
};

export default ProjectsPage;
