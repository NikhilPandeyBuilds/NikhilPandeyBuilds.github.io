import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhatIBuild } from './components/WhatIBuild';
import { Projects } from './components/Projects';
import { HackathonsTimeline } from './components/HackathonsTimeline';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { TechnicalSkills } from './components/TechnicalSkills';
import { BuildingInPublic } from './components/BuildingInPublic';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="app-layout">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <WhatIBuild />
        <Projects onToast={showToast} />
        <HackathonsTimeline />
        <Achievements />
        <Certifications />
        <TechnicalSkills />
        <BuildingInPublic />
        <ResumeSection />
        <Contact onToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}

export default App;
