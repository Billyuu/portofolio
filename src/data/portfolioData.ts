import { Project, Experience, ArchitectureLog, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Rendy Andrian',
  initials: 'RA',
  role: 'Senior Software & Mobile Architect',
  shortBio: 'Engineering robust distributed frontends, offline-first mobile systems, and mathematically disciplined digital architectures for forward-leaning ventures.',
  availability: 'Available for Q2 2026 Engagement',
  availabilityPill: 'Q2 2026 Direct',
  location: 'Jakarta, ID (UTC+7)',
  yearsExperience: '5Y+',
  experienceCount: '5+',
  productionApps: '24+',
  uptime: '99.9%',
  productionStacks: '10+',
  email: 'rendy@andrian.dev',
  whatsapp: '+62 812 3456 7890',
  whatsappUrl: 'https://wa.me/6281234567890',
  github: 'https://github.com/rendyandrian',
  linkedin: 'https://linkedin.com/in/rendyandrian',
  instagram: 'https://instagram.com',
  readcv: 'https://read.cv/rendyandrian',
  avatarImage: 'https://lh3.googleusercontent.com/aida/AEtjO1WKaJdcXSuyz9kGM_j7Gu_XfHJjJg3YY1_iwD6HIss4fKXutnaotOpeeZtidh46aWSfGCTP-7kvxEQEZCvcpXO967c6Tyz71DmJRIomHGeJFGLLl7YAbcT6HNrlb3gdx_HuXYIOnTtr-BE37x5U5Vmwl-V5GLzqEdRpSxnVI1at67v4P2lxyjJyuR194ZgIuk-RV3Dmlr65_SxqWV_QKvJuQgmDQyXyVyYfFn24e0D_KRwycxDWPo3DSWq6',
  workspaceImage: 'https://lh3.googleusercontent.com/aida/AEtjO1WGE5a7ohPB8H6ZRipiTx-jvjSBFAgMUft8VLj3RnnkSUyfwcASX-U2i2_xptIU_6F9lX9AnQMBVgBe3ZwlcQS6I-xaBvINqCZ7kG41-oSIUZjsZelmCZershgQZEu3MmDnU6l6TBrTuwYyfYKXqm8AHTG1dhqYevLfvqDr4N4qcm2pvVYhKMxEwwRchvfIZPgYCnaXutJqdaUjTfiyPvn80O_FtzW115On6FoEgvpvh0jDfsz6S45isEO5',
  primaryStacks: 'Flutter / React / Next.js',
};

export const PROJECTS: Project[] = [
  {
    id: 'ar-petshop',
    caseStudyNum: 'CASE STUDY 01',
    domain: 'MOBILE ARCHITECTURE',
    title: 'AR Petshop Attendance Management System',
    description:
      'Designed and implemented an offline-first mobile attendance pipeline featuring SQLite differential replication, micro-calendar bookings, and multi-tenant pet groomer schedules. Integrated strict location verification to curb fraudulent clock-ins.',
    fullBreakdown:
      'Designed for extreme real-world network turbulence across distributed animal care facilities. When pet groomers clock in inside basements or remote facilities without cellular connectivity, a local SQLite queue journals cryptographic clock-in payloads with differential vector timestamps. Upon signal restoration, peer-to-peer reconciliation resolves clock drift within 350ms.',
    architectureHighlights: [
      'Zero-data-loss differential delta queue with cryptographic SHA-256 local receipts',
      'Geofencing triangulation with dual-frequency GPS and mock-location anti-spoof checks',
      'Optimistic state updates rendered instantaneously on 120Hz Flutter canvas',
      'Battery-efficient background wake locks synchronized to shift transition windows',
    ],
    metrics: [
      {
        label: 'SYNCHRONIZATION',
        value: '< 350ms',
        subtext: 'Deterministic peer sync',
      },
      {
        label: 'CRASH RATE',
        value: '< 0.02%',
        subtext: 'Across 18,000+ sessions',
      },
    ],
    tags: ['Flutter', 'Dart', 'SQLite Vector Sync', 'REST API', 'Geofencing'],
    image:
      'https://lh3.googleusercontent.com/aida/AEtjO1X7p-9NcboEgsl0KsdBUf89rS0Dvw2UqTfjA9uDVdXOeRrNbjsrCFkqhrT7MrM85KUq82zQ8rmRyzn9xcR7VVDkkCrBOOUNp9JjUAYU5w8bYehy8hHlv4Zapl-si4D2AkWYkUjBCnRGPzuLvwm9Ni8GkVGGBonTxI-JpVTPBSzMt5enqMOK3SWyNySChDbQqLg4kJd6OZVsPXAfdk5fkLHXxgdIU_QXd_01CYAIUO9wEg7Curf-0R9irI5i',
    actionText: 'View Architecture Breakdown',
  },
  {
    id: 'bku-platform',
    caseStudyNum: 'CASE STUDY 02',
    domain: 'ENTERPRISE SAAS',
    title: 'BKU Operational Enterprise Platform',
    description:
      'Engineered high-concurrency ledger reconciliation dashboard servicing over $42M in quarterly transactions. Created a composable micro-frontend system allowing cross-functional financial audit teams to customize visualization widgets in real-time.',
    fullBreakdown:
      'Built for enterprise financial auditors processing massive ledger exports. The architecture leverages Module Federation with asynchronous micro-app isolation so audit modules operate independently without bundling overhead. Heavy transaction tables employ windowed DOM virtualization capable of butter-smooth 60fps scrolling across 50,000 active entries.',
    architectureHighlights: [
      'Micro-frontend runtime with isolated memory sandboxes to prevent memory leaks',
      'Canvas and Web Worker accelerated aggregation pipeline for multi-currency recalculations',
      'Strict TypeScript invariant checking across OpenAPI generated schema endpoints',
      'Role-based multi-tier audit trail with immutable snapshot diffing',
    ],
    metrics: [
      {
        label: 'RENDER SPEED',
        value: '60 FPS',
        subtext: 'Virtualized 50k rows',
      },
      {
        label: 'AUDIT THROUGHPUT',
        value: '+320%',
        subtext: 'Faster verification runs',
      },
    ],
    tags: ['React 18', 'Microfrontends', 'TypeScript', 'Tailwind CSS', 'Web Workers'],
    image:
      'https://lh3.googleusercontent.com/aida/AEtjO1XyWQMgk9tVfVzby7lupEzKvoEWv4GexEkiRib0wHpas3cvRjw3tZgj8kFofFjS1GWPYbFfytfoyV0r0rdrHQIL4Z0wiipMEQ4aFppygxZcuYLee0Muzd3-fXavShEs3EgtHM4SmdvnPft4cYYonGPumuwvkxk0NTEpnQKyL2xyElTRrou64iqLcqShHr7AnIxHSNx_wMA6cM6ZQmHk9V-gn1E9hciTyLwJhnJ3AyUrxTujz6nHSgYmktY',
    actionText: 'Explore Design System Architecture',
  },
  {
    id: 'libat-telehealth',
    caseStudyNum: 'CASE STUDY 03',
    domain: 'DIGITAL HEALTH',
    title: 'Libat Mobile Telehealth & Medicine Logistics',
    description:
      'Architected end-to-end encrypted medical dispatch application. Built cross-platform mobile patient records with local hardware keychain storage, dynamic queue management for prescription delivery, and secure telehealth appointment channels.',
    fullBreakdown:
      'Engineered to meet rigorous medical regulatory standards. Patient consultations stream over peer-to-peer WebRTC channels backed by turn servers with end-to-end SRTP encryption. Sensitive medical histories are protected via Android Keystore and iOS Secure Enclave with biometric challenge verification.',
    architectureHighlights: [
      'Hardware-level encryption for at-rest medical records via Secure Enclave',
      'Low-latency WebRTC consultation engine with dynamic adaptive bitrate fallback',
      'Dynamic dispatch algorithm optimizing courier cold-chain pharmaceutical routes',
      'Zero-knowledge compliance audit logging for HIPAA & national medical records law',
    ],
    metrics: [
      {
        label: 'COMPLIANCE',
        value: 'HIPAA/AES-256',
        subtext: 'Hardware-backed vaults',
      },
      {
        label: 'MONTHLY ACTIVE',
        value: '45,000+',
        subtext: 'Active patient logins',
      },
    ],
    tags: ['Flutter', 'Kotlin', 'WebRTC', 'Secure Enclave', 'AES-256'],
    image:
      'https://lh3.googleusercontent.com/aida/AEtjO1WyfnLMDxbl0ir5bnRh3mJHsS0KjajNTBJCSWqsFuByr2UJXysibx4PXG3o306Ro2mpnUWKLpdIbQp74Rejf9f9IUq2KubAFh3H5kxZ4qXCumrSnIHwIFt_h5DlgSANZnEkbO4g8sQV49lhQ1bDDcfvvGcNa3qRoEjwF3Ai5oKTh8DlQaJkkkDxlEtL4sbksCPSGgjHOQb3mr1xuKHrjvWrluGm2ouSZLGQvxeLzSS9zlTwaDE9WgN1fBpP',
    actionText: 'Read Healthcare Protocol Case',
  },
  {
    id: 'trisantara-portal',
    caseStudyNum: 'CASE STUDY 04',
    domain: 'EDGE WEB PLATFORM',
    title: 'Trisantara Corporate Engineering Portal',
    description:
      'Built ultra-fast, zero-JS-payload corporate showcase using Astro and Tailwind CSS. Implemented edge-rendered internationalization, automated content pipelines via headless CMS, and scored perfect 100/100 across all Google Lighthouse metrics.',
    fullBreakdown:
      'An architectural manifesto on hyper-optimized web performance. By stripping default client-side JavaScript execution down to isolated interactive islands, page hydration overhead was eradicated. Assets and edge workers cache HTML snapshots across global edge nodes, serving global visitors with sub-400ms First Contentful Paint.',
    architectureHighlights: [
      'Strict Zero-JS default payload with selective progressive hydration',
      'Edge-based geo-routing delivering language localization with zero runtime redirects',
      'Automated asset compilation pipeline minimizing critical path CSS to < 14KB',
      'Flawless 100/100 Core Web Vitals across Desktop and Mobile device profiles',
    ],
    metrics: [
      {
        label: 'LIGHTHOUSE SCORE',
        value: '100 / 100',
        subtext: 'Performance & Accessibility',
      },
      {
        label: 'FIRST CONTENTFUL',
        value: '0.4 sec',
        subtext: 'Global edge distribution',
      },
    ],
    tags: ['Astro 4.0', 'Tailwind CSS', 'Edge Workers', 'Headless CMS', 'Lighthouse 100'],
    image:
      'https://lh3.googleusercontent.com/aida/AEtjO1VFWwrlb5efrXOSQq2GE9Pn_ClnT_OWMW7YngQ4Y-i42SM5U8Cw5VkVl7tToNsRIb-YptZbEA4Mmkc30YC60QW4ro6t514TYAG8FVGLZbpiO9VSn4odRnXlFecx1mlRkUgLbiiMd2fsDlRBJVCVRedBaQ4LFaQpngZaHhrf_ZmLj8liI0F-Ie98t6zfnYKlaunnCvHBTwpcmF6jircuKheqeRTQOfOTZ7YeySZiGtRZhNeuiKBdT07i1MyM',
    actionText: 'View Performance Benchmarks',
  },
];

export const CAPABILITIES: SkillCategory[] = [
  {
    category: 'Mobile Ecosystem',
    icon: 'smartphone',
    skills: [
      { name: 'Flutter Engine', description: 'Cross-platform native compilation, custom render objects, and Skia/Impeller optimization.' },
      { name: 'Dart', description: 'Strong static typing, asynchronous streams, isolates, and ahead-of-time (AOT) compilation.' },
      { name: 'Kotlin / Swift Bridges', description: 'Platform channels, native hardware interop, sensors, and low-level background threads.' },
      { name: 'Offline SQLite Sync', description: 'Conflict-free replicated data types (CRDTs), vector clocks, and local caching.' },
      { name: 'Biometric Auth', description: 'Android BiometricPrompt, iOS FaceID/TouchID, Secure Enclave cryptographic keys.' },
    ],
  },
  {
    category: 'Web & Microfrontends',
    icon: 'web',
    skills: [
      { name: 'React 19', description: 'Server Components, optimistic UI hooks, concurrent rendering, and compiler optimization.' },
      { name: 'Next.js App Router', description: 'Edge runtimes, streaming SSR, parallel routes, and zero-bundle server actions.' },
      { name: 'TypeScript Strict', description: 'Nominal types, template literal types, AST analyzers, and strict null safety.' },
      { name: 'Astro SSG', description: 'Zero-JS by default, islands architecture, and edge-rendered internationalization.' },
      { name: 'Tailwind Engine', description: 'Design tokens, mathematical grid scales, fluid typography, and sub-pixel precision.' },
    ],
  },
  {
    category: 'Services & Cloud',
    icon: 'database',
    skills: [
      { name: 'Node.js / Express', description: 'Non-blocking I/O event loops, streaming responses, and resilient middleware.' },
      { name: 'PostgreSQL / Supabase', description: 'Row-level security, relational schemas, indexing strategies, and JSONB operators.' },
      { name: 'Laravel API', description: 'RESTful architectures, queue workers, job dispatches, and Eloquent ORM tuning.' },
      { name: 'GraphQL', description: 'Federated schema stitching, dataloader N+1 mitigation, and strict query cost limits.' },
      { name: 'Docker / CI/CD', description: 'Multi-stage container builds, reproducible environments, and automated test pipelines.' },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    period: '2024 — PRESENT',
    company: 'Studio Synthetix',
    role: 'Lead Software Engineer',
    locationType: 'Jakarta / Remote',
    description:
      'Spearhead architectural standards across multi-platform client applications. Designed distributed state synchronization primitives for mobile apps, cutting cold-boot loading times by 48%. Managed a squad of 7 engineers with strict code review and automated CI pipelines.',
    achievements: [
      'Engineered universal microfrontend blueprint adopted across 3 separate product verticals',
      'Cut cold-boot startup overhead from 1.8s to 930ms across heterogeneous Android devices',
      'Mentored and guided 7 senior and mid-level engineers with weekly architectural brownbags',
    ],
    tags: ['Microfrontends', 'Flutter Engine', 'Next.js', 'Turborepo', 'CI/CD'],
  },
  {
    id: 'exp-2',
    period: '2022 — 2024',
    company: 'Artha Digital',
    role: 'Senior Mobile & Web Engineer',
    locationType: 'Hybrid',
    description:
      'Led the mobile engineering squad delivering fintech payment and attendance tracking systems. Authored cross-platform encryption modules and reduced memory footprint by 35% through custom bitmap rendering caches.',
    achievements: [
      'Delivered offline-first cryptographic signature module handling $1.2M daily transactions',
      'Refactored legacy memory leaks, trimming Android baseline RAM usage by 35%',
      'Integrated biometric token storage adhering to ISO/IEC 27001 compliance standards',
    ],
    tags: ['Dart', 'React Native & Flutter', 'PostgreSQL', 'GraphQL', 'Fintech'],
  },
  {
    id: 'exp-3',
    period: '2021 — 2022',
    company: 'Nusantara Tech Labs',
    role: 'Frontend Engineer',
    locationType: 'On-site',
    description:
      'Developed high-traffic e-commerce web applications and interactive landing experiences. Initiated company-wide design tokens library, standardizing UI development velocity across 4 cross-functional squads.',
    achievements: [
      'Created shared core UI token system boosting component reusability by 65%',
      'Improved Google Core Web Vitals to 98+ on primary e-commerce product landing hubs',
      'Implemented automated regression testing with Jest, preventing deployment regressions',
    ],
    tags: ['React', 'TypeScript', 'Design Tokens', 'Jest', 'Responsive UI'],
  },
];

export const ARCHITECTURE_LOGS: ArchitectureLog[] = [
  {
    id: 'log-1',
    version: 'v26.4',
    quote: '"Great systems design is subtraction until only the unavoidable remains."',
    explanation:
      'Every interface transition, every asynchronous queue, and every SQL query is evaluated against latency budgets and ergonomic simplicity.',
    author: 'Rendy Andrian Notebook',
  },
  {
    id: 'log-2',
    version: 'v26.2',
    quote: '"Offline is not an error state; it is a standard condition of real-world computing."',
    explanation:
      'Mobile devices navigate basements, elevators, and transit tunnels. Applications must maintain operational parity irrespective of connectivity status.',
    author: 'Rendy Andrian Notebook',
  },
  {
    id: 'log-3',
    version: 'v25.9',
    quote: '"Type safety is the ultimate guardrail for cognitive bandwidth."',
    explanation:
      'Strict compiler contracts prevent whole classes of runtime anomalies, freeing engineering teams to focus on customer-facing sensory craftsmanship.',
    author: 'Rendy Andrian Notebook',
  },
];
