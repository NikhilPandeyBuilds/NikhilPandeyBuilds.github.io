import React, { useState, Suspense, lazy } from 'react';
import { projects } from '../data/siteData';
import { Link } from '../router/Router';
import { IconArrowRight, IconExternalLink, IconFileText, IconCheck } from './Icons';

const ProjectModal = lazy(() => import('./ProjectModal').then(m => ({ default: m.ProjectModal })));

export const FeaturedProjects = () => {
  const [activeModalProject, setActiveModalProject] = useState(null);

  // The three primary featured projects: DHARTI, SevaUpasak, and Mini ICU (CareConnect)
  const featuredIds = ['dharti', 'seva-upasak', 'careconnect'];
  const featuredList = featuredIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section className="section" id="featured-projects" aria-labelledby="featured-projects-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Featured Engineering</span>
          <h2 id="featured-projects-heading" className="section-title">Key Projects & Systems</h2>
          <p className="section-subtitle">
            Curated highlight of core architectures, social platforms, and community healthcare systems.
          </p>
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="projects-showcase-grid" style={{ marginBottom: '2.5rem' }}>
          {featuredList.map((project) => {
            const hasSlides = project.presentation && project.presentation.slides && project.presentation.slides.length > 0;
            const previewImage = hasSlides ? project.presentation.slides[0].image : null;
            const displayTitle = project.id === 'careconnect' ? 'Mini ICU / CareConnect' : project.title;

            return (
              <article key={project.id} className="glass-card project-showcase-card">
                {/* Visual Thumbnail */}
                {previewImage ? (
                  <div
                    className="project-card-image-wrap"
                    onClick={() => setActiveModalProject(project)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Inspect ${displayTitle} slides and architecture`}
                  >
                    <img
                      src={previewImage}
                      alt={`${displayTitle} presentation preview`}
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
                  <div className="project-card-image-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '140px', background: 'rgba(15, 23, 42, 0.6)' }}>
                    <span className="badge badge-indigo">{project.badge}</span>
                  </div>
                )}

                <div className="project-card-body">
                  <div className="project-meta-row">
                    <span className="badge badge-cyan">{project.badge}</span>
                    <span className="badge badge-neutral" style={{ fontSize: '0.75rem' }}>
                      {project.year}
                    </span>
                  </div>

                  <h3 className="project-card-title">{displayTitle}</h3>
                  <p className="project-card-subtitle">{project.subtitle}</p>
                  <p className="project-card-problem" style={{ WebkitLineClamp: 3 }}>
                    {project.problem}
                  </p>

                  <div className="project-tech-tags">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="project-card-actions">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => setActiveModalProject(project)}
                    >
                      <span>Explore Project</span>
                      <IconArrowRight size={14} />
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                        title="Open Live MVP"
                        aria-label={`Open Live MVP for ${displayTitle}`}
                      >
                        <IconExternalLink size={14} />
                        <span>MVP</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Clear Section CTA to Full Projects Page */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/projects" className="btn btn-secondary" style={{ padding: '0.75rem 2rem' }}>
            <span>View All Projects ({projects.length})</span>
            <IconArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Project Modal Deep Dive (loaded on-demand only if clicked) */}
      {activeModalProject && (
        <Suspense fallback={null}>
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        </Suspense>
      )}
    </section>
  );
};
