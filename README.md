# Nikhil Pandey — Personal Digital Headquarters

The official personal digital headquarters and engineering portfolio of **Nikhil Pandey**, hosted on GitHub Pages at [`NikhilPandeyBuilds.github.io`](https://nikhilpandeybuilds.github.io/).

> **"Builder. Technologist. Entrepreneur in the Making."**  
> *I build technology-driven solutions, explore emerging ideas, and turn problems into working products.*

---

## 🏛️ Architecture & Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Design System**: Lightweight Vanilla CSS with custom tokens (`variables.css`, `base.css`, `components.css`)
- **Typography**: 100% self-contained system font stack (no external Google Fonts or font network dependencies)
- **Zero Cost & Free Hosting**: Hosted on GitHub Pages via a streamlined GitHub Actions workflow
- **SEO & Structured Data**: Canonical URL, Open Graph metadata, Twitter Cards, and schema.org `Person` JSON-LD

---

## 📂 Project Structure

```text
NikhilPandeyBuilds.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Single GitHub Actions workflow for Pages deployment
├── public/
│   ├── favicon.svg             # Modern NP geometric monogram
│   ├── robots.txt              # Search engine directives
│   └── sitemap.xml             # Search engine index sitemap
├── src/
│   ├── components/             # Reusable UI sections & accessible dialogs
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── BeyondTechnology.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── CurrentlyBuilding.jsx
│   │   ├── EntrepreneurialJourney.jsx
│   │   ├── Footer.jsx
│   │   ├── HackathonsTimeline.jsx
│   │   ├── Hero.jsx
│   │   ├── Icons.jsx
│   │   ├── Leadership.jsx
│   │   ├── Modal.jsx
│   │   ├── Navbar.jsx
│   │   ├── Principles.jsx
│   │   ├── Projects.jsx
│   │   ├── ResumeSection.jsx
│   │   ├── TechnicalSkills.jsx
│   │   ├── Toast.jsx
│   │   └── WhatIBuild.jsx
│   ├── data/
│   │   └── siteData.js         # Single source of truth for portfolio content
│   ├── styles/
│   │   ├── base.css
│   │   ├── components.css
│   │   └── variables.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

The output static files are compiled into the `/dist` directory, ready to be served by GitHub Pages or any static host.

---

## 🌐 Deployment to GitHub Pages

Deployment is automated through GitHub Actions upon pushing to the `main` branch.

To enable GitHub Pages in your repository settings:
1. Navigate to **Settings** > **Pages** in `NikhilPandeyBuilds/NikhilPandeyBuilds.github.io`.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Pushes to `main` will trigger `.github/workflows/deploy.yml` and publish your site at `https://nikhilpandeybuilds.github.io/`.
