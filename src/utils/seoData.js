import { SITE_CONFIG, getCanonicalUrl } from '../config/site';

/**
 * Returns JSON-LD structured data for the Homepage
 */
export function getHomeJsonLd() {
  const sameAsList = [
    SITE_CONFIG.social.github,
    SITE_CONFIG.social.linkedin,
  ];
  if (SITE_CONFIG.social.instagram) {
    sameAsList.push(SITE_CONFIG.social.instagram);
  }

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nikhil Pandey Portfolio",
    "url": getCanonicalUrl("/"),
    "description": SITE_CONFIG.homepageDescription,
    "author": {
      "@type": "Person",
      "name": SITE_CONFIG.author,
      "url": getCanonicalUrl("/about"),
      "sameAs": sameAsList,
    },
  };
}

/**
 * Returns ProfilePage + Person structured data for /about
 */
export function getAboutJsonLd() {
  const sameAsList = [
    SITE_CONFIG.social.github,
    SITE_CONFIG.social.linkedin,
  ];
  if (SITE_CONFIG.social.instagram) {
    sameAsList.push(SITE_CONFIG.social.instagram);
  }

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": SITE_CONFIG.author,
      "additionalName": SITE_CONFIG.fullName,
      "url": getCanonicalUrl("/about"),
      "jobTitle": "CSE (AI & Machine Learning) Student, Builder & Technologist",
      "description": "CSE (AI & Machine Learning) student, builder, technologist and TechPreneur focused on AI/ML, software development and real-world technology.",
      "affiliation": {
        "@type": "CollegeOrUniversity",
        "name": SITE_CONFIG.institution,
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": SITE_CONFIG.institution,
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Navi Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "India",
      },
      "knowsAbout": [
        "Artificial Intelligence",
        "Machine Learning",
        "Natural Language Processing",
        "Software Engineering",
        "Application Development",
        "System Design",
        "Rapid Prototyping",
        "Edge AI",
        "Python",
        "C++",
      ],
      "sameAs": sameAsList,
    },
  };
}

/**
 * Returns CollectionPage structured data for /projects
 */
export function getProjectsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Nikhil Pandey — Projects | AI/ML, Software & Product Development",
    "url": getCanonicalUrl("/projects"),
    "description": "Evidence-backed engineering projects, live MVPs, and architecture prototypes built by Nikhil Pandey.",
    "author": {
      "@type": "Person",
      "name": SITE_CONFIG.author,
      "url": getCanonicalUrl("/about"),
    },
  };
}
