import React, { useState, Suspense, lazy } from 'react';
import { Router, useRouter } from './router/Router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { HomePage } from './pages/HomePage';

// Lazy-load dedicated non-homepage pages for route-level code splitting & fast initial load
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const HackathonsPage = lazy(() => import('./pages/HackathonsPage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const CertificationsPage = lazy(() => import('./pages/CertificationsPage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const ResumePage = lazy(() => import('./pages/ResumePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function AppContent() {
  const [toastMessage, setToastMessage] = useState(null);
  const { currentPath } = useRouter();

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/about':
        return <AboutPage onToast={showToast} />;
      case '/projects':
        return <ProjectsPage onToast={showToast} />;
      case '/hackathons':
        return <HackathonsPage onToast={showToast} />;
      case '/experience':
        return <ExperiencePage onToast={showToast} />;
      case '/certifications':
        return <CertificationsPage onToast={showToast} />;
      case '/skills':
        return <SkillsPage onToast={showToast} />;
      case '/resume':
        return <ResumePage onToast={showToast} />;
      case '/contact':
        return <ContactPage onToast={showToast} />;
      case '/':
      default:
        return <HomePage onToast={showToast} />;
    }
  };

  return (
    <div className="app-layout">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" tabIndex={-1}>
        <Suspense
          fallback={
            <div className="container" style={{ padding: '6rem 1rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              <div className="status-dot" style={{ margin: '0 auto 1rem auto', width: '12px', height: '12px' }} />
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>Loading section...</p>
            </div>
          }
        >
          {renderPage()}
        </Suspense>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
