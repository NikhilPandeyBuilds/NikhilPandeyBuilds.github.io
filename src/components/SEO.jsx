import React, { useEffect } from 'react';
import { SITE_CONFIG, getCanonicalUrl } from '../config/site';

/**
 * Dynamic SEO Component to update page metadata, canonical URL, Open Graph,
 * Twitter cards, and structured data on route transitions.
 */
export function SEO({
  title,
  description,
  path = '/',
  structuredData = null,
  type = 'website',
}) {
  const pageTitle = title || SITE_CONFIG.homepageTitle;
  const pageDescription = description || SITE_CONFIG.homepageDescription;
  const canonicalUrl = getCanonicalUrl(path);

  useEffect(() => {
    // 1. Page Title
    document.title = pageTitle;

    // Helper to set or update meta tag by name or property
    const setMeta = (attribute, value, content) => {
      let el = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attribute, value);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Primary Meta Tags
    setMeta('name', 'title', pageTitle);
    setMeta('name', 'description', pageDescription);
    setMeta('name', 'author', SITE_CONFIG.author);
    setMeta('name', 'robots', 'index, follow');
    setMeta('name', 'theme-color', SITE_CONFIG.themeColor);

    // 3. Canonical Link
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalUrl);

    // 4. Open Graph Tags
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:title', pageTitle);
    setMeta('property', 'og:description', pageDescription);
    setMeta('property', 'og:site_name', SITE_CONFIG.author);

    // 5. Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:url', canonicalUrl);
    setMeta('name', 'twitter:title', pageTitle);
    setMeta('name', 'twitter:description', pageDescription);

    // 6. JSON-LD Structured Data
    if (structuredData) {
      let scriptEl = document.getElementById('page-json-ld');
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = 'page-json-ld';
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(structuredData, null, 2);
    }
  }, [pageTitle, pageDescription, canonicalUrl, type, structuredData]);

  return null;
}
