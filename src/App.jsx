import React, { useState, useEffect } from 'react';
import { 
  Award, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ShieldCheck, 
  ChevronLeft,
  ChevronRight, 
  CheckCircle2, 
  Download, 
  Sparkles, 
  User, 
  FileText, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Share2, 
  Copy, 
  Check, 
  Send, 
  Eye, 
  Upload, 
  Image as ImageIcon,
  Link,
  Camera,
  MessageCircle,
  Plus,
  HelpCircle,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Search,
  Bot
} from 'lucide-react';

const initialGalleryPhotos = [
  {
    id: 'photo-1',
    url: '/mc-geosphere.jpeg',
    images: ['/mc-geosphere.jpeg', '/mc-geosphere-2.jpeg', '/mc-geosphere-3.jpeg', '/mc-geosphare-4.jpeg', '/mc-geosphare-5.jpeg'],
    title: 'Master of Ceremony Geosphere',
    category: 'mc',
    categoryLabel: 'MC & Public Speaking',
    description: 'Memandu jalannya acara Geosphere Teknik Geomatika ITERA secara komunikatif dan interaktif.'
  },
  {
    id: 'photo-5',
    url: '/Pendamping%20Kelompok.jpeg',
    images: [
      '/Pendamping%20Kelompok.jpeg',
      '/Pendamping%20Kelompok-2.jpeg',
      '/Pendamping%20Kelompok-3.jpeg',
      '/Pendamping%20Kelompok-4.jpeg',
      '/Pendamping%20Kelompok-5.jpeg'
    ],
    title: 'Pendamping Kelompok PPLK ITERA',
    category: 'pplk',
    categoryLabel: 'PPLK ITERA',
    description: 'Bertugas mendampingi dan mengarahkan mahasiswa baru selama masa orientasi PPLK ITERA.'
  },
  {
    id: 'photo-riuh-wisuda',
    url: '/Riuh%20April.jpeg',
    images: [
      '/Riuh%20April.jpeg',
      '/Riuh%20April-2.jpeg',
      '/Riuh%20April-3.jpeg',
      '/Riuh%20April-4.jpeg',
      '/Riuh%20April-5.jpeg'
    ],
    title: 'Riuh Wisuda April Sub Div Medis',
    category: 'organisasi',
    categoryLabel: 'Organisasi & Akademik',
    description: 'Panitia riuh wisuda program studi teknik geomatika sub-div Medis.'
  },
  {
    id: 'photo-7',
    url: '/Foto%20Bersama.jpeg',
    images: [
      '/Foto%20Bersama.jpeg',
      '/Foto%20Bersama-2.jpeg',
      '/Foto%20Bersama-3.jpeg',
      '/Foto%20Bersama-4.jpeg',
      '/Foto%20Bersama-5.jpeg'
    ],
    title: 'Foto Bersama Teknik Geomatika ITERA Angkatan 2025',
    category: 'organisasi',
    categoryLabel: 'Organisasi & Akademik',
    description: 'Dokumentasi seluruh Mahasiswa Geomatika ITERA Angkatan 2025.'
  },
  {
    id: 'photo-8',
    url: '/PIK%20R.jpeg',
    images: [
      '/PIK%20R.jpeg',
      '/PIK%20R-2.jpeg',
      '/PIK%20R-3.jpeg',
      '/PIK%20R-4.jpeg',
      '/PIK%20R-5.jpeg'
    ],
    title: 'PIK-R SEJAHTERA',
    category: 'organisasi',
    categoryLabel: 'Organisasi & Akademik',
    description: 'Momen Perjalanan selama manjalani kegiatan di PIK-R SEJAHTERA.'
  },
  {
    id: 'photo-9',
    url: '/MC%20RIUH.jpeg',
    images: [
      '/MC%20RIUH.jpeg',
      '/MC%20RIUH-2.jpeg',
      '/MC%20RIUH-3.jpeg',
      '/MC%20RIUH-4.jpeg',
      '/MC%20RIUH-5.jpeg',
      '/MC%20RIUH-6.jpeg'
    ],
    title: 'Master of Ceremony Awarding Party Wisuda Juli',
    category: 'organisasi',
    categoryLabel: 'Organisasi & Akademik',
    description: 'Memandu jalannya acara dalam awarding party wisuda Juli.'
  }
];

const initialCvData = {
  personalInfo: {
    name: "Hafizuddin Ghani Ifkar",
    title: "Mahasiswa Teknik Geomatika | Student Ambassador | MC & Public Speaker",
    email: "hafizifkar@gmail.com",
    phone: "0889-2123-717",
    whatsapp: "https://wa.me/628892123717",
    linkedin: "https://www.linkedin.com/in/hafizifkar",
    instagram: "https://www.instagram.com/hafizuddinghanii?igsi=aWphcXBnZjY5YXRl",
    location: "Bandar Lampung, Indonesia",
    avatarUrl: "",
    bio: "Saya merupakan mahasiswa aktif semester 3 Program Studi Teknik Geomatika, Fakultas Teknologi Infrastruktur dan Kewilayahan, Institut Teknologi Sumatera (ITERA). Saya memiliki minat dan dedikasi yang kuat dalam pengembangan diri, kepemimpinan, komunikasi publik, public speaking, serta manajemen acara profesional. Saya berpengalaman sebagai Student Ambassador di SPARK (ShopeePay) dan PopSurvey by Populix. Selain itu, saya aktif terlibat dalam berbagai kegiatan serta memiliki pengalaman dalam penulisan karya sastra tingkat nasional. Pengalaman tersebut membantu saya mengembangkan kemampuan komunikasi, koordinasi, kepemimpinan, dan pengelolaan kegiatan secara profesional. Melalui berbagai pengalaman tersebut, saya terus mengembangkan kemampuan komunikasi, kepemimpinan, kerja sama tim, kreativitas, dan manajemen kegiatan. Saya terbuka terhadap kesempatan untuk belajar, berkolaborasi, dan memberikan kontribusi positif melalui setiap pengalaman yang saya jalani."
  },
  education: [
    {
      institution: "Institut Teknologi Sumatera (ITERA)",
      major: "Teknik Geomatika (Semester 3)",
      period: "2025 - Sekarang",
      description: "Fakultas Teknologi Infrastruktur dan Kewilayahan. Aktif berorganisasi dan menjadi ambassador kampus."
    },
    {
      institution: "SMAN 14 Bandar Lampung",
      major: "Merdeka / Pendidikan Menengah Atas",
      period: "2023 - 2025",
      description: "Aktif sebagai Koordinator Bidang Protokoler Paskibra SMAN 14 Bandar Lampung."
    }
  ],
  skills: {
    hardSkills: [
      "Pengoperasian Microsoft Office",
      "Google Colab",
      "Canva Design",
      "Manajemen Acara & Protokoler",
      "Pertolongan Medis Lapangan"
    ],
    softSkills: [
      "Komunikasi Publik (Public Speaking & MC)",
      "Kepemimpinan (Leadership)",
      "Kerja Sama Tim Lintas Disiplin",
      "Manajemen Waktu",
      "Adaptabilitas",
      "Tanggung Jawab & Kedisiplinan"
    ]
  },
  ambassadorRoles: [
    {
      company: "SPARK (ShopeePay)",
      role: "Student Ambassador",
      period: "Agustus 2026 - Sekarang",
      responsibilities: [
        "Mempromosikan layanan dan program ShopeePay kepada mahasiswa.",
        "Memberikan edukasi mengenai penggunaan dan berbagai fitur ShopeePay.",
        "Membantu meningkatkan brand awareness ShopeePay melalui kegiatan kampus."
      ]
    },
    {
      company: "PopSurvey by Populix",
      role: "Campus Ambassador",
      period: "Agustus 2026 - Sekarang",
      responsibilities: [
        "Menjadi representatif PopSurvey by Populix di lingkungan kampus.",
        "Memperkenalkan PopSurvey sebagai platform untuk membuat dan menjalankan survei.",
        "Mengedukasi mahasiswa mengenai penggunaan PopSurvey untuk kebutuhan riset."
      ]
    }
  ],
  organizations: [
    {
      role: "Anggota Muda",
      organization: "PIK-R Sejahtera ITERA",
      period: "Februari 2026 - Sekarang",
      details: "Berpartisipasi aktif dalam berbagai kegiatan organisasi dan pelaksanaan program kerja PIK-R Sejahtera."
    },
    {
      role: "Divisi Acara & Master of Ceremony (MC)",
      organization: "Malam Keakraban Teknik Geomatika 2025",
      period: "April 2026",
      details: "Menyusun alur acara terstruktur, mengoordinasikan waktu, dan memandu jalannya acara secara komunikatif."
    },
    {
      role: "Divisi Medis",
      organization: "Riuh Wisuda April Teknik Geomatika",
      period: "April 2026",
      details: "Menjamin ketersediaan perlengkapan medis dan memberikan pertolongan pertama selama rangkaian acara."
    },
    {
      role: "Divisi Acara & Master of Ceremony (MC)",
      organization: "Riuh Wisuda Juli Teknik Geomatika",
      period: "Juli 2026",
      details: "Mengoordinasikan pembagian waktu kegiatan dan bertindak sebagai MC utama."
    },
    {
      role: "Sub-Divisi Pendamping Kelompok",
      organization: "PPLK ITERA 2026",
      period: "Agustus 2026",
      details: "Mendampingi dan membimbing mahasiswa baru selama rangkaian kegiatan orientasi PPLK ITERA 2026."
    },
    {
      role: "Koordinator Bidang Protokoler",
      organization: "Paskibra SMAN 14 Bandar Lampung",
      period: "Juli 2023 - Juli 2024",
      details: "Mengelola teknis pelaksanaan upacara dan koordinasi protokoler guna memastikan ketertiban kegiatan."
    }
  ],
  publications: [
    {
      id: "pub-1",
      title: "Penulis Buku Antologi Puisi \"Aku Mau Jadi Apa?\"",
      publisher: "Penerbit CV. Cleopatra Mandiri",
      certNumber: "CLEO/2005/AP/2023",
      date: "20 Mei 2023",
      type: "antologi_puisi",
      imageUrl: "/antologi%20puisi.jpg",
      description: "Menulis dan menghasilkan karya puisi yang dipublikasikan dalam buku antologi nasional bertajuk 'Aku Mau Jadi Apa?'."
    },
    {
      id: "pub-2",
      title: "Penulis Buku \"Kumpulan Biografi Pahlawan Nasional\"",
      publisher: "Penerbit CV. Cleopatra Mandiri",
      certNumber: "CLEO/SOLO/1404/2023",
      date: "14 April 2023",
      type: "biografi_pahlawan",
      imageUrl: "/buku%20pahlawan.jpg",
      description: "Berkontribusi dalam penulisan buku sejarah yang mengangkat kisah biografi tokoh-tokoh pahlawan nasional Indonesia."
    }
  ],
  achievements: [
    {
      id: "ach-1",
      title: "Peraih Medali Emas (Gold Medalist)",
      event: "Kompetisi Siswa Braindicator (KSB) 2023",
      category: "Bahasa Indonesia (Predikat A+)",
      issuer: "Braindicator Indonesia",
      certNumber: "1158950 /P/BI/KSB/X/2023",
      date: "08 Oktober 2023",
      type: "ksb_gold",
      imageUrl: "/serifikat%20medali.jpg",
      description: "Meraih Medali Emas tingkat nasional dalam Kompetisi Siswa Braindicator pada bidang Bahasa Indonesia jenjang SMA/MA/SMK."
    },
    {
      id: "ach-2",
      title: "Ketua Protokoler Paskibra",
      event: "Sertifikat Paskibra SMAN 14 Bandar Lampung",
      category: "Kepemimpinan & Protokoler Periode 2023/2024",
      issuer: "SMA Negeri 14 Bandar Lampung",
      certNumber: "421.3/240/V.01/SMA/2025",
      date: "2025",
      type: "paskibra",
      imageUrl: "/sertifikat%20paskib.jpeg",
      description: "Sertifikat penghargaan sebagai Ketua Protokoler Pasukan Pengibar Bendera (Paskibra) SMAN 14 Bandar Lampung Periode 2023/2024."
    }
  ]
};

const initialFaqList = [
  {
    category: "MC & Public Speaking",
    question: "Apakah Hafizuddin menerima tawaran MC untuk acara di luar kampus ITERA?",
    answer: "Ya, tentu! Hafiz aktif memandu berbagai acara formal maupun informal, seperti seminar, gathering, malam keakraban, inaugurasi, hingga event komunitas di Bandar Lampung maupun daerah sekitarnya."
  },
  {
    category: "Ambassador & Kolaborasi Brand",
    question: "Bagaimana prosedur mengajak Hafiz berkolaborasi sebagai Student / Brand Ambassador?",
    answer: "Anda dapat langsung menghubungi Hafiz via WhatsApp atau Email. Hafiz berpengalaman sebagai Student Ambassador SPARK (ShopeePay) & PopSurvey by Populix untuk promosi kampus, kampanye edukasi, serta promosi produk secara profesional."
  },
  {
    category: "Keahlian & Pendidikan",
    question: "Program studi apa yang diambil Hafiz di ITERA dan apa keahlian utamanya?",
    answer: "Hafiz adalah mahasiswa aktif semester 3 Program Studi Teknik Geomatika di Institut Teknologi Sumatera (ITERA). Keahlian utamanya meliputi Public Speaking/MC, Manajemen Acara & Protokoler, Penulisan Karya Sastra, serta penguasaan perangkat lunak pemetaan dasar & Microsoft Office."
  },
  {
    category: "Speaker & Workshop",
    question: "Apakah Hafiz terbuka menjadi pembicara atau pemateri workshop public speaking / motivasi?",
    answer: "Sangat terbuka! Berkat pengalaman sebagai Pendamping Kelompok PPLK ITERA, Ketua Protokoler Paskibra, dan peraih Medali Emas Bahasa Indonesia, Hafiz siap menjadi pemateri motivasi orientasi, public speaking dasar, maupun keprotokolan."
  },
  {
    category: "Karya Sastra & Buku",
    question: "Bagaimana cara membaca atau memesan buku karya Hafizuddin Ghani Ifkar?",
    answer: "Karya buku antologi puisi 'Aku Mau Jadi Apa?' dan 'Kumpulan Biografi Pahlawan Nasional' diterbitkan oleh CV. Cleopatra Mandiri. Anda bisa mendiskusikan ketersediaan atau cetakan fisik langsung via kontak WhatsApp Hafiz."
  }
];

const FallbackCertificateSVG = ({ type, title, recipient, certNumber, date, issuer }) => {
  if (type === 'ksb_gold') {
    return (
      <svg viewBox="0 0 800 560" className="w-full h-auto shadow-2xl rounded-lg border border-purple-500/30">
        <rect width="800" height="560" fill="#ffffff" />
        <rect x="20" y="20" width="760" height="520" fill="none" stroke="#e9d5ff" strokeWidth="6" />
        <rect x="30" y="30" width="740" height="500" fill="none" stroke="#a855f7" strokeWidth="2" />
        <path d="M 30 30 L 220 30 L 30 220 Z" fill="#9333ea" />
        <path d="M 30 530 L 220 530 L 30 340 Z" fill="#7e22ce" />
        <path d="M 770 530 L 580 530 L 770 340 Z" fill="#a855f7" opacity="0.8" />
        <text x="400" y="110" textAnchor="middle" fill="#581c87" fontSize="36" fontFamily="Georgia, serif" fontWeight="bold">Piagam Penghargaan</text>
        <text x="400" y="145" textAnchor="middle" fill="#6b21a8" fontSize="14" fontFamily="sans-serif">No : {certNumber || "1158950 /P/BI/KSB/X/2023"}</text>
        <text x="400" y="180" textAnchor="middle" fill="#64748b" fontSize="13" fontFamily="sans-serif">PIAGAM INI DIBERIKAN KEPADA</text>
        <text x="400" y="225" textAnchor="middle" fill="#1e1b4b" fontSize="26" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1">{recipient.toUpperCase()}</text>
        <line x1="200" y1="240" x2="600" y2="240" stroke="#9333ea" strokeWidth="2" />
        <text x="400" y="270" textAnchor="middle" fill="#334155" fontSize="14" fontFamily="sans-serif">SMAN 14 BANDAR LAMPUNG • Prov. Lampung</text>
        <text x="400" y="295" textAnchor="middle" fill="#6b21a8" fontSize="16" fontFamily="sans-serif" fontWeight="bold">Bahasa Indonesia (SMA/MA/SMK)</text>
        <text x="400" y="340" textAnchor="middle" fill="#475569" fontSize="13" fontFamily="sans-serif">atas partisipasinya di ajang kompetisi tingkat nasional bertajuk KSB (Kompetisi Siswa Braindicator)</text>
        <text x="400" y="365" textAnchor="middle" fill="#475569" fontSize="13" fontFamily="sans-serif">pada tanggal {date} dengan predikat A+, sebagai</text>
        <text x="400" y="415" textAnchor="middle" fill="#b45309" fontSize="28" fontFamily="Georgia, serif" fontWeight="bold">Peraih Medali Emas</text>
        <circle cx="120" cy="440" r="35" fill="#eab308" stroke="#ca8a04" strokeWidth="3" />
        <text x="120" y="446" textAnchor="middle" fill="#78350f" fontSize="12" fontWeight="bold">GOLD</text>
        <text x="600" y="480" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">Panitia KSB 2023</text>
      </svg>
    );
  }

  if (type === 'paskibra') {
    return (
      <svg viewBox="0 0 800 560" className="w-full h-auto shadow-2xl rounded-lg border border-red-500/30">
        <rect width="800" height="560" fill="#fafafa" />
        <rect x="25" y="25" width="750" height="510" fill="none" stroke="#dc2626" strokeWidth="3" />
        <rect x="35" y="35" width="730" height="490" fill="none" stroke="#991b1b" strokeWidth="1" />
        <text x="400" y="80" textAnchor="middle" fill="#991b1b" fontSize="22" fontFamily="sans-serif" fontWeight="bold">SMA NEGERI 14 BANDAR LAMPUNG</text>
        <text x="400" y="105" textAnchor="middle" fill="#1e293b" fontSize="18" fontFamily="sans-serif" fontWeight="bold">PASUKAN PENGIBAR BENDERA (PASKIBRA)</text>
        <text x="400" y="125" textAnchor="middle" fill="#64748b" fontSize="11" fontFamily="sans-serif">Alamat: Perum Bukit Kemiling Permai No.109, Kemiling, Bandar Lampung</text>
        <line x1="60" y1="140" x2="740" y2="140" stroke="#1e293b" strokeWidth="2" />
        <text x="400" y="195" textAnchor="middle" fill="#0f172a" fontSize="36" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="4">SERTIFIKAT</text>
        <text x="400" y="225" textAnchor="middle" fill="#475569" fontSize="13" fontFamily="sans-serif">No. {certNumber || "421.3/240/V.01/SMA/2025"}</text>
        <text x="400" y="270" textAnchor="middle" fill="#64748b" fontSize="14" fontFamily="sans-serif">Diberikan Kepada:</text>
        <text x="400" y="315" textAnchor="middle" fill="#991b1b" fontSize="26" fontFamily="Georgia, serif" fontWeight="bold">{recipient.toUpperCase()}</text>
        <line x1="220" y1="325" x2="580" y2="325" stroke="#991b1b" strokeWidth="1.5" />
        <text x="400" y="360" textAnchor="middle" fill="#1e293b" fontSize="15" fontFamily="sans-serif" fontWeight="bold">SEBAGAI :</text>
        <text x="400" y="390" textAnchor="middle" fill="#0f172a" fontSize="18" fontFamily="sans-serif" fontWeight="bold">Ketua Protokoler Paskibra SMAN 14 Bandar Lampung</text>
        <text x="400" y="415" textAnchor="middle" fill="#475569" fontSize="14" fontFamily="sans-serif">PERIODE 2023/2024</text>
        <text x="200" y="480" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">Kepala Sekolah</text>
        <text x="200" y="500" textAnchor="middle" fill="#475569" fontSize="11">Hi. Hendra Putra, S.Pd., M.Pd</text>
        <text x="600" y="480" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold">Pembina Paskibra</text>
        <text x="600" y="500" textAnchor="middle" fill="#475569" fontSize="11">Imelda Susan, S.Pd.</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 800 560" className="w-full h-auto shadow-2xl rounded-lg border border-amber-500/30">
      <rect width="800" height="560" fill="#fffbeb" />
      <rect x="25" y="25" width="750" height="510" fill="none" stroke="#d97706" strokeWidth="4" />
      <rect x="35" y="35" width="730" height="490" fill="none" stroke="#b45309" strokeWidth="1" strokeDasharray="6,6" />
      <text x="400" y="120" textAnchor="middle" fill="#b45309" fontSize="36" fontFamily="Georgia, serif" fontWeight="bold">Sertifikat Penghargaan</text>
      <text x="400" y="160" textAnchor="middle" fill="#78350f" fontSize="15" fontFamily="sans-serif">{certNumber || "CLEO/SOLO/1404/2023"}</text>
      <text x="400" y="210" textAnchor="middle" fill="#92400e" fontSize="14" fontStyle="italic">Diberikan Kepada :</text>
      <text x="400" y="265" textAnchor="middle" fill="#451a03" fontSize="30" fontFamily="sans-serif" fontWeight="bold">{recipient}</text>
      <text x="400" y="325" textAnchor="middle" fill="#78350f" fontSize="20" fontFamily="sans-serif">{title}</text>
      <text x="400" y="380" textAnchor="middle" fill="#92400e" fontSize="14">{issuer || "CV. Cleopatra Mandiri"} • Bandung, {date}</text>
      <circle cx="400" cy="450" r="30" fill="#d97706" opacity="0.8" />
      <text x="400" y="455" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">OFFICIAL</text>
    </svg>
  );
};

export default function App() {
  const [cvData] = useState(initialCvData);
  const [galleryPhotos, setGalleryPhotos] = useState(initialGalleryPhotos);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [copiedItem, setCopiedItem] = useState('');
  const [selectedItemModal, setSelectedItemModal] = useState(null);
  const [selectedPhotoModal, setSelectedPhotoModal] = useState(null);
  const [selectedPhotoImageIndex, setSelectedPhotoImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [customImageUrls, setCustomImageUrls] = useState({});
  const [profilePhotoUrl, setProfilePhotoUrl] = useState('/profile.jpeg');
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modal State for Admin PIN & Actions
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);
  const [inputPin, setInputPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [photoToDeleteId, setPhotoToDeleteId] = useState(null);
  const [formError, setFormError] = useState('');

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRoleText, setDisplayedRoleText] = useState('');
  const [isDeletingRole, setIsDeletingRole] = useState(false);

  // Q&A / Tanya Jawab State
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [userQuestionText, setUserQuestionText] = useState('');
  const [botAnswers, setBotAnswers] = useState([
    {
      sender: 'bot',
      text: 'Halo! Saya Asisten Otomatis Portfolio Hafizuddin. Punya pertanyaan mengenai MC, Kolaborasi Student Ambassador, atau Jadwal Kegiatan Hafiz? Silakan pilih pertanyaan populer di atas atau tuliskan pertanyaan Anda di bawah ini!'
    }
  ]);

  const rolesList = [
    "Mahasiswa Teknik Geomatika ITERA 📐",
    "Student Ambassador SPARK (ShopeePay) 💳",
    "Campus Ambassador PopSurvey by Populix 📊",
    "Master of Ceremony & Public Speaker 🎤",
    "Gold Medalist Bahasa Indonesia 🏆",
    "Penulis Buku Antologi Puisi ✍️"
  ];

  useEffect(() => {
    const targetText = rolesList[currentRoleIndex];
    const typingSpeed = isDeletingRole ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeletingRole) {
        setDisplayedRoleText(targetText.substring(0, displayedRoleText.length + 1));
        if (displayedRoleText === targetText) {
          setTimeout(() => setIsDeletingRole(true), 2000);
        }
      } else {
        setDisplayedRoleText(targetText.substring(0, displayedRoleText.length - 1));
        if (displayedRoleText === '') {
          setIsDeletingRole(false);
          setCurrentRoleIndex((prev) => (prev + 1) % rolesList.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedRoleText, isDeletingRole, currentRoleIndex]);

  const [isAdmin, setIsAdmin] = useState(false);
  const [isAddPhotoModalOpen, setIsAddPhotoModalOpen] = useState(false);
  const [newPhotoData, setNewPhotoData] = useState({
    title: '',
    category: 'mc',
    categoryLabel: 'MC & Public Speaking',
    description: '',
    url: ''
  });

  const categoryOptions = [
    { value: 'mc', label: 'MC & Public Speaking' },
    { value: 'pplk', label: 'PPLK ITERA' },
    { value: 'organisasi', label: 'Organisasi & Akademik' }
  ];

  const handlePhotoFileUpload = (id, event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setGalleryPhotos(prev => prev.map(p => p.id === id ? { ...p, url } : p));
      if (selectedPhotoModal && selectedPhotoModal.id === id) {
        setSelectedPhotoModal(prev => ({ ...prev, url }));
      }
    }
  };

  const toggleAdminMode = () => {
    if (isAdmin) {
      setIsAdmin(false);
    } else {
      setInputPin('');
      setPinError('');
      setIsPinModalOpen(true);
    }
  };

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (inputPin === '1234') {
      setIsAdmin(true);
      setIsPinModalOpen(false);
      setInputPin('');
      setPinError('');
    } else {
      setPinError('PIN Salah! Gunakan PIN default: 1234');
    }
  };

  const handleAddPhotoSubmit = (e) => {
    e.preventDefault();
    if (!newPhotoData.url || !newPhotoData.title) {
      setFormError('Harap isi judul dan pilih/masukkan foto terlebih dahulu.');
      return;
    }
    setFormError('');

    const newPhoto = {
      id: `photo-${Date.now()}`,
      url: newPhotoData.url,
      title: newPhotoData.title,
      category: newPhotoData.category,
      categoryLabel: newPhotoData.categoryLabel,
      description: newPhotoData.description || 'Dokumentasi kegiatan Hafizuddin Ghani Ifkar.'
    };

    setGalleryPhotos([newPhoto, ...galleryPhotos]);
    setIsAddPhotoModalOpen(false);
    setNewPhotoData({
      title: '',
      category: 'mc',
      categoryLabel: 'MC & Public Speaking',
      description: '',
      url: ''
    });
  };

  const handleNewPhotoFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setNewPhotoData(prev => ({ ...prev, url }));
      setFormError('');
    }
  };

  const confirmDeletePhoto = (id) => {
    setGalleryPhotos(prev => prev.filter(p => p.id !== id));
    if (selectedPhotoModal && selectedPhotoModal.id === id) {
      setSelectedPhotoModal(null);
    }
    setPhotoToDeleteId(null);
  };

  const openPhotoModal = (photo) => {
    setSelectedPhotoModal(photo);
    setSelectedPhotoImageIndex(0);
  };

  const navigatePhoto = (direction) => {
    if (!selectedPhotoModal || galleryPhotos.length < 2) return;

    const photoImages = selectedPhotoModal.images || [selectedPhotoModal.url];
    if (photoImages.length > 1) {
      const nextImageIndex = (selectedPhotoImageIndex + direction + photoImages.length) % photoImages.length;
      setSelectedPhotoImageIndex(nextImageIndex);
      return;
    }

    const currentIndex = galleryPhotos.findIndex(photo => photo.id === selectedPhotoModal.id);
    if (currentIndex === -1) return;

    const nextIndex = (currentIndex + direction + galleryPhotos.length) % galleryPhotos.length;
    setSelectedPhotoModal(galleryPhotos[nextIndex]);
    setSelectedPhotoImageIndex(0);
  };

  const handlePhotoTouchEnd = (event) => {
    if (touchStartX === null) return;

    const swipeDistance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(swipeDistance) >= 50) {
      navigatePhoto(swipeDistance < 0 ? 1 : -1);
    }

    setTouchStartX(null);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const revealElements = () => {
      const elements = document.querySelectorAll('.reveal-item');
      const viewportThreshold = window.innerHeight * 0.9;

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < viewportThreshold && rect.bottom > 0;

        if (isVisible) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };

    revealElements();
    window.addEventListener('scroll', revealElements, { passive: true });
    window.addEventListener('resize', revealElements);

    return () => {
      window.removeEventListener('scroll', revealElements);
      window.removeEventListener('resize', revealElements);
    };
  }, []);

  const copyToClipboard = async (text, label) => {
    let success = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        success = true;
      }
    } catch (err) {
      // Fallback
    }

    if (!success) {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
        success = true;
      } catch (fallbackErr) {
        console.warn('Copy to clipboard failed:', fallbackErr);
      }
    }

    if (success) {
      setCopiedItem(label);
      setTimeout(() => setCopiedItem(''), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleProfilePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfilePhotoUrl(url);
    }
  };

  const handleProfilePhotoUrlInput = () => {
    const url = prompt("Masukkan URL/Link langsung foto profil Anda:");
    if (url && url.trim() !== "") {
      setProfilePhotoUrl(url.trim());
    }
  };

  const handleFileUpload = (id, event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomImageUrls(prev => ({ ...prev, [id]: url }));
    }
  };

  const handleUrlInput = (id) => {
    const url = prompt("Masukkan URL/Link langsung foto sertifikat Anda:");
    if (url && url.trim() !== "") {
      setCustomImageUrls(prev => ({ ...prev, [id]: url.trim() }));
    }
  };

  const handleAskQuestion = (qText) => {
    const questionToAsk = qText || userQuestionText;
    if (!questionToAsk.trim()) return;

    const userMsg = { sender: 'user', text: questionToAsk };
    setBotAnswers(prev => [...prev, userMsg]);

    const lowerQ = questionToAsk.toLowerCase();
    let replyText = "";

    if (lowerQ.includes('mc') || lowerQ.includes('acara') || lowerQ.includes('event')) {
      replyText = "Hafizuddin berpengalaman sebagai Master of Ceremony (MC) di berbagai acara seperti Geosphere ITERA, Wisuda Teknik Geomatika, dan Malam Keakraban. Hafiz terbuka untuk tawaran pemanduan acara formal maupun informal!";
    } else if (lowerQ.includes('ambassador') || lowerQ.includes('shopeepay') || lowerQ.includes('populix') || lowerQ.includes('brand')) {
      replyText = "Saat ini Hafiz aktif sebagai Student Ambassador SPARK (ShopeePay) dan Campus Ambassador PopSurvey by Populix. Siap mempromosikan produk/brand Anda kepada komunitas mahasiswa!";
    } else if (lowerQ.includes('kontak') || lowerQ.includes('wa') || lowerQ.includes('whatsapp') || lowerQ.includes('email') || lowerQ.includes('hubungi')) {
      replyText = "Anda dapat menghubungi Hafiz via WhatsApp di 0889-2123-717 atau email hafizifkar@gmail.com. Tombol kontak langsung juga tersedia di bagian bawah website.";
    } else if (lowerQ.includes('kuliah') || lowerQ.includes('itera') || lowerQ.includes('jurusan') || lowerQ.includes('geomatika')) {
      replyText = "Hafiz adalah mahasiswa semester 3 Program Studi Teknik Geomatika, Fakultas Teknologi Infrastruktur dan Kewilayahan, Institut Teknologi Sumatera (ITERA).";
    } else if (lowerQ.includes('prestasi') || lowerQ.includes('emas') || lowerQ.includes('lomba') || lowerQ.includes('juara')) {
      replyText = "Hafiz meraih Medali Emas (Gold Medalist) tingkat nasional pada Kompetisi Siswa Braindicator (KSB) 2023 bidang Bahasa Indonesia dengan Predikat A+.";
    } else {
      replyText = `Terima kasih atas pertanyaannya mengenai "${questionToAsk}". Pertanyaan Anda sudah tersimpan. Jika butuh jawaban cepat, Anda bisa langsung meneruskannya ke WhatsApp Hafiz!`;
    }

    setTimeout(() => {
      setBotAnswers(prev => [...prev, { sender: 'bot', text: replyText, queryText: questionToAsk }]);
    }, 400);

    setUserQuestionText('');
  };

  const handleSendFaqToWa = (q, a) => {
    const message = `Halo Hafiz, saya ingin bertanya lebih lanjut mengenai: "${q}"`;
    const waUrl = `https://wa.me/628892123717?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  const filteredFaqs = initialFaqList.filter(item => 
    item.question.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(faqSearchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {}
      <nav className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${isDarkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-md shadow-sky-500/20">
              HG
            </div>
            <div>
              <span className="font-extrabold text-base sm:text-lg tracking-tight block leading-tight">
                Hafizuddin Ghani Ifkar
              </span>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
                Teknik Geomatika ITERA
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-sky-400 transition-colors">Tentang Saya</a>
            <a href="#ambassador" className="hover:text-sky-400 transition-colors">Ambassador</a>
            <a href="#organization" className="hover:text-sky-400 transition-colors">Pengalaman</a>
            <a href="#works" className="hover:text-sky-400 transition-colors">Karya & Kompetisi</a>
            <a href="#gallery" className="hover:text-sky-400 transition-colors">Galeri Foto</a>
            <a href="#faq" className="hover:text-sky-400 transition-colors flex items-center gap-1 font-semibold text-sky-400">
              <HelpCircle className="w-4 h-4" />
              <span>Tanya Jawab</span>
            </a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">Kontak</a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsShareModalOpen(true)}
              className={`p-2 rounded-xl border transition-all ${isDarkMode ? 'bg-slate-900 border-slate-800 hover:bg-slate-800' : 'bg-white border-slate-200 hover:bg-slate-100'}`}
              title="Bagikan Portfolio"
            >
              <Share2 className="w-4 h-4 text-sky-400" />
            </button>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-xl border transition-all ${isDarkMode ? 'bg-slate-900 border-slate-800 hover:bg-slate-800' : 'bg-white border-slate-200 hover:bg-slate-100'}`}
              title="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-slate-800 bg-slate-900 text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={`md:hidden border-b px-4 py-4 space-y-3 ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sm py-1 font-medium hover:text-sky-400">Tentang Saya</a>
            <a href="#ambassador" onClick={() => setMobileMenuOpen(false)} className="block text-sm py-1 font-medium hover:text-sky-400">Ambassador</a>
            <a href="#organization" onClick={() => setMobileMenuOpen(false)} className="block text-sm py-1 font-medium hover:text-sky-400">Pengalaman</a>
            <a href="#works" onClick={() => setMobileMenuOpen(false)} className="block text-sm py-1 font-medium hover:text-sky-400">Karya & Kompetisi</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block text-sm py-1 font-medium hover:text-sky-400">Galeri Foto</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-sm py-1 font-semibold text-sky-400">Tanya Jawab (Q&A)</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm py-1 font-medium hover:text-sky-400">Kontak</a>
          </div>
        )}
      </nav>

      {}
      <section className="reveal-item relative overflow-hidden py-16 sm:py-24 border-b border-slate-800/40">
        <style>{`
          @keyframes textGlowShimmer {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-text-shimmer {
            background-size: 200% auto;
            animation: textGlowShimmer 5s ease infinite;
          }
          @keyframes cursorBlink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-cursor {
            animation: cursorBlink 0.8s infinite;
          }
          @keyframes floatSubtle {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
          .animate-float {
            animation: floatSubtle 3.5s ease-in-out infinite;
          }
          @keyframes pulseGlow {
            0%, 100% { opacity: 0.35; transform: scale(1); }
            50% { opacity: 0.65; transform: scale(1.08); }
          }
          .animate-pulse-glow {
            animation: pulseGlow 6s ease-in-out infinite;
          }
        `}</style>

        <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-8 space-y-6">

              <div className="reveal-item inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold shadow-md backdrop-blur-md animate-float">
                <Sparkles className="w-4 h-4 text-sky-400 shrink-0 animate-pulse" />
                <span className="font-mono tracking-tight font-bold text-sky-300">
                  {displayedRoleText}
                </span>
                <span className="w-1.5 h-4 bg-sky-400 inline-block animate-cursor rounded-full ml-0.5"></span>
              </div>

              <h1 className="reveal-item text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 animate-text-shimmer bg-clip-text text-transparent drop-shadow-lg">
                  Hafizuddin Ghani Ifkar
                </span>
              </h1>

              <div className={`reveal-item p-5 sm:p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 group relative overflow-hidden max-w-[52rem] ${isDarkMode ? 'bg-slate-900/50 border-slate-800 hover:border-sky-500/40' : 'bg-white/70 border-slate-200 hover:border-sky-400 shadow-sm'}`}>
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                <p className={`relative z-10 text-base sm:text-lg leading-relaxed transition-all duration-300 text-justify ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {cvData.personalInfo.bio}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={cvData.personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/40 hover:-translate-y-1 active:translate-y-0"
                >
                  <MessageCircle className="w-4 h-4 animate-bounce" />
                  WhatsApp Direct
                </a>

                <a
                  href={cvData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl border font-semibold text-xs sm:text-sm transition-all duration-300 hover:-translate-y-1 active:translate-y-0 hover:shadow-lg hover:shadow-sky-500/20 ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800 hover:border-sky-500/40' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-sky-400'}`}
                >
                  <Link className="w-4 h-4 text-sky-500" />
                  LinkedIn
                </a>

                <a
                  href={cvData.personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl border font-semibold text-xs sm:text-sm transition-all duration-300 hover:-translate-y-1 active:translate-y-0 hover:shadow-lg hover:shadow-pink-500/20 ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800 hover:border-pink-500/40' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-pink-400'}`}
                >
                  <Camera className="w-4 h-4 text-pink-500" />
                  Instagram
                </a>

                <button
                  onClick={handlePrint}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl border font-semibold text-xs sm:text-sm transition-all duration-300 hover:-translate-y-1 active:translate-y-0 hover:shadow-lg hover:shadow-indigo-500/20 ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800 hover:border-indigo-500/40' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-indigo-400'}`}
                >
                  <FileText className="w-4 h-4 text-sky-400" />
                  Cetak / Simpan PDF
                </button>
              </div>
            </div>

            <div className="reveal-item lg:col-span-4 lg:pt-[175px] flex flex-col items-center justify-start">
              <div className="relative group w-[17rem] h-[21.5rem] sm:w-[20rem] sm:h-[25rem]">
                <div className="absolute -inset-3 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 rounded-[2rem] blur-2xl opacity-80 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                
                <div className={`relative w-full h-full rounded-[2rem] border-2 overflow-hidden flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-[1.02] shadow-[0_25px_80px_rgba(96,165,250,0.25)] ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-2xl'}`}>

                  {profilePhotoUrl ? (

                    <img

                      src={profilePhotoUrl}

                      alt="Foto Hafizuddin Ghani Ifkar"

                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"

                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center p-6 space-y-3">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-sky-500/30">
                        HG
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-200">Foto Profil Hafizuddin</p>
                        <p className="text-xs text-slate-400 mt-0.5">Unggah atau masukkan link foto Anda</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {}
      <div className={`py-4 border-b overflow-hidden ${isDarkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
        <div className="whitespace-nowrap flex gap-8 animate-marquee text-xs font-bold uppercase tracking-widest text-sky-400">
          <span>• MASTER OF CEREMONY</span>
          <span>• STUDENT AMBASSADOR SPARK (SHOPEEPAY)</span>
          <span>• CAMPUS AMBASSADOR POPSURVEY BY POPULIX</span>
          <span>• PERAIH MEDALI EMAS BAHASA INDONESIA 2023</span>
          <span>• PENULIS BUKU ANTOLOGI PUISI</span>
          <span>• TEKNIK GEOMATIKA ITERA</span>
          <span>• PROTOKOLER PASKIBRA</span>
        </div>
      </div>

      {}
      <section id="about" className="reveal-item py-20 border-b border-slate-800/40 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-2">Tentang Saya</h2>
            <h3 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 animate-text-shimmer bg-clip-text text-transparent inline-block">Profil Akademik & Kompetensi</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`reveal-item p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10 ${isDarkMode ? 'bg-slate-900/60 border-slate-800 hover:border-sky-500/40' : 'bg-white border-slate-200 hover:border-sky-400 shadow-sm'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold">Riwayat Pendidikan</h4>
              </div>

              <div className="space-y-6">
                {cvData.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-sky-500/30">
                    <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-sky-500 shadow-md shadow-sky-500/50" />
                    <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">{edu.period}</span>
                    <h5 className="font-bold text-base mt-1">{edu.institution}</h5>
                    <p className="text-sm text-sky-400 font-medium mb-1">{edu.major}</p>
                    {edu.description && (
                      <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className={`reveal-item p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 ${isDarkMode ? 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/40' : 'bg-white border-slate-200 hover:border-indigo-400 shadow-sm'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold">Keahlian & Skills</h4>
              </div>

              <div className="space-y-6">
                <div>
                  <h5 className="text-xs font-extrabold uppercase tracking-wider text-sky-400 mb-3">Hard Skills</h5>
                  <div className="flex flex-wrap gap-2">
                    {cvData.skills.hardSkills.map((skill, idx) => (
                      <span key={idx} className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all duration-200 hover:scale-105 ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-sky-500/40' : 'bg-slate-100 border-slate-200 text-slate-700 hover:border-sky-400'}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-extrabold uppercase tracking-wider text-indigo-400 mb-3">Soft Skills</h5>
                  <div className="flex flex-wrap gap-2">
                    {cvData.skills.softSkills.map((skill, idx) => (
                      <span key={idx} className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all duration-200 hover:scale-105 ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-indigo-500/40' : 'bg-slate-100 border-slate-200 text-slate-700 hover:border-indigo-400'}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="ambassador" className="reveal-item py-20 border-b border-slate-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-2">Student Ambassador</h2>
            <h3 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 animate-text-shimmer bg-clip-text text-transparent inline-block">Student & Campus Ambassador</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cvData.ambassadorRoles.map((role, idx) => (
              <div key={idx} className={`reveal-item p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10 flex flex-col justify-between ${isDarkMode ? 'bg-slate-900/60 border-slate-800 hover:border-sky-500/50' : 'bg-white border-slate-200 hover:border-sky-400 shadow-sm'}`}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {role.period}
                    </span>
                    <Award className="w-5 h-5 text-sky-400" />
                  </div>
                  <h4 className="font-bold text-xl mb-1">{role.company}</h4>
                  <p className="text-sm font-semibold text-sky-400 mb-4">{role.role}</p>
                  
                  <ul className="space-y-2">
                    {role.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="organization" className="reveal-item py-20 border-b border-slate-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-2">Pengalaman & Organisasi</h2>
            <h3 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 animate-text-shimmer bg-clip-text text-transparent inline-block">Rekam Jejak Kepemimpinan & Kepanitiaan</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cvData.organizations.map((org, idx) => (
              <div key={idx} className={`reveal-item p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between ${isDarkMode ? 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/50' : 'bg-white border-slate-200 hover:border-indigo-400 shadow-sm'}`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {org.period}
                    </span>
                    <Briefcase className="w-4 h-4 text-indigo-400" />
                  </div>
                  <h4 className="font-bold text-lg mb-1">{org.role}</h4>
                  <p className="text-xs font-semibold text-sky-400 mb-3">{org.organization}</p>
                  <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {org.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="gallery" className="reveal-item py-20 border-b border-slate-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400">Dokumentasi Aktivitas</h2>
              {isAdmin && (
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-extrabold border border-amber-500/30">
                  Mode Pemilik (Bisa Unggah)
                </span>
              )}
            </div>
            <h3 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 animate-text-shimmer bg-clip-text text-transparent inline-block">Galeri Foto & Rekam Kegiatan</h3>
            <p className={`text-sm mt-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Kumpulan dokumentasi foto kegiatan public speaking, MC, orientasi kampus, hingga kebersamaan dalam organisasi.
            </p>

          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: 'all', label: 'Semua Foto' },
              { id: 'mc', label: 'MC & Public Speaking' },
              { id: 'pplk', label: 'PPLK ITERA' },
              { id: 'organisasi', label: 'Organisasi & Geomatika' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setGalleryFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  galleryFilter === tab.id
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20'
                    : isDarkMode 
                      ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800' 
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {galleryPhotos
              .filter(photo => galleryFilter === 'all' || photo.category === galleryFilter)
              .map((photo) => (
                <div 
                  key={photo.id} 
                  className={`reveal-item p-6 rounded-2xl border flex flex-col justify-between transition-all hover:border-sky-500/50 ${
                    isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-md'
                  }`}
                >
                  <div>
                    <div 
                      className="relative mb-6 cursor-pointer group rounded-xl overflow-hidden"
                      onClick={() => openPhotoModal(photo)}
                    >
                      <img 
                        src={photo.url} 
                        alt={photo.title} 
                        className="w-full h-56 object-cover rounded-xl border border-slate-800 transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex flex-col items-center justify-center gap-2 text-white">
                        <Eye className="w-8 h-8 text-sky-400" />
                        <span className="text-xs font-bold">Klik Untuk Pratinjau Foto Dokumentasi</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-sky-400 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
                        {photo.categoryLabel}
                      </span>
                      {isAdmin && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setPhotoToDeleteId(photo.id);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 text-xs font-bold flex items-center gap-1 transition-colors"
                          title="Hapus foto dari galeri"
                        >
                          <X className="w-3.5 h-3.5" />
                          <span>Hapus</span>
                        </button>
                      )}
                    </div>

                    <h4 className="text-lg font-bold mb-2">{photo.title}</h4>
                    <p className={`text-xs leading-relaxed mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {photo.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/60 flex items-center gap-2">
                    <button
                      onClick={() => openPhotoModal(photo)}
                      className="flex-1 py-2 px-3 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Lihat Foto Full</span>
                    </button>

                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {}
      <section id="works" className="reveal-item py-20 border-b border-slate-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="reveal-item text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-2">Karya & Kompetisi</h2>
            <h3 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 animate-text-shimmer bg-clip-text text-transparent inline-block">Publikasi Sastra & Medali Emas</h3>
          </div>

          <div className="space-y-12">
            <div>
              <h4 className="text-lg font-bold mb-6 text-sky-400 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Publikasi Karya Sastra</span>
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {cvData.publications.map((pub) => (
                  <div key={pub.id} className={`reveal-item p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10 flex flex-col justify-between ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                    <div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3 inline-block">
                        {pub.publisher} • {pub.date}
                      </span>
                      <h5 className="font-bold text-base mb-2">{pub.title}</h5>
                      <p className={`text-xs leading-relaxed mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{pub.description}</p>
                    </div>
                    <button
                      onClick={() => setSelectedItemModal(pub)}
                      className="w-full py-2 px-3 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 mt-2"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Lihat Sertifikat Karya</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-amber-400 flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Prestasi & Penghargaan Nasional</span>
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {cvData.achievements.map((ach) => (
                  <div key={ach.id} className={`reveal-item p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                    <div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3 inline-block">
                        {ach.issuer} • {ach.date}
                      </span>
                      <h5 className="font-bold text-base mb-1">{ach.title}</h5>
                      <p className="text-xs font-semibold text-amber-400 mb-2">{ach.category}</p>
                      <p className={`text-xs leading-relaxed mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{ach.description}</p>
                    </div>
                    <button
                      onClick={() => setSelectedItemModal(ach)}
                      className="w-full py-2 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 mt-2"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Lihat Piagam Penghargaan</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="faq" className="reveal-item py-20 border-b border-slate-800/40 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="reveal-item text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold mb-3">
              <HelpCircle className="w-4 h-4" />
              <span>Fitur Tanya Jawab Interaktif</span>
            </div>
            <h3 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 animate-text-shimmer bg-clip-text text-transparent block">
              Pertanyaan Populer & Jawaban Langsung
            </h3>
            <p className={`text-sm mt-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Cari jawaban seputar layanan MC, kolaborasi brand ambassador, atau kirimkan pertanyaan langsung kepada Hafiz.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Searchable Accordion */}
            <div className="reveal-item lg:col-span-7 space-y-4">
              <div className="relative mb-6">
                <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari pertanyaan (contoh: MC, Brand Ambassador, ITERA)..."
                  value={faqSearchQuery}
                  onChange={(e) => setFaqSearchQuery(e.target.value)}
                  className={`w-full pl-11 pr-4 py-3 rounded-2xl text-xs font-medium border outline-none transition-all ${
                    isDarkMode 
                      ? 'bg-slate-900 border-slate-800 text-slate-200 focus:border-sky-500/50' 
                      : 'bg-white border-slate-200 text-slate-800 focus:border-sky-400 shadow-sm'
                  }`}
                />
              </div>

              <div className="space-y-3">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={index}
                        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                          isDarkMode 
                            ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700' 
                            : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                        }`}
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                          className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
                            <span className={isDarkMode ? 'text-slate-100' : 'text-slate-800'}>{faq.question}</span>
                          </div>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-sky-400 shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                          )}
                        </button>

                        {isOpen && (
                          <div className={`px-5 pb-5 text-xs leading-relaxed space-y-3 border-t pt-4 ${
                            isDarkMode ? 'border-slate-800 text-slate-300' : 'border-slate-100 text-slate-600'
                          }`}>
                            <p>{faq.answer}</p>
                            <div className="flex items-center justify-between pt-2">
                              <span className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400">
                                Kategori: {faq.category}
                              </span>
                              <button
                                onClick={() => handleSendFaqToWa(faq.question, faq.answer)}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 text-[11px] font-bold transition-colors"
                              >
                                <MessageCircle className="w-3.5 h-3.5" />
                                <span>Tanyakan di WA</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className={`p-8 rounded-2xl border text-center text-xs ${isDarkMode ? 'bg-slate-900/40 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
                    Tidak ada pertanyaan yang sesuai dengan kata kunci "{faqSearchQuery}". Coba gunakan kolom tanya cepat di sebelah kanan!
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Dynamic Q&A Interactive Assistant */}
            <div className={`reveal-item lg:col-span-5 p-6 rounded-3xl border flex flex-col justify-between min-h-[440px] ${
              isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-lg'
            }`}>
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Tanya HIFA</h4>
                      <p className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                        Online & Siap Menjawab
                      </p>
                    </div>
                  </div>
                  <HelpCircle className="w-4 h-4 text-slate-400" />
                </div>

                {/* Quick Prompts */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {[
                    "Kapan Hafiz open MC?",
                    "Cara kerjasama ambassador?",
                    "Jurusan Hafiz?",
                    "Prestasi Medali Emas?"
                  ].map((prompt, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => handleAskQuestion(prompt)}
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-lg border transition-all ${
                        isDarkMode 
                          ? 'bg-slate-950 border-slate-800 text-sky-400 hover:bg-slate-800 hover:border-sky-500/30' 
                          : 'bg-slate-100 border-slate-200 text-sky-600 hover:bg-slate-200'
                      }`}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>

                {/* Chat Log */}
                <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                  {botAnswers.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-2xl text-xs leading-relaxed max-w-[90%] ${
                        msg.sender === 'user'
                          ? 'bg-sky-500 text-white ml-auto font-medium rounded-tr-none shadow-md'
                          : isDarkMode 
                            ? 'bg-slate-950 text-slate-200 border border-slate-800 rounded-tl-none' 
                            : 'bg-slate-100 text-slate-800 rounded-tl-none'
                      }`}
                    >
                      <p>{msg.text}</p>
                      {msg.queryText && (
                        <button
                          onClick={() => handleSendFaqToWa(msg.queryText, msg.text)}
                          className="mt-2 text-[10px] font-bold text-emerald-400 flex items-center gap-1 hover:underline"
                        >
                          <MessageCircle className="w-3 h-3" />
                          <span>Lanjutkan Tanya ke WA Hafiz</span>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Input */}
              <div className="pt-4 border-t border-slate-800/80 mt-4">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleAskQuestion();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    placeholder="Ketik pertanyaan Anda di sini..."
                    value={userQuestionText}
                    onChange={(e) => setUserQuestionText(e.target.value)}
                    className={`flex-1 px-3.5 py-2.5 rounded-xl text-xs border outline-none ${
                      isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-100 border-slate-200'
                    }`}
                  />
                  <button
                    type="submit"
                    className="p-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold transition-all shadow-md shadow-sky-500/20"
                    title="Kirim Pertanyaan"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>

            </div>

          </div>
        </div>
      </section>

      {}
      {isAddPhotoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className={`w-full max-w-lg rounded-3xl p-6 border ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900 shadow-2xl'}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-sky-400" />
                <h3 className="font-bold text-lg">Unggah Foto Baru ke Galeri</h3>
              </div>
              <button onClick={() => setIsAddPhotoModalOpen(false)} className="p-1.5 rounded-xl hover:bg-slate-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddPhotoSubmit} className="space-y-4">
              {formError && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                  {formError}
                </div>
              )}

              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1">Judul / Nama Kegiatan</label>
                <input
                  type="text"
                  placeholder="Contoh: MC Geosphere ITERA 2026"
                  value={newPhotoData.title}
                  onChange={(e) => setNewPhotoData({ ...newPhotoData, title: e.target.value })}
                  className={`w-full px-3 py-2 rounded-xl text-xs border outline-none ${isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200'}`}
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1">Kategori Kegiatan</label>
                <select
                  value={newPhotoData.category}
                  onChange={(e) => {
                    const sel = categoryOptions.find(c => c.value === e.target.value);
                    setNewPhotoData({
                      ...newPhotoData,
                      category: e.target.value,
                      categoryLabel: sel ? sel.label : 'Kegiatan'
                    });
                  }}
                  className={`w-full px-3 py-2 rounded-xl text-xs border outline-none ${isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200'}`}
                >
                  {categoryOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1">Deskripsi Ringkas</label>
                <textarea
                  rows={3}
                  placeholder="Jelaskan peran atau momen kegiatan tersebut..."
                  value={newPhotoData.description}
                  onChange={(e) => setNewPhotoData({ ...newPhotoData, description: e.target.value })}
                  className={`w-full px-3 py-2 rounded-xl text-xs border outline-none ${isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200'}`}
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1">File Foto Kegiatan</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleNewPhotoFile}
                  className="w-full text-xs text-slate-400 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-sky-500/10 file:text-sky-400 hover:file:bg-sky-500/20"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddPhotoModalOpen(false)}
                  className="flex-1 py-2.5 px-4 rounded-xl border border-slate-700 text-xs font-bold hover:bg-slate-800 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs shadow-lg shadow-sky-500/20 transition-all"
                >
                  Simpan Foto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isPinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className={`w-full max-w-sm rounded-3xl p-6 border shadow-2xl ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base">Akses Mode Pemilik</h3>
              </div>
              <button onClick={() => setIsPinModalOpen(false)} className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-400 mb-4">
              Masukkan PIN Admin untuk mengaktifkan mode pemilik dan mengunggah atau mengelola galeri foto.
            </p>

            <form onSubmit={handlePinSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  placeholder="Masukkan PIN"
                  value={inputPin}
                  onChange={(e) => {
                    setInputPin(e.target.value);
                    setPinError('');
                  }}
                  className={`w-full px-4 py-3 rounded-xl border text-center tracking-widest text-lg font-bold outline-none transition-all ${
                    pinError 
                      ? 'border-red-500 bg-red-500/10 text-red-400' 
                      : isDarkMode ? 'bg-slate-950 border-slate-800 focus:border-amber-400' : 'bg-slate-50 border-slate-200 focus:border-amber-500'
                  }`}
                  autoFocus
                />
                {pinError && <p className="text-xs text-red-400 font-semibold mt-1 text-center">{pinError}</p>}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPinModalOpen(false)}
                  className="flex-1 py-2.5 px-4 rounded-xl border border-slate-700 text-xs font-bold hover:bg-slate-800 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 transition-all"
                >
                  Konfirmasi PIN
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {photoToDeleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className={`w-full max-w-sm rounded-3xl p-6 border shadow-2xl ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'}`}>
            <h3 className="font-bold text-lg mb-2 text-red-400">Hapus Foto Kegiatan?</h3>
            <p className="text-xs text-slate-400 mb-6">
              Apakah Anda yakin ingin menghapus foto ini dari galeri Anda? Tindakan ini tidak dapat dibatalkan.
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPhotoToDeleteId(null)}
                className="flex-1 py-2.5 px-4 rounded-xl border border-slate-700 text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={() => confirmDeletePhoto(photoToDeleteId)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg shadow-red-600/20 transition-all"
              >
                Hapus Foto
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedPhotoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
          <div className={`relative w-full max-w-4xl rounded-3xl overflow-hidden border ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-2xl'}`}>
            <button
              onClick={() => setSelectedPhotoModal(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/70 text-white hover:bg-slate-900 backdrop-blur-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-12 max-h-[85vh]">
              <div
                className="relative md:col-span-8 bg-black flex items-center justify-center min-h-[300px] max-h-[60vh] md:max-h-[85vh]"
                onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
                onTouchEnd={handlePhotoTouchEnd}
              >
                {galleryPhotos.length > 1 && (
                  <>
                    <button
                      onClick={() => navigatePhoto(-1)}
                      className="absolute left-4 z-10 p-2.5 rounded-full bg-slate-950/70 text-white hover:bg-slate-900 backdrop-blur-md transition-colors"
                      title="Foto sebelumnya"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => navigatePhoto(1)}
                      className="absolute right-4 z-10 p-2.5 rounded-full bg-slate-950/70 text-white hover:bg-slate-900 backdrop-blur-md transition-colors"
                      title="Foto berikutnya"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                <img
                  src={(selectedPhotoModal.images || [selectedPhotoModal.url])[selectedPhotoImageIndex]}
                  alt={selectedPhotoModal.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className={`md:col-span-4 p-6 flex flex-col justify-between overflow-y-auto ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {selectedPhotoModal.categoryLabel}
                  </span>
                  <h3 className="text-xl font-extrabold leading-snug">{selectedPhotoModal.title}</h3>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {selectedPhotoModal.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800 mt-6">
                  <button
                    onClick={() => setSelectedPhotoModal(null)}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-700 text-slate-300 font-bold text-xs hover:bg-slate-800 transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedItemModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className={`relative w-full max-w-3xl rounded-3xl p-6 border max-h-[90vh] overflow-y-auto ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-2xl'}`}>
            <button
              onClick={() => setSelectedItemModal(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold mb-2">{selectedItemModal.title}</h3>
            <p className="text-xs text-sky-400 mb-4">{selectedItemModal.certNumber}</p>

            <div className="mb-6">
              {customImageUrls[selectedItemModal.id] || selectedItemModal.imageUrl ? (
                <img
                  src={customImageUrls[selectedItemModal.id] || selectedItemModal.imageUrl}
                  alt={selectedItemModal.title}
                  className="w-full h-auto rounded-xl border border-slate-800"
                />
              ) : (
                <FallbackCertificateSVG
                  type={selectedItemModal.type}
                  title={selectedItemModal.title}
                  recipient={cvData.personalInfo.name}
                  certNumber={selectedItemModal.certNumber}
                  date={selectedItemModal.date}
                  issuer={selectedItemModal.issuer || selectedItemModal.publisher}
                />
              )}
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedItemModal(null)}
                className="py-2 px-4 rounded-xl bg-slate-800 text-slate-200 text-xs font-bold"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {isShareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className={`w-full max-w-md rounded-2xl p-6 border ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-2xl'}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Bagikan Portfolio</h3>
              <button onClick={() => setIsShareModalOpen(false)} className="p-1 rounded-lg hover:bg-slate-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-400 mb-4">Salin link portfolio ini untuk dibagikan ke media sosial atau perekrut.</p>

            <div className="flex items-center gap-2 mb-4">
              <input
                type="text"
                readOnly
                value={window.location.href}
                className={`flex-1 px-3 py-2 rounded-xl text-xs border outline-none ${isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200'}`}
              />
              <button
                onClick={() => copyToClipboard(window.location.href, 'share')}
                className="py-2 px-3 rounded-xl bg-sky-500 text-white text-xs font-bold flex items-center gap-1"
              >
                {copiedItem === 'share' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedItem === 'share' ? 'Tersalin' : 'Salin'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {}
      <section id="contact" className="reveal-item py-20 border-b border-slate-800/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="reveal-item text-xs font-bold uppercase tracking-widest text-sky-400 mb-2">Kontak & Hubungi</h2>
          <h3 className="reveal-item text-3xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 animate-text-shimmer bg-clip-text text-transparent inline-block">Mari Terhubung & Berkolaborasi</h3>

          <div className="grid sm:grid-cols-3 gap-4 text-left">
            <a
              href={`mailto:${cvData.personalInfo.email}`}
              className={`reveal-item p-5 rounded-2xl border flex items-center gap-4 transition-all hover:border-sky-500 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold">Email</p>
                <p className="text-xs font-bold truncate">{cvData.personalInfo.email}</p>
              </div>
            </a>

            <a
              href={cvData.personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal-item p-5 rounded-2xl border flex items-center gap-4 transition-all hover:border-emerald-500 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold">WhatsApp / Telepon</p>
                <p className="text-xs font-bold">{cvData.personalInfo.phone}</p>
              </div>
            </a>

            <div className={`reveal-item p-5 rounded-2xl border flex items-center gap-4 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold">Lokasi</p>
                <p className="text-xs font-bold">{cvData.personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <footer className="py-8 border-t border-slate-800/40 text-center text-xs text-slate-400">
        <p>© 2026 Hafizuddin Ghani Ifkar. Teknik Geomatika ITERA.</p>
      </footer>

    </div>
  );
}