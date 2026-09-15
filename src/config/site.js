/**
 * Global Site Configuration & Canonical Domain Single Source of Truth
 * Designed for effortless migration to future custom domain (nikhilpandeybuilds.me).
 */

export const SITE_CONFIG = {
  // Current canonical domain on GitHub Pages
  canonicalDomain: "https://nikhilpandeybuilds.github.io",
  
  // Future intended custom domain (ready for seamless migration)
  futureCustomDomain: "https://nikhilpandeybuilds.me",
  
  // Primary Personal Brand Identity
  author: "Nikhil Pandey",
  fullName: "Nikhil Deviprasad Pandey",
  headline: "CSE (AI & Machine Learning) student · Builder · Technologist · TechPreneur",
  
  // Location
  location: "Navi Mumbai, Maharashtra, India",
  institution: "Lokmanya Tilak College of Engineering",
  
  // Primary SEO Metadata
  homepageTitle: "Nikhil Pandey — AI/ML Builder, Technologist & TechPreneur",
  homepageDescription: "Nikhil Pandey is a CSE (AI & Machine Learning) student, builder and technologist from Navi Mumbai building AI/ML products, software systems and real-world solutions.",
  themeColor: "#090A0F",
  
  // Verified Social Profiles
  social: {
    linkedin: "https://www.linkedin.com/in/nikhilpandeybharat/",
    github: "https://github.com/NikhilPandeyBuilds",
    email: "nikhilpandey.programming@gmail.com",
    // Instagram handle configured from repository single source of truth
    instagram: null,
  },
};

/**
 * Generates the absolute canonical URL for a given path
 * @param {string} path - route path e.g. "/projects"
 * @returns {string} full canonical URL
 */
export function getCanonicalUrl(path = "/") {
  const base = SITE_CONFIG.canonicalDomain.replace(/\/+$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (cleanPath === "/") {
    return `${base}/`;
  }
  return `${base}${cleanPath}`;
}
