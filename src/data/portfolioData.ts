import { Project, Experience, ArchitectureLog, SkillCategory } from '../types';


export const PERSONAL_INFO = {
  name: 'Davi Sabilissalim',
  initials: 'DS',
  role: 'Mobile Application Developer',

  shortBio:
    'Lulusan Teknik Informatika dari Universitas Yudharta Pasuruan dengan pengalaman belajar dan mengembangkan aplikasi selama 3–4 tahun. Berfokus pada pengembangan aplikasi mobile, pengembangan full-stack, serta membangun solusi digital yang praktis dan bermanfaat menggunakan Flutter, Dart, PHP, React dan teknologi web modern.',
  availability: 'Fresh Graduate | Open to Opportunities',
  availabilityPill: 'Fresh Graduate',

  location: 'Pasuruan, Indonesia',

  // Use verified statistics only.
  yearsExperience: '3–4Y',
  experienceCount: '—',
  productionApps: 'Published',
  uptime: '—',
  productionStacks: '—',

  email: 'davisabilissalimuyp@gmail.com',

  whatsapp: '+6281333154747',
  whatsappUrl: 'https://wa.me/6281333154747',

  github: 'https://github.com/Billyuu',
  linkedin:
    'https://www.linkedin.com/in/davi-sabilissalim-790a752b6/',
  instagram: 'https://instagram.com/dv.sblslm_',

  // Link CV online (kosongkan jika belum punya)
  readcv: '/CV.Davi_Sabilissalimnew.pdf',

  // Foto profil
  avatarImage: '/billy.png',

  // Foto ruang kerja atau proyek
  workspaceImage: '/wp.jpg',

  primaryStacks: 'Flutter / Dart / PHP / JavaScript / React',
};



export const PROJECTS: Project[] = [
  {
    id: 'musrenyuk',
    caseStudyNum: 'CASE STUDY 01',
    domain: 'MOBILE APPLICATION / DECISION SUPPORT SYSTEM',
    title: 'Musrenyuk — Village Development Proposal App',
    description:
      'A thesis project developed to support village development planning through a mobile application. Residents can submit proposals for physical and non-physical development, while administrators review submissions and manage their status.',
    fullBreakdown:
      'Musrenyuk connects community members and village administrators in the development planning process. Administrators can review proposals, evaluate priorities using the Analytical Hierarchy Process (AHP), and update each proposal status to In Progress, Approved, Rejected, Postponed, or Implemented.',
    architectureHighlights: [
      'Mobile application for submitting village development proposals',
      'Administrative interface for reviewing and managing proposals',
      'Analytical Hierarchy Process (AHP) for proposal prioritization',
      'Proposal status management throughout the review process',
      'Full-stack development involving mobile, backend, and database components',
    ],
    metrics: [],
    tags: [
      'Flutter',
      'Dart',
      'Laravel',
      'PHP',
      'MySQL',
      'JavaScript',
      'HTML',
      'CSS',
      'AHP', 'Figma',

    ],
    image: '/Musrenyukk.png',
    actionText: 'Explore Project Details',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.bily.musrenbang',

  },


  {
    id: 'cashier-app',
    caseStudyNum: 'CASE STUDY 02',
    domain: 'MOBILE APPLICATION DEVELOPMENT',
    title: 'ByCafe — Cashier Application',
    description:
      'A cashier application developed using Flutter and Dart, with Firebase as its backend service. The project focuses on building a mobile-based cashier solution to support transaction management and streamline daily café operations.',
    fullBreakdown:
      'ByCafe is a mobile cashier application built with Flutter and Dart. Firebase is used to support backend functionality and data management. The project demonstrates the implementation of cross-platform mobile development and cloud-based services for a café cashier system.',
    architectureHighlights: [
      'Cross-platform mobile application developed with Flutter',
      'Dart for application logic and user interface development',
      'Firebase integration for backend services and data management',
      'Mobile-based cashier application for café operations',
    ],
    metrics: [],
    tags: [
      'Flutter',
      'Dart',
      'Firebase', 'Figma',
    ],
    image: '/bycafe.png',
    actionText: 'Explore Project Details',
  },

];


export const CAPABILITIES: SkillCategory[] = [
  {
    category: 'Pengembangan Aplikasi Mobile',
    icon: 'smartphone',
    skills: [
      {
        name: 'Flutter',
        description:
          'Framework untuk membangun aplikasi mobile Android dan iOS menggunakan satu basis kode.',
      },
      {
        name: 'Dart',
        description:
          'Bahasa pemrograman yang digunakan untuk mengembangkan aplikasi menggunakan Flutter.',
      },
      {
        name: 'Mobile Application Development',
        description:
          'Pengalaman mengembangkan aplikasi mobile melalui proyek kuliah, proyek pribadi, dan proyek skripsi.',
      },
    ],
  },
  {
    category: 'Pengembangan Website',
    icon: 'web',
    skills: [
      {
        name: 'PHP',
        description:
          'Bahasa pemrograman sisi server untuk membangun aplikasi dan sistem berbasis web.',
      },
      {
        name: 'Laravel',
        description:
          'Framework PHP yang digunakan untuk mengembangkan backend dan aplikasi web.',
      },
      {
        name: 'JavaScript',
        description:
          'Bahasa pemrograman untuk menambahkan fungsi dan interaksi pada website.',
      },
      {
        name: 'HTML & CSS',
        description:
          'Teknologi dasar untuk menyusun struktur dan mengatur tampilan halaman website.',
      },
      {
        name: 'Bootstrap',
        description:
          'Framework CSS untuk membantu membuat tampilan website yang responsif.',
      },
      {
        name: 'React',
        description:
          'Library JavaScript untuk membangun antarmuka pengguna yang interaktif.',
      },
    ],
  },
  {
    category: 'Database & Integrasi Sistem',
    icon: 'database',
    skills: [
      {
        name: 'MySQL',
        description:
          'Database relasional untuk menyimpan, mengelola, dan mengambil data aplikasi.',
      },
      {
        name: 'Firebase',
        description:
          'Platform yang menyediakan layanan backend untuk mendukung pengembangan aplikasi.',
      },
      {
        name: 'API Integration',
        description:
          'Menghubungkan aplikasi dengan layanan atau sistem lain melalui API.',
      },
      {
        name: 'Full-Stack Development',
        description:
          'Pengembangan aplikasi yang mencakup bagian frontend, backend, dan pengelolaan database.',
      },
    ],
  },
  {
    category: 'Desain & Alat Pengembangan',
    icon: 'palette',
    skills: [
      {
        name: 'Figma',
        description:
          'Alat untuk merancang antarmuka dan membuat desain awal aplikasi atau website.',
      },
      {
        name: 'Git & GitHub',
        description:
          'Alat untuk mengelola versi kode dan menyimpan repositori proyek.',
      },
      {
        name: 'Visual Studio Code',
        description:
          'Editor kode yang digunakan untuk membantu proses pengembangan aplikasi dan website.',
      },
      {
        name: 'Android Studio',
        description:
          'Lingkungan pengembangan untuk mendukung pengerjaan aplikasi Android.',
      },
    ],
  },
];


export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    period: 'Proyek Skripsi',
    company: 'Musrenyuk',
    role: 'Mobile Application Developer / Full-Stack Developer',
    locationType: 'Proyek Akademik',
    description:
      'Mengembangkan Musrenyuk, aplikasi untuk membantu warga mengajukan usulan pembangunan desa. Aplikasi ini mendukung proses pengajuan usulan pembangunan fisik maupun nonfisik, pengelolaan usulan oleh admin, serta penentuan prioritas menggunakan metode Analytical Hierarchy Process (AHP).',
    achievements: [
      'Mengembangkan aplikasi mobile menggunakan Flutter dan Dart',
      'Membangun bagian backend menggunakan Laravel dan PHP',
      'Menggunakan MySQL untuk pengelolaan data aplikasi',
      'Mengimplementasikan metode AHP untuk membantu menentukan prioritas usulan pembangunan',
      'Mempublikasikan aplikasi Musrenyuk di Google Play Store',
    ],
    tags: ['Flutter', 'Dart', 'Laravel', 'PHP', 'MySQL', 'AHP'],
  },
  {
    id: 'exp-2',
    period: 'MSIB Batch 7',
    company: 'LearningX',
    role: 'Mobile Application Development',
    locationType: 'Program Pengembangan Kompetensi',
    description:
      'Mengikuti program MSIB Batch 7 melalui LearningX dengan fokus pada pengembangan aplikasi mobile. Program ini menjadi bagian dari proses pembelajaran dan pengembangan keterampilan di bidang pemrograman aplikasi.',
    achievements: [
      'Mempelajari pengembangan aplikasi mobile',
      'Mengerjakan proyek akhir program',
      'Mengembangkan pemahaman tentang proses pembuatan aplikasi',
    ],
    tags: ['Mobile Development', 'Flutter', 'Dart'],
  },
  {
    id: 'exp-3',
    period: 'Pengalaman Freelance',
    company: 'Proyek Website',
    role: 'Web Developer',
    locationType: 'Freelance',
    description:
      'Memiliki pengalaman mengerjakan proyek website secara freelance. Pengalaman ini membantu mengembangkan keterampilan dalam pembuatan website dan penerapan teknologi web sesuai kebutuhan proyek.',
    achievements: [
      'Mengerjakan proyek website berdasarkan kebutuhan yang diberikan',
      'Mengembangkan keterampilan pemrograman web melalui proyek nyata',
    ],
    tags: ['PHP', 'HTML', 'CSS', 'JavaScript'],
  },
];

export const ARCHITECTURE_LOGS: ArchitectureLog[] = [
  {
    id: 'log-1',
    version: 'PRINSIP 01',
    quote:
      '"Aplikasi yang baik tidak hanya berjalan, tetapi juga membantu menyelesaikan masalah."',
    explanation:
      'Pengembangan aplikasi dimulai dengan memahami kebutuhan pengguna dan merancang fitur yang benar-benar bermanfaat, seperti pada aplikasi Musrenyuk.',
    author: 'Prinsip Pengembangan Saya',
  },
  {
    id: 'log-2',
    version: 'PRINSIP 02',
    quote:
      '"Kode yang terstruktur memudahkan pengembangan dan pemeliharaan aplikasi."',
    explanation:
      'Pemisahan bagian aplikasi mobile, backend, dan database membantu menjaga struktur pengembangan agar lebih mudah dipahami dan dikembangkan.',
    author: 'Prinsip Pengembangan Saya',
  },
  {
    id: 'log-3',
    version: 'PRINSIP 03',
    quote:
      '"Belajar dan mencoba adalah bagian dari proses menjadi developer."',
    explanation:
      'Melalui proyek akademik, program pengembangan kompetensi, dan pengalaman freelance, saya terus belajar menerapkan keterampilan pemrograman untuk membangun solusi digital.',
    author: 'Prinsip Pengembangan Saya',
  },
];

