/**
 * Nikhil Pandey - Personal Portfolio
 * Source of truth for personal data, projects, achievements, and narratives.
 * Strictly adheres to verified information with zero fabricated claims.
 * 
 * Identity Principles:
 * - Brand: Nikhil Pandey
 * - "The Crackerjacks", "Binary Cracks", "FALCONS" are hackathon/project team names, never Nikhil's personal branding.
 * - Distinguishes individual contributions, team builds, hackathons, and leadership roles.
 */

export const personalData = {
  name: "Nikhil Pandey",
  headline: "CSE (AI & Machine Learning) student · Builder · Technologist · TechPreneur",
  primaryStatement: "I build software, AI/ML systems, and product prototypes, with a growing focus on practical deployment, edge intelligence, and distributed systems.",
  education: {
    degree: "B.Tech — Computer Science & Engineering",
    specialization: "AI & Machine Learning",
    institution: "Lokmanya Tilak College of Engineering, Navi Mumbai",
    currentStage: "Second Year",
  },
  longTermGoal: "Build enduring technology products and companies that address real-world problems.",
  statusTicker: "Building with teams across AI, Edge Systems & Campus Platforms",
  contact: {
    email: "nikhilpandey.programming@gmail.com",
    github: "https://github.com/NikhilPandeyBuilds",
    githubUsername: "NikhilPandeyBuilds",
    linkedin: "https://www.linkedin.com/in/nikhilpandeybharat/",
    location: "Navi Mumbai, India",
  },
};

export const aboutNarrative = {
  bio: [
    "I'm Nikhil Pandey, a second-year Computer Science & Engineering student specializing in AI & Machine Learning at Lokmanya Tilak College of Engineering, Navi Mumbai.",
    "I focus on building practical technology products at the intersection of AI/ML, software engineering, and real-world problem solving. My work spans full-stack development, intelligent applications, device-resident edge systems, and rapid prototyping.",
    "A major part of my engineering journey involves collaborating with teams and competing in serious technical environments. Through competitive hackathons and sprints, I build under team banners including The Crackerjacks, Binary Cracks, and FALCONS.",
    "Alongside product engineering, I participate in collegiate student governance and technical leadership: serving as Secretary of Technical Vidya and Co-Technical Secretary of CSI LTCE, and was part of the organizing team for TechPreneur 1.0.",
    "My focus is on substance: understanding system design trade-offs, building dependable architectures, and translating ideas into functioning software without unsupported claims.",
  ],
  leadershipPositions: [
    {
      id: "technical-vidya-sec",
      role: "Secretary",
      organization: "Technical Vidya",
      institution: "Lokmanya Tilak College of Engineering",
      period: "2025 – Present",
      description: "Working with the core team to plan and execute institutional technical initiatives. Part of the organizing team for TechPreneur 1.0, a pan-India startup pitching competition.",
    },
    {
      id: "csi-co-sec",
      role: "Co-Technical Secretary",
      organization: "Computer Society of India (CSI) — LTCE Student Chapter",
      institution: "Lokmanya Tilak College of Engineering",
      period: "2025 – Present",
      description: "Contributing to technical workshops, hands-on programming sessions, and student development activities across the engineering department.",
    },
    {
      id: "techpreneur-organizing-team",
      role: "Part of the organizing team",
      organization: "TechPreneur 1.0 (National Startup Pitching)",
      institution: "Technical Vidya, LTCE",
      period: "2025",
      description: "Part of the organizing team coordinating operations and founder-student engagement for TechPreneur 1.0, a pan-India startup pitching competition.",
    },
  ],
  dimensions: [
    {
      id: "collaborative-engineering",
      title: "Team Engineering",
      focus: "Collaborative Builds & Hackathons",
      description: "Co-architecting prototypes with multidisciplinary teams under pressure, turning briefs into working products.",
      icon: "users",
    },
    {
      id: "ai-systems",
      title: "AI & Systems",
      focus: "Applied ML, NLP & Edge Intelligence",
      description: "Exploring semantic retrieval, on-device runtimes, and domain-specific intelligence models.",
      icon: "cpu",
    },
    {
      id: "community-leadership",
      title: "Collegiate Leadership",
      focus: "Technical Vidya & CSI LTCE",
      description: "Organizing student technical activities, hackathons, and practical workshops.",
      icon: "shield",
    },
  ],
  closingQuote: "I build with teams, compete in serious technical environments, and focus on practical engineering.",
};

export const whatIBuild = [
  {
    id: "aiml",
    title: "AI & Machine Learning",
    description: "Applied machine learning, NLP semantic retrieval pipelines, on-device inference, and domain-specific evaluation models.",
    tags: ["Machine Learning", "NLP", "Semantic Retrieval", "Edge Inference"],
    icon: "cpu",
  },
  {
    id: "software-products",
    title: "Software & Products",
    description: "Full-stack web applications, campus platforms, role-governed data workflows, and responsive software systems.",
    tags: ["Full-Stack Engineering", "Web Applications", "System Design", "Database Architecture"],
    icon: "layers",
  },
  {
    id: "startup-experiments",
    title: "Startup Experiments",
    description: "Exploring practical product hypotheses, user friction points, and viable problem statements with fast validation cycles.",
    tags: ["Product Thinking", "Feasibility Modeling", "User Workflows", "Problem Validation"],
    icon: "zap",
  },
  {
    id: "rapid-prototyping",
    title: "Rapid Prototyping",
    description: "Translating ambiguous problem statements into functional, testable software prototypes within 24–48 hour constraints.",
    tags: ["Hackathon Sprints", "MVP Development", "Rapid Architecture", "Iterative Testing"],
    icon: "clock",
  },
];

/**
 * 8 Core Projects in Strict Order:
 * 1. Campus Hub
 * 2. DHARTI
 * 3. Local Intelligence Layer (LIL)
 * 4. CareConnect
 * 5. Learning Operating System (LOS)
 * 6. SATHI
 * 7. KDSH
 * 8. SevaUpasak
 */
export const projects = [
  {
    id: "campus-hub",
    title: "Campus Hub",
    badge: "Collegiate Platform",
    subtitle: "A Unified Digital Platform for Student Services and Campus Workflows",
    problem: "Collegiate campuses rely on fragmented tools—disjointed portals for library lending, inconsistent circular distribution, manual fee reconciliation, and isolated student workflows—creating operational friction across departments.",
    solution: "Campus Hub unifies institutional services into a cohesive web platform: integrating digital library circulation, role-governed notices, automated fee tracking, and campus service workflows into a single role-governed full-stack application.",
    corePhilosophy: "One platform for the entire student journey, replacing disconnected manual and paper processes with dependable modern institutional software.",
    architecture: {
      overview: "Full-Stack Application Architecture",
      layers: [
        { name: "Frontend Portal", details: "React application built with Vite and TypeScript, featuring role-based routing (Students, Faculty, Librarians, Administrators)." },
        { name: "API & Authentication Bus", details: "Express REST API backend with JSON Web Token (JWT) authentication and role-based access control (RBAC)." },
        { name: "Data Persistence & Schemas", details: "MongoDB with Mongoose object modeling for student records, catalog circulation, fee ledger, and notices." },
        { name: "Real-Time Event Engine", details: "Socket.IO event gateway enabling real-time notification feeds, circular broadcasts, and student alerts." },
      ],
    },
    technologies: ["React", "Vite", "Express", "TypeScript", "MongoDB / Mongoose", "JWT Authentication", "Socket.IO", "Full-Stack Application Architecture"],
    contribution: "Leading product architecture, system modeling, core full-stack implementation, and institutional feature design.",
    team: "Developed with The Crackerjacks",
    competition: "Collegiate Software & Innovation",
    year: "2025 – 2026",
    status: "Active Iteration & Core Architecture Testing",
    liveUrl: null,
    demoVideoUrl: null,
    githubUrl: "https://github.com/NikhilPandeyBuilds",
    presentation: {
      type: "Verified UI & Product Architecture Showcase",
      filename: "Campus Hub Showcase",
      slideCount: 6,
      slides: [
        { num: 1, title: "Campus Hub — Unified Institutional Dashboard", image: "/projects/campushub/campushub_dashboard.png", caption: "Centralized dashboard aggregating academic workflows, notifications, and campus services." },
        { num: 2, title: "Centralized Circular & Notice Board", image: "/projects/campushub/campushub_notices.png", caption: "Role-filtered official notices and real-time circular distribution across departments." },
        { num: 3, title: "Digital Library Circulation & Catalog", image: "/projects/campushub/campushub_library.png", caption: "Automated book catalog search, circulation logs, return tracking, and fine management." },
        { num: 4, title: "Campus Analytics & Metric Monitoring", image: "/projects/campushub/campushub_analytics.png", caption: "Administrative view monitoring campus service throughput and student engagement." },
        { num: 5, title: "Fee Ledger & Reconciliation View", image: "/projects/campushub/campushub_fees.png", caption: "Structured fee tracking with transaction verification and clearance status." },
        { num: 6, title: "Administrative Governance Console", image: "/projects/campushub/campushub_admin.png", caption: "Role boundaries, departmental governance, and permission controls for campus staff." },
      ],
    },
    highlights: [
      "Role-governed multi-tenant institutional architecture",
      "Full-stack MERN stack implementation with TypeScript and Vite",
      "Real-time event synchronization powered by Socket.IO",
      "Integrated library circulation and automated fee ledger",
    ],
  },
  {
    id: "dharti",
    title: "DHARTI",
    badge: "Agri-Intelligence Ecosystem",
    subtitle: "A Complete Farming Intelligence Ecosystem",
    problem: "Agriculture faces rising climate volatility, water depletion, market opacity, and severe financial uncertainty. Existing digital solutions are highly fragmented, data-heavy, inaccessible to smallholder farmers, and fail to translate raw data into definitive, actionable field decisions.",
    solution: "DHARTI abstracts complexity without hiding truth. Built on a 'Multi-Lens Philosophy', it provides a single unified operating environment (DHARTI ONE) that acts as a living Digital Twin of the entire agricultural context. It delivers tailored interaction modes ranging from IVR/SMS on basic feature phones to advanced spatial analytics for agronomists.",
    corePhilosophy: "DHARTI abstracts complexity, but never hides truth. A single truth source adapts to user capability without fragmenting systems—enabling illiterate farmers to receive plain actionable directives, literate farmers to inspect metrics, and institutions to evaluate aggregated risk.",
    architecture: {
      overview: "6-Layer Unified Agricultural Operating System",
      layers: [
        { name: "Layer 0: Vision & Multi-Lens Model", details: "Adaptive contextual lenses: Actions for illiterate farmers, Reasons for semi-literate, Data metrics for literate, Models for experts, Aggregates for institutions." },
        { name: "Layer 1: DHARTI ONE Operating Environment", details: "Living Digital Twin integrating Farms, Farmers, Land & Water, Climate, Markets, and Risk inside a single unified state engine." },
        { name: "Layer 1 Access: Adaptive Multi-Interface", details: "Feature Phone Mode (IVR/SMS/Missed call reach for ~300M+ users), Basic Smartphone Mode (Action Inbox Do/Wait/Stop), Advanced Farmer Mode (interactive charts, water tables), Expert Mode (regional risk maps)." },
        { name: "Layer 2: Core Intelligence Engine", details: "Dynamic Knowledge Graph (Farm-Family-Land-Water-Market-Policy) + Causal Simulation Models + Real-time Data Ingestion (IoT, satellite, user inputs, market feeds)." },
        { name: "Layers 3 & 4: Integrated Subsystems", details: "Environment (Climate, Water, Soil) + Protection & Risk (Guard pest early warning, Shield embedded insurance, Respond disaster claims) + Operations (Harvest timing, Cold logistics, Store inventory) + Advanced (Care agronomy routing, Knowledge, CEA hydroponics)." },
        { name: "Layer 5: AGAS Economic Model & Feasibility", details: "Agricultural Guarantee & Assurance System: converting recommendations into risk instruments (Credit Risk Bounds, Supply Probability, Yield Floors). Banks, insurers, and buyers pay for certainty—farmers pay nothing." },
      ],
    },
    technologies: ["React", "Dynamic Knowledge Graphs", "Causal ML Models", "Satellite & IoT Ingestion", "IVR / SMS Gateways", "Offline-First Sync", "Predictive Analytics"],
    contribution: "Co-developed project architecture, system design, and competitive presentation deck with team members.",
    team: "The Crackerjacks",
    competition: "Innovation & Agri-Tech Showcase",
    year: "2026",
    status: "Live MVP & Functional Walkthrough",
    liveUrl: "https://dharti-v1.vercel.app/",
    demoVideoUrl: "https://youtu.be/J-AoW_JR0Mw",
    githubUrl: null,
    presentation: {
      type: "Official PPTX / Deck",
      filename: "697a503f5a1dc_dharti.pptx",
      slideCount: 8,
      slides: [
        { num: 1, title: "DHARTI v∞ — A Complete Farming Intelligence Ecosystem", image: "/projects/dharti/image1.jpeg", caption: "Problem statement and ecosystem introduction." },
        { num: 2, title: "Core Philosophy of DHARTI v∞", image: "/projects/dharti/image2.png", caption: "The Multi-Lens Philosophy: One Core System → Multiple Contextual Lenses." },
        { num: 3, title: "DHARTI ONE — A Single Operating Environment", image: "/projects/dharti/image3.png", caption: "Not an App, But an Environment acting as a living Digital Twin." },
        { num: 4, title: "Adaptive Interfaces for Every Farmer", image: "/projects/dharti/image4.png", caption: "Feature Phone (IVR/SMS) to Expert/Institutional Mode." },
        { num: 5, title: "DHARTI Core Intelligence Engine", image: "/projects/dharti/image5.png", caption: "Stateful Reasoning System: Data Ingestion → Knowledge Graph → Causal Simulation." },
        { num: 6, title: "Integrated Subsystems Inside DHARTI", image: "/projects/dharti/image6.png", caption: "Environment, Protection & Risk, Operations, and Advanced CEA modules." },
        { num: 7, title: "AGAS — Guarantee System & Feasibility", image: "/projects/dharti/image7.png", caption: "Probabilistic guarantees funded by institutional certainty buyers." },
        { num: 8, title: "Impact, Sustainability & Demo", image: "/projects/dharti/image8.png", caption: "Projected annual revenue architecture & live prototype verification." },
      ],
    },
    highlights: [
      "Live verified MVP deployed on Vercel",
      "Comprehensive 5-minute video demonstration",
      "Feature-phone compatible (IVR/SMS) reaching offline smallholders",
      "AGAS economic model: Zero-fee structure for farmers",
    ],
  },
  {
    id: "local-intelligence-layer",
    title: "Local Intelligence Layer (LIL)",
    badge: "Edge AI Architecture",
    subtitle: "Device-Resident Intelligence Without Cloud Dependency",
    problem: "Modern AI solutions depend overwhelmingly on centralized cloud APIs. This introduces significant latency, privacy vulnerabilities, recurring infrastructure costs, security risks with sensitive user telemetry, and absolute system failure in remote, intermittent, or air-gapped environments.",
    solution: "The Local Intelligence Layer (LIL) provides a device-resident AI architecture that executes machine learning inference, semantic search, and stateful decision support directly on local client silicon—guaranteeing 100% data locality, zero API billing, and uninterrupted offline functionality.",
    corePhilosophy: "Deterministic computation at the edge: user data never leaves the host boundary, eliminating third-party surveillance vectors while enabling instant sub-millisecond inference.",
    architecture: {
      overview: "3-Tier On-Device Intelligence Architecture",
      layers: [
        { name: "Layer 1: Foundation & Hardware Runtime", details: "Hardware-optimized execution runtime utilizing local quantized neural weights (INT4/INT8), direct CPU/NPU acceleration bindings, and minimal RAM footprint." },
        { name: "Technical Components", details: "Quantized model inference engine, on-device vector embedding index, memory-efficient temporal state manager, and local token streaming pipelines." },
        { name: "Layer 2: Intelligence Modes", details: "Dynamic switching between local reasoning, offline context retrieval, semantic document parsing, and proactive edge intervention loops." },
        { name: "Layer 3: Deployment Domains", details: "Targeted across edge gateways, mobile client runtimes, industrial field devices, healthcare workstations, and privacy-governed air-gapped networks." },
        { name: "Compliance & Guarantees", details: "Verifiable zero outbound network telemetry, strict regulatory compliance with data sovereignty frameworks, and zero recurring cloud inference cost." },
      ],
    },
    technologies: ["Quantized Neural Models", "Edge Compute", "Local Vector Indices", "C++ / Python Runtime", "Hardware Acceleration", "Zero-Cloud Networking"],
    contribution: "Individual project in terms of portfolio attribution; co-authored technical presentation with collaborator context.",
    team: "Individual Project (Presentation: The Crackerjacks)",
    competition: "Edge AI & Systems Innovation",
    year: "2026",
    status: "Architectural Specification & Presentation",
    liveUrl: null,
    demoVideoUrl: null,
    githubUrl: null,
    presentation: {
      type: "Official Presentation Deck",
      filename: "The Crackerjacks.pptx",
      slideCount: 12,
      slides: [
        { num: 1, title: "Local Intelligence Layer — Overview & Team Context", image: "/projects/lil/image1.png", caption: "Device-resident intelligence exploration without cloud API dependency." },
        { num: 2, title: "The Problem of Centralized Cloud AI", image: "/projects/lil/image2.png", caption: "Analysis of cloud API latency, privacy leakage, and air-gapped failure." },
        { num: 3, title: "Edge Architecture & Local Inference Engine", image: "/projects/lil/image3.png", caption: "Executing quantized weights directly on host silicon." },
        { num: 4, title: "Device-Resident Vector Search & Knowledge Retrieval", image: "/projects/lil/image4.png", caption: "Local embedding store for zero-cloud semantic document retrieval." },
        { num: 5, title: "DeepSeek vs LLaMA Model Benchmarking", image: "/projects/lil/image5.png", caption: "Comparative evaluation of open-weight LLMs on edge hardware bounds." },
        { num: 6, title: "Hardware Runtime Profiles & Quantization Bounds", image: "/projects/lil/image6.png", caption: "INT4/INT8 precision profiles for constrained memory footprints." },
        { num: 7, title: "Air-Gapped Operation & Data Sovereignty", image: "/projects/lil/image7.png", caption: "Guaranteed zero outbound telemetry for secure and privacy-governed networks." },
        { num: 8, title: "Target Edge Deployment Form Factors", image: "/projects/lil/image8.png", caption: "Workstations, mobile clients, and industrial edge gateways." },
        { num: 9, title: "Multi-Modal Sensor Telemetry Pipelines", image: "/projects/lil/image9.png", caption: "On-device processing of voice, text, and physical sensor feeds." },
        { num: 10, title: "Resource Footprint & Throughput Metrics", image: "/projects/lil/image10.png", caption: "Benchmarked memory consumption and inference latency on edge devices." },
        { num: 11, title: "Offline Fault Tolerance & State Recovery", image: "/projects/lil/image11.png", caption: "Resilient cache synchronization when intermittent networks reconnect." },
        { num: 12, title: "Architecture Roadmap & Future Directions", image: "/projects/lil/image12.png", caption: "Next steps for specialized neural core compilation and micro-models." },
      ],
    },
    highlights: [
      "Completely autonomous execution without external API keys",
      "Strict data sovereignty: zero network leakage",
      "Air-gap operational resilience for defense, healthcare, and remote field deployments",
    ],
  },
  {
    id: "careconnect",
    title: "CareConnect (MedTech)",
    badge: "Healthcare Infrastructure",
    subtitle: "AI-Powered Community Healthcare Infrastructure for Underserved Regions",
    problem: "Underserved communities suffer from severe doctor shortages, long travel distances, fragmented healthcare delivery, and low health literacy. Existing telemedicine platforms are urban-centric, high-bandwidth, and reactive. Conditions escalate because early symptoms are misunderstood, no structured monitoring exists, and no intelligent escalation pathway connects patients with doctors.",
    solution: "CareConnect bridges the healthcare access gap through an AI-assisted, community-embedded care ecosystem. It integrates local pharmacists as trained community responders equipped with clinical AI decision support, continuous symptom-progression tracking, and intelligent doctor escalation (CareEscalate™).",
    corePhilosophy: "Empower community frontline responders with clinically grounded AI safeguards, shifting care from late-stage emergency response to proactive community triage.",
    architecture: {
      overview: "6-Layer Modular Healthcare Architecture",
      layers: [
        { name: "Layer 1: User / Pharmacist Interface", details: "Universal device-agnostic interface (phone, tablet, PC) supporting voice/text symptom entry in local dialects, with guided vitals capture." },
        { name: "Layer 2: NLP & Data Processing Layer", details: "Free-text and vocal symptom extraction, multi-lingual normalization, duration/severity tagging, and clinical intent classification." },
        { name: "Layer 3: AI/ML Intelligence Layer", details: "Multi-factor risk scoring (Self-care safe / Pharmacist-assisted / Doctor escalation / Emergency), predictive condition progression modeling, and red-flag anomaly detection." },
        { name: "Layer 4: Core Healthcare Logic", details: "Safe-care recommendation engine, contraindication & medication safety filters, and personalized patient learning modules." },
        { name: "Layer 5: CareEscalate™ Layer", details: "Intelligent doctor escalation triggered upon red-flags or 3-day non-improvement; provides attending physicians with explainable clinical timelines and numeric vitals summaries." },
        { name: "Layer 6: Data & Impact Layer", details: "Encrypted Community Health Passport storage, longitudinal patient histories, anonymized outbreak heatmaps, and population-level health analytics." },
      ],
    },
    technologies: ["NLP Symptom Extraction", "Predictive ML Risk Scoring", "Explainable AI (XAI)", "Teleconsultation Gateways", "Time-Series Vitals Analysis", "Next.js / Web"],
    contribution: "Co-authored system architecture, NLP triage flow design, and HackFusion 2026 presentation.",
    team: "The Crackerjacks",
    competition: "HackFusion 2026 (SPIT Mumbai)",
    year: "2026",
    status: "Functional MVP & Architecture Verified",
    liveUrl: "https://careconnect-hub.vercel.app/",
    demoVideoUrl: null,
    githubUrl: null,
    presentation: {
      type: "Official HackFusion 2026 Deck",
      filename: "The Crackerjacks_Medtech.pptx",
      slideCount: 4,
      slides: [
        { num: 1, title: "AI-Powered Community Healthcare Infrastructure for Underserved Regions", image: "/projects/medtech/image1.png", caption: "Team identity, HackFusion 2026 event context, and healthcare vision." },
        { num: 2, title: "Healthcare Crisis in Underserved Communities & AI Gap Bridging", image: "/projects/medtech/image2.png", caption: "The cascade of failures vs. structured AI intervention pathways." },
        { num: 3, title: "Advanced AI/ML/NLP Capabilities in Healthcare Systems Engineering", image: "/projects/medtech/image3.png", caption: "Symptom extraction, risk scoring, CareEscalate™, and population analytics." },
        { num: 4, title: "6-Layer Modular Healthcare Architecture", image: "/projects/medtech/image4.png", caption: "Detailed system stack from user interface to data & impact layer with MVP verification." },
      ],
    },
    highlights: [
      "Presented at HackFusion 2026 (Sardar Patel Institute of Technology)",
      "Live verified MVP deployed on Vercel",
      "CareEscalate™ protocol: automated doctor handoff with explainable clinical summaries",
      "Integrates local pharmacists as certified frontline health responders",
    ],
  },
  {
    id: "los",
    title: "Learning Operating System (LOS)",
    badge: "EdTech Intelligence",
    subtitle: "Orchestrating Educational Effectiveness Through a Unified Intelligence Layer",
    problem: "Online educational content is universally abundant, yet learners face devastating rates of distraction, information overload, poor knowledge retention, learning anxiety, weak discipline, and low completion rates. Education does not have a content availability problem—it has a behavioral, engagement, and learning-system problem.",
    solution: "LOS connects learners, educators, institutions, and parents through an orchestrating intelligence layer. Rather than simply delivering passive videos or documents, LOS actively guides comprehension through an empathetic personal AI coach (LAI), visual cognitive load tracking, and distraction-free study environments.",
    corePhilosophy: "The future of education is not more content. It is a system that helps people actually learn, remember, and apply what they learn through active recall and fatigue-aware pacing.",
    architecture: {
      overview: "Unified Educational Intelligence Stack",
      layers: [
        { name: "LAI (Learning AI Coach)", details: "Personal learning coach utilizing active recall prompting, adaptive micro-revision intervals, and real-time fatigue detection to scaffold deep thinking." },
        { name: "Student Operating Environment", details: "Course Hub (NEP 2020 aligned), Inline Video Player with time-stamped note taking, Custom Interactive Test & Homework Takers with auto-scoring." },
        { name: "Cognitive Map & Focus Chamber", details: "Visual load dashboard tracking cognitive fatigue, daily milestones, peer insights, and a Focus Chamber with ambient soundscapes and AI analogy generation." },
        { name: "SOS Toolkit", details: "Emergency panel offering box-breathing exercises, somatic grounding techniques, and an empathetic AI assistant powered by Gemini." },
        { name: "Mentor Insights Hub & Seat Matrix", details: "Real-time student cognitive load heatmap grid allowing teachers to detect learning friction and dispatch automated intervention suggestions." },
      ],
    },
    technologies: ["Learning AI (LAI)", "Active Recall Algorithms", "Cognitive Load Modeling", "Interactive Quizzing Engine", "NEP 2020 Curriculum Mapping", "React"],
    contribution: "Co-designed educational system framework, cognitive load concepts, and Pitchathon 1.0 competition deck with team partner.",
    team: "Binary Cracks (Nikhil Pandey, Aaryan Kasaudhan)",
    competition: "Pitchathon 1.0 (LTCE)",
    year: "2025",
    status: "First Runner-Up Awarded Prototype",
    liveUrl: null,
    demoVideoUrl: null,
    githubUrl: null,
    presentation: {
      type: "Official Pitchathon 1.0 Deck",
      filename: "Learning Operating System.pptx",
      slideCount: 6,
      slides: [
        { num: 1, title: "The Problem — Content Abundance vs Educational Effectiveness", image: "/projects/los/image5.png", caption: "Analysis of learning fatigue, distraction, and cognitive drop-off in digital learning." },
        { num: 2, title: "Intelligent Learning Operating System — Architecture & Approach", image: "/projects/los/image6.png", caption: "Orchestrating intelligence layer connecting students, educators, and curriculum." },
        { num: 3, title: "Student Operating Environment & Active Recall", image: "/projects/los/image7.png", caption: "Interactive player, timestamped recall testing, and continuous comprehension loops." },
        { num: 4, title: "Cognitive Map, Focus Chamber & SOS Toolkit", image: "/projects/los/image8.png", caption: "Visual cognitive load monitoring, somatic grounding, and distraction mitigation." },
        { num: 5, title: "Mentor Insights Hub & Classroom Seat Matrix", image: "/projects/los/image9.png", caption: "Teacher dashboard mapping real-time classroom cognitive friction points." },
        { num: 6, title: "NEP 2020 Alignment & Institutional Roadmap", image: "/projects/los/image10.png", caption: "Competency-based evaluation standards and institutional deployment pathways." },
      ],
    },
    highlights: [
      "Awarded First Runner-Up at Pitchathon 1.0",
      "Shifts EdTech paradigm from passive content consumption to active behavioral mastery",
      "Teacher Seat Matrix: real-time cognitive load heatmap for entire classrooms",
    ],
  },
  {
    id: "sathi",
    title: "SATHI",
    badge: "Mental Wellness Companion",
    subtitle: "An Interactive Mental Stress Relief Companion",
    problem: "Escalating mental stress and anxiety among students and young professionals remain critically unaddressed due to social stigma, expensive therapy costs, and lack of immediate, non-judgmental support in high-pressure moments.",
    solution: "SATHI (साथी — 'Companion' or 'Friend') is a voice-first, empathetic, always-available mental wellness companion. Powered by real-time conversational intelligence, sentiment assessment, and biometric stress detection via a companion smartband, SATHI provides grounding exercises and early crisis escalation.",
    corePhilosophy: "Not just a transactional chatbot, but an empathetic friend who stays. Immediate emotional de-escalation paired with objective physiological stress monitoring.",
    architecture: {
      overview: "Multi-Modal Conversational & Biometric Wellness System",
      layers: [
        { name: "Conversational Wellness Engine", details: "Voice-first empathetic interaction, active sentiment scoring, non-clinical supportive dialogue, and grounding techniques." },
        { name: "Smartband Hardware Blueprint", details: "Wearable smartband CAD model engineered in Blender; incorporates PPG heart rate variability (HRV), galvanic skin response (GSR), and skin temperature sensors." },
        { name: "Stress Analytics & Risk Classification", details: "Classifies acute cognitive stress, triggers breathing guidance, and alerts designated safety contacts upon critical distress thresholds." },
        { name: "Roadmap Progression", details: "Near-term vernacular language integration and mobile app rollout; long-term clinical trial validation and institutional student wellness deployment." },
      ],
    },
    technologies: ["Voice-First NLP", "Blender 3D CAD Modeling", "Biometric Sensor Protocols", "Sentiment Analysis", "Crisis Escalation Logic", "IoT Hardware Blueprint"],
    contribution: "Team Lead & SPOC, ML/NLP Architecture, presentation lead, and hackathon project management.",
    team: "FALCONS (Nikhil Pandey [SPOC], Karan Singh, Shubham Yadav, Abhishek Tiwari, Saksham Tripathi)",
    competition: "National Level Hackathon 360° 2.0 (St. Joseph's College of Engineering & ECLearnix)",
    year: "2025",
    status: "Round 2 Finalist Presentation & Hardware CAD Prototype",
    liveUrl: null,
    demoVideoUrl: null,
    githubUrl: null,
    presentation: {
      type: "Official Hackathon 360° Round 2 Final Deck",
      filename: "SATHI UPDATED FINAL.pdf",
      slideCount: 4,
      slides: [
        { num: 1, title: "Hackathon 360° Round 2 Final Submission", image: "/projects/sathi/sathi_p1_0.png", caption: "Team FALCONS identity, St. Joseph's College of Engineering & ECLearnix." },
        { num: 4, title: "SATHI — An Interactive Mental Stress Relief Companion", image: "/projects/sathi/sathi_p4_0.png", caption: "Core concept: 'A friend when you need one the most.'" },
        { num: 8, title: "Meet SATHI — Supportive Artificial Intelligence Therapist for Human Interaction", image: "/projects/sathi/sathi_p8_0.png", caption: "Voice-first, empathetic, always available companion architecture." },
        { num: 18, title: "Blueprint of the Smartband (Blender 3D Mesh)", image: "/projects/sathi/sathi_p18_0.png", caption: "CAD mesh blueprint of the wearable sensor-integrated smartband." },
      ],
    },
    highlights: [
      "Presented in Round 2 Finals of National Level Hackathon 360° 2.0",
      "Blender 3D CAD model of wearable biometric smartband",
      "Multidisciplinary 5-member team execution spanning ML, NLP, IoT, and Web",
    ],
  },
  {
    id: "kdsh-claim-verification",
    title: "Long-Context Claim Verification System (KDSH)",
    badge: "Data Science & NLP",
    subtitle: "AI-Powered Verification and Contradiction Detection Over Long Narrative Documents",
    problem: "Analyzing complex, lengthy narrative texts (novels, legal backstories, regulatory transcripts) to verify factual claims is plagued by model hallucination, context loss over long token horizons, and subtle character contradictions.",
    solution: "Engineered an end-to-end claim verification pipeline capable of chunking massive documents, retrieving precise contextual evidence through semantic indices, executing multi-hop logical verification, and rendering confidence-weighted decisions with automated PDF evidence reports.",
    corePhilosophy: "Deterministic evidence tracing: every verification decision is anchored to exact textual citations, confidence scores, and contradiction rationales.",
    architecture: {
      overview: "Pipeline Architecture for High-Context Verification",
      layers: [
        { name: "Document Ingestion & Chunking", details: "Adaptive sliding-window text chunking preserving narrative continuity and cross-boundary entity references." },
        { name: "Semantic Evidence Retrieval", details: "Vector embedding store utilizing Pathway indexing for rapid similarity search across multi-thousand word novel backstories." },
        { name: "Reasoning & Contradiction Engine", details: "Multi-hop logic evaluator that cross-references candidate claims against retrieved backstory evidence to determine Supported / Contradicted / Uncertain states." },
        { name: "Interactive Streamlit Web Dashboard", details: "Real-time inspection UI with confidence score distributions, decisions table, CSV export, and automated PDF dossier generation." },
      ],
    },
    technologies: ["Python", "Pathway", "Streamlit", "NLP Semantic Retrieval", "Vector Embeddings", "ReportLab PDF Generation"],
    contribution: "Developed system code, reasoning logic, Streamlit application, and technical report.",
    team: "The Crackerjacks",
    competition: "Kharagpur Data Science Hackathon (KDSH) 2026 (IIT Kharagpur)",
    year: "2026",
    status: "Complete Operational Tool & Submission",
    liveUrl: null,
    demoVideoUrl: null,
    githubUrl: null,
    presentation: {
      type: "Project Repository & Technical Report",
      filename: "crackerjacks_kdsh_2026.zip",
      slideCount: 4,
      slides: [
        { num: 1, title: "Interactive Streamlit Dashboard", image: "/projects/kdsh/02_app_homepage.png", caption: "Long-context claim verification interface and control panel." },
        { num: 2, title: "Confidence Score Distribution", image: "/projects/kdsh/01_confidence_distribution.png", caption: "Statistical visualization of model confidence across evaluated claims." },
        { num: 3, title: "Decisions & Contradictions Table", image: "/projects/kdsh/05_decisions_table.png", caption: "Structured output showing claim decisions, confidence metrics, and evidence traces." },
        { num: 4, title: "Generated PDF Verification Report", image: "/projects/kdsh/10_generated_pdf_report.png", caption: "Automated downloadable audit report with citation evidence." },
      ],
    },
    highlights: [
      "Built for the 6th Edition of Kharagpur Data Science Hackathon (KDAG, IIT Kharagpur)",
      "Automated evidence citation with confidence scores",
      "Integrated Streamlit web dashboard with instant PDF audit generation",
    ],
  },
  {
    id: "seva-upasak",
    title: "SevaUpasak",
    badge: "Social Impact Platform",
    subtitle: "Connecting NGOs and Volunteers for Community Goods Donations",
    problem: "Community welfare organizations, volunteers, and donors struggle with fragmented communication when coordinating donation drives for essential everyday goods such as clothing, non-perishable food, and educational supplies.",
    solution: "Social-impact platform concept connecting NGOs and volunteers and supporting donations of useful goods such as clothes and food, streamlining community outreach and volunteer coordination.",
    corePhilosophy: "Connecting community goodwill with verified grassroots NGOs to facilitate transparent donations of clothes, food, and essentials.",
    architecture: {
      overview: "High-Level Community Platform Concept",
      layers: [
        { name: "Donor & Volunteer Portal", details: "High-level concept interface for donors to browse community drives and coordinate usable donations like clothes and food." },
        { name: "NGO Coordination Hub", details: "Platform concept allowing verified local NGOs to post supply needs and manage volunteer coordination." },
        { name: "Donation Matchmaking Flow", details: "Structured directory matching donor items with active NGO requests across community hubs." },
      ],
    },
    technologies: ["React Native", "Expo", "TypeScript", "Mobile Application Concept", "Social Impact Tech"],
    contribution: "Conceptualized platform model, volunteer-NGO interaction flow, and initial application structure.",
    team: "Individual Project",
    competition: "Social Impact Innovation",
    year: "2025",
    status: "Application Concept & Prototype",
    liveUrl: null,
    demoVideoUrl: null,
    githubUrl: "https://github.com/NikhilPandeyBuilds",
    presentation: null,
    highlights: [
      "Social-impact platform concept connecting NGOs and volunteers",
      "Supports donations of useful goods such as clothes and food",
      "Designed for grassroots community collaboration without administrative overhead",
    ],
  },
];

/**
 * Official Hackathons & Competitions Timeline
 * Concise chronological competition record: answers "Where has Nikhil competed?"
 * Factual, exact official names, verified status only. No duplicate project architecture.
 */
export const hackathonsTimeline = [
  {
    id: "pitchathon",
    name: "Pitchathon 1.0",
    role: "First Runner-Up",
    teamName: "Binary Cracks",
    isHighlight: true,
    type: "Startup Pitching Competition",
    organizer: "Lokmanya Tilak College of Engineering (Autonomous)",
    year: "2025",
    projectId: "los",
    hasCertificate: false,
    certId: null,
    note: "Awarded First Runner-Up presenting the Learning Operating System (LOS).",
  },
  {
    id: "hackfusion",
    name: "HackFusion 2026",
    role: "Participated",
    teamName: "The Crackerjacks",
    isHighlight: false,
    type: "National Level Hackathon",
    organizer: "Sardar Patel Institute of Technology (SPIT), Mumbai",
    year: "2026",
    projectId: "careconnect",
    hasCertificate: true,
    certId: "cert-hackfusion",
    note: "Participated presenting CareConnect community health triage system.",
  },
  {
    id: "hackverse",
    name: "Hackverse 2026",
    role: "Participated",
    teamName: "Binary Cracks",
    isHighlight: false,
    type: "National Level Hackathon",
    organizer: "Hackverse Community",
    year: "2026",
    projectId: null,
    hasCertificate: true,
    certId: "cert-hackverse",
    note: "Participated in rapid software prototyping sprint.",
  },
  {
    id: "hackquinox",
    name: "HackQuinox 2.0",
    role: "Participated (Round 1)",
    teamName: "The Crackerjacks",
    isHighlight: false,
    type: "Competitive Hackathon",
    organizer: "FR. C. Rodrigues Institute of Technology (FCRIT), Navi Mumbai",
    year: "2026",
    projectId: "dharti",
    hasCertificate: true,
    certId: "cert-hackquinox",
    note: "Participated in Round 1 competitive sprint.",
  },
  {
    id: "kdsh",
    name: "Kharagpur Data Science Hackathon (KDSH) 2026",
    role: "Participated",
    teamName: "The Crackerjacks",
    isHighlight: false,
    type: "Data Science & AI Challenge",
    organizer: "Kharagpur Data Analytics Group (KDAG), IIT Kharagpur",
    year: "2026",
    projectId: "kdsh-claim-verification",
    hasCertificate: true,
    certId: "cert-kdsh",
    note: "Participated in Round 1 of the 6th Edition of KDSH.",
  },
  {
    id: "hackathon-360",
    name: "National Level Hackathon 360° 2.0",
    role: "Round 2 Finalist (SPOC)",
    teamName: "FALCONS",
    isHighlight: true,
    type: "National Level Hackathon",
    organizer: "St. Joseph's College of Engineering & ECLearnix EdTech",
    year: "2025",
    projectId: "sathi",
    hasCertificate: true,
    certId: "cert-hackathon-360",
    note: "Round 2 Finalist and team SPOC presenting SATHI.",
  },
  {
    id: "prosperity-pitch",
    name: "Prosperity Pitch Season 2: Policy Design Case Challenge",
    role: "Participated",
    teamName: "Collegiate Entry",
    isHighlight: false,
    type: "Policy Design & Pitching Challenge",
    organizer: "Invest UP x IIM Lucknow (Manfest-Varchasva 2025-26)",
    year: "2025 – 2026",
    projectId: null,
    hasCertificate: true,
    certId: "cert-prosperity-pitch",
    note: "Participated in state-level strategic policy design challenge.",
  },
  {
    id: "nation-building",
    name: "NationBuilding Case Study Competition 2026",
    role: "Participated (Online Round)",
    teamName: "Individual Entry",
    isHighlight: false,
    type: "National Case Study Competition",
    organizer: "Nation with NAMO / Unstop",
    year: "2026",
    projectId: null,
    hasCertificate: true,
    certId: "cert-nationbuilding",
    note: "Participated in national-level case study evaluation.",
  },
];

/**
 * Selective Achievements & Distinctions Only
 * Genuinely notable accomplishments, leadership, and awards.
 * Does NOT repeat generic hackathon participation.
 */
export const achievements = [
  {
    id: "pitchathon-runnerup",
    title: "Pitchathon 1.0 — First Runner-Up",
    badge: "Competition Award",
    description: "Secured First Runner-Up standing with team Binary Cracks presenting the Learning Operating System (LOS).",
    icon: "award",
  },
  {
    id: "hackathon-360-finalist",
    title: "National Level Hackathon 360° 2.0 — Round 2 Finalist (SPOC)",
    badge: "Finalist & Team Lead",
    description: "Led 5-member team FALCONS to Round 2 Finals of National Level Hackathon 360° presenting SATHI.",
    icon: "terminal",
  },
  {
    id: "sec-technical-vidya",
    title: "Technical Vidya — Secretary",
    badge: "Collegiate Leadership",
    description: "Appointed Secretary of Technical Vidya at Lokmanya Tilak College of Engineering, spearheading technical initiatives.",
    icon: "users",
  },
  {
    id: "csi-technical-sec",
    title: "CSI LTCE — Co-Technical Secretary",
    badge: "Collegiate Leadership",
    description: "Serving as Co-Technical Secretary of the Computer Society of India (CSI) student chapter at LTCE.",
    icon: "shield",
  },
  {
    id: "techpreneur-team",
    title: "TechPreneur 1.0 — Part of the Organizing Team",
    badge: "Collegiate Initiative",
    description: "Part of the organizing team for TechPreneur 1.0, a pan-India startup pitching competition connecting student founders with mentors.",
    icon: "globe",
  },
];

/**
 * 8 Verified Certificates with Exact Official Wording and Document Paths.
 * No generic placeholders.
 */
export const certifications = [
  {
    id: "cert-pravah",
    title: "Build and Ship a Real ML App (Pravah)",
    credentialType: "Certificate of Appreciation",
    badge: "Practical ML Training",
    issuer: "Lokmanya Tilak College of Engineering (GDG on Campus & CESA LTCE)",
    file: "/certificates/pravah-ml-workshop.jpg",
    fileType: "image",
    date: "2026",
    exactWording: "Certificate of Appreciation proudly presented to Nikhil Pandey for successfully completing the workshop 'Build and Ship a Real ML App,' demonstrating hands-on proficiency in end-to-end machine learning development, version control workflows, and production-grade cloud deployment.",
    tags: ["Machine Learning", "Cloud Deployment", "Version Control", "Production ML"],
  },
  {
    id: "cert-hackfusion",
    title: "HackFusion 2026",
    credentialType: "Certificate of Participation",
    badge: "Hackathon Certificate",
    issuer: "Sardar Patel Institute of Technology (SPIT), Mumbai",
    file: "/certificates/hackfusion-2026.pdf",
    fileType: "pdf",
    date: "2026",
    exactWording: "Certificate of Participation: This is to certify that Nikhil Pandey from Lokmanya Tilak College of Engineering (LTCE), Navi Mumbai, Maharashtra has participated in HackFusion 2026: Hackathon organised by Sardar Patel Institute of Technology (SPIT), Mumbai.",
    tags: ["Healthcare AI", "CareConnect", "SPIT Mumbai", "Hackathon"],
  },
  {
    id: "cert-hackverse",
    title: "Hackverse 2026",
    credentialType: "Certificate of Participation",
    badge: "Hackathon Certificate",
    issuer: "Hackverse (Team: Binary Cracks)",
    file: "/certificates/hackverse-2026.pdf",
    fileType: "pdf",
    date: "2026",
    exactWording: "Certificate of Participation: This certificate is proudly presented to Nikhil Pandey for successfully participating in HACKVERSE 2026 (Binary Cracks). Your enthusiasm, creativity, teamwork, and dedication throughout the hackathon have demonstrated exceptional commitment to innovation and technology.",
    tags: ["Team Binary Cracks", "Rapid Prototyping", "Hackverse 2026"],
  },
  {
    id: "cert-hackquinox",
    title: "HackQuinox 2.0 (Round 1)",
    credentialType: "Certificate of Participation",
    badge: "Hackathon Certificate",
    issuer: "FR. C. Rodrigues Institute of Technology (FCRIT), Navi Mumbai",
    file: "/certificates/hackquinox-2.0.pdf",
    fileType: "pdf",
    date: "2026",
    exactWording: "Certificate of Participation: This is to certify that Nikhil Pandey from Lokmanya Tilak College of Engineering (LTCE), Navi Mumbai, Maharashtra as Team The Crackerjacks has participated in Round 1 - HackQuinox 2026 of HackQuinox 2.0 organised by FR. C. Rodrigues Institute of Technology (FCRIT), Navi Mumbai.",
    tags: ["Team The Crackerjacks", "HackQuinox 2.0", "FCRIT"],
  },
  {
    id: "cert-kdsh",
    title: "Kharagpur Data Science Hackathon (KDSH) 2026",
    credentialType: "Certificate of Participation",
    badge: "Data Science Certificate",
    issuer: "Kharagpur Data Analytics Group, IIT Kharagpur",
    file: "/certificates/kdsh-2026.pdf",
    fileType: "pdf",
    date: "2026",
    exactWording: "Certificate of Participation is presented to Nikhil Pandey for successfully participating in the Round 1 of the 6th Edition of Kharagpur Data Science Hackathon, organized by Kharagpur Data Analytics Group, IIT Kharagpur.",
    tags: ["IIT Kharagpur", "KDSH 2026", "Data Analytics", "NLP Verification"],
  },
  {
    id: "cert-prosperity-pitch",
    title: "Prosperity Pitch Season 2: Policy Design Case Challenge",
    credentialType: "Certificate of Participation",
    badge: "Case Challenge Certificate",
    issuer: "Invest UP x IIM Lucknow (Manfest-Varchasva 2025-26)",
    file: "/certificates/prosperity-pitch-season-2.pdf",
    fileType: "pdf",
    date: "2025 – 2026",
    exactWording: "Certificate of Participation: This is to certify that Nikhil Pandey from Lokmanya Tilak College of Engineering (LTCE), Navi Mumbai, Maharashtra has participated in Prosperity Pitch Season 2: Policy Design Case Challenge by Invest UP x IIM Lucknow of Manfest-Varchasva 2025-26 organised by Indian Institute of Management (IIM), Lucknow.",
    tags: ["IIM Lucknow", "Invest UP", "Policy Design", "Economic Strategy"],
  },
  {
    id: "cert-nationbuilding",
    title: "NationBuilding Case Study Competition 2026",
    credentialType: "Certificate of Participation",
    badge: "National Competition",
    issuer: "Nation with NAMO / Unstop",
    file: "/certificates/nationbuilding-2026.pdf",
    fileType: "pdf",
    date: "2026",
    exactWording: "Certificate of Participation: This is proudly presented to Nikhil Pandey for participating in the Online Quiz Round of NationBuilding Case Study Competition 2026. An Initiative by Nation with NAMO.",
    tags: ["Nation with NAMO", "Unstop", "National Case Study"],
  },
  {
    id: "cert-hackathon-360",
    title: "National Level Hackathon 360° 2.0",
    credentialType: "Certificate of Participation",
    badge: "Hackathon Certificate",
    issuer: "St. Joseph's College of Engineering & ECLearnix EdTech",
    file: "/certificates/national-hackathon-360-2.0.pdf",
    fileType: "pdf",
    date: "2025",
    exactWording: "Certificate of Participation for participation in National Level Hackathon 360° 2.0 Organized by Department of Science, St. Joseph's College of Engineering & ECLearnix EdTech Private Limited held on 15th November 2025 showcasing outstanding Innovation, Creativity, and Problem-Solving Abilities.",
    tags: ["Team FALCONS", "SATHI", "ECLearnix", "St. Joseph's"],
  },
];

/**
 * Verified Technical Skills
 * Programming: Python, C++
 * AI/ML: Machine Learning, NLP, Sentiment Analysis, Generative AI, Agentic AI concepts
 * Engineering: Web Development, Application Development, Rapid Prototyping, Software Engineering, System Design
 * Tools: GitHub, VS Code, Docker, Firebase, Figma
 * Focus: Advanced AI/ML, Cloud Technologies, Product Development
 */
export const technicalSkills = {
  categories: [
    {
      name: "Programming",
      skills: ["Python", "C++"],
    },
    {
      name: "AI / ML",
      skills: [
        "Machine Learning",
        "NLP",
        "Sentiment Analysis",
        "Generative AI",
        "Agentic AI concepts",
      ],
    },
    {
      name: "Engineering",
      skills: [
        "Web Development",
        "Application Development",
        "Rapid Prototyping",
        "Software Engineering",
        "System Design",
      ],
    },
    {
      name: "Tools",
      skills: ["GitHub", "VS Code", "Docker", "Firebase", "Figma"],
    },
  ],
  focusAreas: ["Advanced AI/ML", "Cloud Technologies", "Product Development"],
  currentlyDeveloping: [
    { name: "Advanced AI/ML", note: "Device-resident inference, NLP pipelines & agentic architectures" },
    { name: "Cloud Technologies", note: "Distributed deployment, resilient backends & cloud storage" },
    { name: "Product Development", note: "Translating real-world workflows into scalable full-stack applications" },
  ],
};

export const buildingInPublic = {
  heading: "Connect & Follow My Work",
  statement: "I share technical notes on system architectures, hackathon prototypes, and engineering lessons.",
  description: "Open to discussions with founders, engineers, and researchers working on practical software systems, edge AI, and product architecture.",
  ctaText: "Connect on LinkedIn",
  linkedinUrl: "https://www.linkedin.com/in/nikhilpandeybharat/",
};

export const resumeData = {
  heading: "Nikhil Pandey",
  subheading: "B.Tech — Computer Science & Engineering (AI & Machine Learning)",
  institution: "Lokmanya Tilak College of Engineering, Navi Mumbai · Second Year",
  focusAreas: [
    "Advanced AI/ML",
    "Cloud Technologies",
    "Product Development",
  ],
  summary: "Building practical technology products at the intersection of AI/ML, software engineering, real-world problem solving, full-stack systems, intelligent applications, and rapid prototyping.",
  downloadUrl: "/resume/Nikhil_Pandey_Final_A4_Portrait_Resume_v4.pdf",
};

