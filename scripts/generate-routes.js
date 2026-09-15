import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

const CANONICAL_DOMAIN = 'https://nikhilpandeybuilds.github.io';

const routes = [
  {
    path: 'about',
    title: 'Nikhil Pandey — About | AI/ML Builder & Technologist',
    description: 'Learn about Nikhil Pandey, a CSE (AI & Machine Learning) student at LTCE Navi Mumbai, building AI/ML systems, edge intelligence architectures, and leading student technical initiatives.',
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": "Nikhil Pandey",
        "additionalName": "Nikhil Deviprasad Pandey",
        "url": `${CANONICAL_DOMAIN}/about`,
        "jobTitle": "CSE (AI & Machine Learning) Student, Builder & Technologist",
        "description": "CSE (AI & Machine Learning) student, builder, technologist and TechPreneur focused on AI/ML, software development and real-world technology.",
        "affiliation": {
          "@type": "CollegeOrUniversity",
          "name": "Lokmanya Tilak College of Engineering"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Lokmanya Tilak College of Engineering"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Navi Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "India"
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
          "C++"
        ],
        "sameAs": [
          "https://github.com/NikhilPandeyBuilds",
          "https://www.linkedin.com/in/nikhilpandeybharat/"
        ]
      }
    }
  },
  {
    path: 'projects',
    title: 'Nikhil Pandey — Projects | AI/ML, Software & Product Development',
    description: 'Explore evidence-backed engineering projects, live MVPs, and architecture prototypes built by Nikhil Pandey, including DHARTI, Campus Hub, LIL, and CareConnect.',
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Nikhil Pandey — Projects | AI/ML, Software & Product Development",
      "url": `${CANONICAL_DOMAIN}/projects`,
      "description": "Evidence-backed engineering projects, live MVPs, and architecture prototypes built by Nikhil Pandey.",
      "author": {
        "@type": "Person",
        "name": "Nikhil Pandey",
        "url": `${CANONICAL_DOMAIN}/about`
      }
    }
  },
  {
    path: 'hackathons',
    title: 'Nikhil Pandey — Hackathons & Competitions',
    description: 'Chronological record of national hackathons, technical innovation sprints, and case competitions attended by Nikhil Pandey.',
  },
  {
    path: 'experience',
    title: 'Nikhil Pandey — Experience & Leadership',
    description: 'Collegiate technical leadership and governance roles held by Nikhil Pandey, including Technical Vidya Secretary and CSI LTCE Co-Technical Secretary.',
  },
  {
    path: 'certifications',
    title: 'Nikhil Pandey — Certifications & Credentials',
    description: 'Verified certificates and credentials earned by Nikhil Pandey from national hackathons, technical workshops, and competitive challenges.',
  },
  {
    path: 'skills',
    title: 'Nikhil Pandey — Skills | AI/ML & Software Development',
    description: 'Grounded technical capabilities of Nikhil Pandey across Python, C++, AI/ML, NLP, system design, and edge intelligence architectures.',
  },
  {
    path: 'resume',
    title: 'Nikhil Pandey — Resume',
    description: 'Academic background, technical capabilities, and verified professional resume of Nikhil Pandey in B.Tech CSE (AI & Machine Learning).',
  },
  {
    path: 'contact',
    title: 'Nikhil Pandey — Contact',
    description: 'Connect directly with Nikhil Pandey for discussions on AI/ML systems, product engineering, software architecture, and collaborative projects.',
  },
];

function generateRoutes() {
  const indexHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.error('dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

  // 1. Generate dedicated directory for each route with pre-rendered SEO & JSON-LD
  for (const route of routes) {
    const routeDir = path.join(distDir, route.path);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    const canonicalUrl = `${CANONICAL_DOMAIN}/${route.path}`;

    let routeHtml = baseHtml;

    // Update <title>
    routeHtml = routeHtml.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
    routeHtml = routeHtml.replace(/<meta\s+name="title"\s+content=".*?"\s*\/?>/, `<meta name="title" content="${route.title}" />`);
    routeHtml = routeHtml.replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/, `<meta property="og:title" content="${route.title}" />`);
    routeHtml = routeHtml.replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/, `<meta name="twitter:title" content="${route.title}" />`);

    // Update <meta name="description">
    routeHtml = routeHtml.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/, `<meta name="description" content="${route.description}" />`);
    routeHtml = routeHtml.replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/, `<meta property="og:description" content="${route.description}" />`);
    routeHtml = routeHtml.replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/, `<meta name="twitter:description" content="${route.description}" />`);

    // Update canonical and Open Graph URL
    routeHtml = routeHtml.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/, `<link rel="canonical" href="${canonicalUrl}" />`);
    routeHtml = routeHtml.replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/, `<meta property="og:url" content="${canonicalUrl}" />`);
    routeHtml = routeHtml.replace(/<meta\s+name="twitter:url"\s+content=".*?"\s*\/?>/, `<meta name="twitter:url" content="${canonicalUrl}" />`);

    // Update or inject JSON-LD
    if (route.jsonLd) {
      const jsonLdStr = `<script type="application/ld+json" id="page-json-ld">\n${JSON.stringify(route.jsonLd, null, 2)}\n    </script>`;
      if (routeHtml.includes('<script type="application/ld+json">')) {
        routeHtml = routeHtml.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, jsonLdStr);
      } else {
        routeHtml = routeHtml.replace('</head>', `    ${jsonLdStr}\n  </head>`);
      }
    }

    const routeFilePath = path.join(routeDir, 'index.html');
    fs.writeFileSync(routeFilePath, routeHtml, 'utf8');
    console.log(`✓ Pre-rendered static route: /${route.path} -> dist/${route.path}/index.html`);
  }

  // 2. Generate 404.html fallback for GitHub Pages
  const notFoundPath = path.join(distDir, '404.html');
  fs.writeFileSync(notFoundPath, baseHtml, 'utf8');
  console.log('✓ Generated dist/404.html fallback for GitHub Pages');

  console.log(`\n🎉 Successfully pre-rendered ${routes.length} static routes for GitHub Pages direct navigation & SEO!`);
}

generateRoutes();
