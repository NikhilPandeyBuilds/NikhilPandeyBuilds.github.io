import React from 'react';
import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { FeaturedHackathons } from '../components/FeaturedHackathons';
import { FeaturedCertifications } from '../components/FeaturedCertifications';
import { FeaturedExperience } from '../components/FeaturedExperience';
import { ShortAbout } from '../components/ShortAbout';
import { AskMore } from '../components/AskMore';
import { SITE_CONFIG } from '../config/site';
import { getHomeJsonLd } from '../utils/seoData';

export const HomePage = ({ onToast }) => {
  return (
    <>
      <SEO
        title={SITE_CONFIG.homepageTitle}
        description={SITE_CONFIG.homepageDescription}
        path="/"
        structuredData={getHomeJsonLd()}
      />

      <Hero />
      <FeaturedProjects />
      <FeaturedHackathons />
      <FeaturedCertifications />
      <FeaturedExperience />
      <ShortAbout />
      <AskMore />
    </>
  );
};

export default HomePage;
