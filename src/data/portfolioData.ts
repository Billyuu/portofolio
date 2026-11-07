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
  readcv: '/CV.DAVISABILISSALIM.pdf',

  // Foto profil
  avatarImage: '/billy.png',

  // Foto ruang kerja atau proyek
  workspaceImage: '/wp.jpg',

  primaryStacks: 'Flutter / Dart / PHP / JavaScript / React',
};



export const PROJECTS: Project[] = [
  
{
  id: 'musrenyuk',
  caseStudyNum: 'STUDI KASUS 01',
  domain: 'APLIKASI MOBILE / SISTEM PENDUKUNG KEPUTUSAN',
  title: 'Musrenyuk — Aplikasi Usulan Pembangunan Desa',
  description:
    'Proyek Desa yang dikembangkan untuk mendukung perencanaan pembangunan desa melalui aplikasi mobile. Masyarakat dapat mengajukan usulan pembangunan fisik maupun nonfisik, sedangkan admin bertugas meninjau pengajuan dan mengelola status usulan.',
  fullBreakdown:
    'Musrenyuk menghubungkan masyarakat dan admin desa dalam proses perencanaan pembangunan. Admin dapat meninjau usulan, menentukan prioritas menggunakan metode Analytical Hierarchy Process (AHP), serta memperbarui status setiap usulan menjadi Sedang Diproses, Disetujui, Ditolak, Ditunda, atau Telah Dilaksanakan.',
  architectureHighlights: [
    'Aplikasi mobile untuk mengajukan usulan pembangunan desa',
    'Antarmuka admin untuk meninjau dan mengelola usulan masyarakat',
    'Penerapan metode Analytical Hierarchy Process (AHP) untuk menentukan prioritas usulan',
    'Pengelolaan status usulan selama proses peninjauan',
    'Pengembangan sistem secara menyeluruh meliputi aplikasi mobile, backend, dan database',
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
    'AHP',
    'Figma',
  ],
  image: '/Musrenyukk.png',
  actionText: 'Lihat Detail Proyek',
  playStoreUrl:
    'https://play.google.com/store/apps/details?id=com.bily.musrenbang',
},



  
{
  id: 'cashier-app',
  caseStudyNum: 'STUDI KASUS 02',
  domain: 'PENGEMBANGAN APLIKASI MOBILE / SISTEM KASIR',
  title: 'ByCafe — Aplikasi Kasir',
  description:
    'Aplikasi kasir berbasis mobile yang dikembangkan untuk mendukung kegiatan operasional ByCafe. Dibangun menggunakan Flutter dan Dart dengan Firebase sebagai layanan backend untuk membantu pengelolaan transaksi dan data operasional kafe.',
  fullBreakdown:
    'ByCafe merupakan aplikasi kasir yang dirancang untuk digunakan dalam operasional Cafe ByCafe. Aplikasi ini dikembangkan menggunakan Flutter dan Dart untuk membangun antarmuka serta fungsionalitas mobile, sedangkan Firebase dimanfaatkan sebagai layanan backend untuk mendukung pengelolaan data aplikasi.',
  architectureHighlights: [
    'Mengembangkan aplikasi kasir berbasis mobile menggunakan Flutter',
    'Menggunakan Dart untuk implementasi logika aplikasi dan antarmuka pengguna',
    'Mengintegrasikan Firebase sebagai layanan backend dan pengelolaan data',
    'Menerapkan aplikasi untuk mendukung kegiatan operasional Cafe ByCafe',
  ],
  metrics: [],
  tags: [
    'Flutter',
    'Dart',
    'Firebase',
    'Figma',
  ],
  image: '/bycafe.png',
  actionText: 'Lihat Detail Proyek',
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
          'Pengalaman mengembangkan aplikasi mobile melalui proyek akademik, proyek pribadi, dan proyek freelance.',
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
          'Pengembangan aplikasi yang mencakup frontend, backend, dan pengelolaan database.',
      },
    ],
  },
  {
    category: 'Internet of Things (IoT)',
    icon: 'iot',
    skills: [
      {
        name: 'ESP32',
        description:
          'Mikrokontroler yang digunakan dalam pengembangan perangkat IoT untuk membaca sensor dan mengendalikan perangkat elektronik.',
      },
      {
        name: 'Arduino IDE',
        description:
          'Integrated Development Environment untuk menulis, mengompilasi, dan mengunggah program ke mikrokontroler.',
      },
      {
        name: 'IoT System Integration',
        description:
          'Pengalaman mengintegrasikan perangkat penyiraman otomatis dan pendeteksi kesuburan tanah dengan sistem aplikasi.',
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
    period: 'Proyek Desa',
    company: 'Musrenyuk',
    role: 'Mobile Application Developer',
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
  id: 'exp-4',
  period: 'Pengalaman Organisasi',
  company: 'HUMANIKA',
  role: 'Wakil Ketua Himpunan Mahasiswa Teknik Informatika',
  locationType: 'Organisasi Kemahasiswaan',
  description:
    'Menjabat sebagai Wakil Ketua Himpunan Mahasiswa Teknik Informatika (HUMANIKA), dengan tanggung jawab membantu ketua dalam mengoordinasikan jalannya organisasi, mendukung pelaksanaan program kerja, serta menjaga koordinasi dan komunikasi antaranggota.',
  achievements: [
    'Membantu ketua dalam menjalankan dan mengoordinasikan kegiatan organisasi',
    'Berkoordinasi dengan pengurus dan anggota dalam pelaksanaan program kerja',
    'Mendukung perencanaan dan evaluasi kegiatan himpunan',
    'Membangun komunikasi dan kerja sama antaranggota organisasi',
  ],
  tags: [
    'Leadership',
    'Team Management',
    'Communication',
    'Organization',
    'Teamwork',
  ],
},

{
  id: 'exp-3',
  period: 'PPK Ormawa 2025',
  company: 'Smart Village',
  role: 'Web & IoT Developer',
  locationType: 'Program Nasional',
  description:
    'Mengembangkan inovasi Smart Village melalui program greenhouse berbasis AI untuk pemberdayaan petani krisan di Desa Tutur. Berkontribusi dalam pengembangan sistem penyiraman otomatis dan alat pendeteksi kesuburan tanah berbasis AI yang terintegrasi dalam satu aplikasi, serta pengembangan website pemasaran bunga krisan dan website desa.',
  achievements: [
    'Mengembangkan aplikasi untuk monitoring dan kontrol sistem penyiraman tanaman otomatis',
    'Berkontribusi dalam pengembangan alat pendeteksi kesuburan tanah berbasis AI menggunakan ESP32',
    'Mengintegrasikan dua perangkat IoT dalam satu aplikasi',
    'Mengembangkan website pemasaran bunga krisan menggunakan Laravel',
    'Mengembangkan website desa sebagai media informasi dan digitalisasi desa',
    'Berpartisipasi dalam program PPK Ormawa yang berhasil memperoleh pendanaan dan lolos seleksi nasional serta meraih penghargaan',
  ],
  tags: ['Laravel', 'PHP', 'ESP32', 'Arduino IDE', 'IoT', 'AI'],
},

  
{
  id: 'exp-3',
  period: 'Pengalaman Freelance',
  company: 'Proyek Website & Mobile App',
  role: 'Full-Stack Developer',
  locationType: 'Freelance',
  description:
    'Memiliki pengalaman mengembangkan website dan aplikasi mobile secara freelance. Terlibat dalam proses pengembangan aplikasi mulai dari implementasi antarmuka, pengelolaan data, hingga penerapan fitur sesuai kebutuhan proyek.',
  achievements: [
    'Mengembangkan website berdasarkan kebutuhan dan spesifikasi proyek',
    'Mengembangkan aplikasi mobile menggunakan Flutter dan Dart',
    'Mengimplementasikan fitur aplikasi dan mengelola integrasi dengan backend',
    'Mengembangkan antarmuka website menggunakan teknologi web',
    'Melakukan pengujian dan perbaikan untuk memastikan fungsionalitas aplikasi berjalan dengan baik',
  ],
  tags: [
    'Flutter',
    'Dart',
    'PHP',
    'Laravel',
    'MySQL',
    'HTML',
    'CSS',
    'JavaScript',
  ],
},

];

// // export const ARCHITECTURE_LOGS: ArchitectureLog[] = [
// //   {
// //     id: 'log-1',
// //     version: 'PRINSIP 01',
// //     quote:
// //       '"Aplikasi yang baik tidak hanya berjalan, tetapi juga membantu menyelesaikan masalah."',
// //     explanation:
// //       'Pengembangan aplikasi dimulai dengan memahami kebutuhan pengguna dan merancang fitur yang benar-benar bermanfaat, seperti pada aplikasi Musrenyuk.',
// //     author: 'Prinsip Pengembangan Saya',
// //   },
// //   {
// //     id: 'log-2',
// //     version: 'PRINSIP 02',
// //     quote:
// //       '"Kode yang terstruktur memudahkan pengembangan dan pemeliharaan aplikasi."',
// //     explanation:
// //       'Pemisahan bagian aplikasi mobile, backend, dan database membantu menjaga struktur pengembangan agar lebih mudah dipahami dan dikembangkan.',
// //     author: 'Prinsip Pengembangan Saya',
// //   },
// //   {
// //     id: 'log-3',
// //     version: 'PRINSIP 03',
// //     quote:
// //       '"Belajar dan mencoba adalah bagian dari proses menjadi developer."',
// //     explanation:
// //       'Melalui proyek akademik, program pengembangan kompetensi, dan pengalaman freelance, saya terus belajar menerapkan keterampilan pemrograman untuk membangun solusi digital.',
// //     author: 'Prinsip Pengembangan Saya',
// //   },
// ];

