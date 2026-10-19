
import React, { useState } from 'react';
import { PERSONAL_INFO, CAPABILITIES } from '../data/portfolioData';
import {
  CheckCircle2,
  Smartphone,
  Globe,
  Database,
  Info,
  X,
  ArrowUpRight,
  Mail,
} from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    description: string;
  } | null>(null);

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const getIconForCategory = (icon: string) => {
    switch (icon) {
      case 'smartphone':
        return <Smartphone className="w-4 h-4 text-black" />;
      case 'web':
        return <Globe className="w-4 h-4 text-black" />;
      case 'database':
        return <Database className="w-4 h-4 text-black" />;
      default:
        return <Info className="w-4 h-4 text-black" />;
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.prompt('Salin alamat email berikut:', PERSONAL_INFO.email);
    }
  };

  return (
    <section
      id="archive"
      className="w-full bg-white text-black py-16 lg:py-24"
    >
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">

        {/* Judul Bagian */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-zinc-200">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">
              04 // PROFIL DAN KEAHLIAN
            </span>

            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-black tracking-tight">
              Mengenal Saya dan Keahlian Saya.
            </h2>

            <p className="font-poppins text-sm sm:text-base text-zinc-600 leading-relaxed mt-3">
              Ringkasan perjalanan belajar, pengalaman proyek, dan
              teknologi yang saya gunakan untuk mengembangkan aplikasi.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowProfileModal(true)}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-black hover:text-zinc-600 transition-colors self-start md:self-auto py-2"
          >
            <span>Lihat Profil</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Profil Singkat */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          <div className="lg:col-span-7 bg-zinc-50 border border-zinc-200 p-6 sm:p-8 rounded-3xl space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                PROFIL SAYA
              </span>

              <h3 className="font-poppins font-semibold text-xl sm:text-2xl text-black leading-snug">
                Mengembangkan solusi digital yang bermanfaat melalui
                aplikasi mobile dan website.
              </h3>
            </div>

            <p className="font-poppins font-normal text-zinc-700 leading-relaxed text-sm sm:text-base">
              {PERSONAL_INFO.shortBio}
            </p>

            <div className="p-4 rounded-2xl bg-white border border-zinc-200 flex items-start gap-4 shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-black shrink-0 mt-0.5" />

              <div>
                <p className="font-poppins font-semibold text-sm text-black">
                  Fokus Pengembangan
                </p>

                <p className="font-poppins text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">
                  Pengembangan aplikasi mobile menggunakan Flutter,
                  pengembangan backend, pengelolaan database, dan
                  pembuatan website sesuai kebutuhan pengguna.
                </p>
              </div>
            </div>
          </div>

          {/* Ringkasan Informasi */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between hover:border-black transition-colors">
              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                PENDIDIKAN
              </span>

              <div className="my-5">
                <span className="font-poppins font-bold text-2xl sm:text-3xl text-black tracking-tight">
                  S1
                </span>
              </div>

              <p className="font-poppins text-xs text-zinc-700 font-medium">
                Teknik Informatika
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between hover:border-black transition-colors">
              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                PROYEK UNGGULAN
              </span>

              <div className="my-5">
                <span className="font-poppins font-bold text-2xl sm:text-3xl text-black tracking-tight">
                  Musrenyuk
                </span>
              </div>

              <p className="font-poppins text-xs text-zinc-700 font-medium">
                Aplikasi usulan pembangunan desa
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between hover:border-black transition-colors">
              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                BIDANG UTAMA
              </span>

              <div className="my-5">
                <Smartphone className="w-8 h-8 text-black" />
              </div>

              <p className="font-poppins text-xs text-zinc-700 font-medium">
                Pengembangan Aplikasi Mobile
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between hover:border-black transition-colors">
              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                LOKASI
              </span>

              <div className="my-5">
                <span className="font-poppins font-bold text-2xl sm:text-3xl text-black tracking-tight">
                  Pasuruan
                </span>
              </div>

              <p className="font-poppins text-xs text-zinc-700 font-medium">
                Jawa Timur, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Daftar Keahlian */}
        <div className="bg-zinc-50 border border-zinc-200 p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-zinc-200">
            <div>
              <h3 className="font-poppins font-bold text-base sm:text-lg text-black">
                Keahlian dan Teknologi
              </h3>

              <p className="text-xs sm:text-sm text-zinc-500 font-normal mt-1">
                Pilih teknologi untuk melihat penjelasan singkatnya.
              </p>
            </div>

            <span className="font-mono text-[11px] text-zinc-500">
              DAFTAR KEAHLIAN
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
            {CAPABILITIES.map((cat) => (
              <div key={cat.category} className="space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-black font-bold flex items-center gap-2">
                  {getIconForCategory(cat.icon)}
                  {cat.category}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const isSelected = selectedSkill?.name === skill.name;

                    return (
                      <button
                        key={skill.name}
                        type="button"
                        onClick={() =>
                          setSelectedSkill(isSelected ? null : skill)
                        }
                        aria-pressed={isSelected}
                        className={`px-3 py-2 rounded-full border text-xs font-poppins font-medium transition-all text-left ${
                          isSelected
                            ? 'bg-black text-white border-black shadow-sm'
                            : 'border-zinc-300 bg-white text-black hover:border-black'
                        }`}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Penjelasan Keahlian Terpilih */}
          {selectedSkill && (
            <div className="p-4 rounded-2xl bg-white border border-black animate-in fade-in duration-200 flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
                  PENJELASAN KEAHLIAN
                </span>

                <h4 className="font-poppins font-semibold text-sm text-black mt-1">
                  {selectedSkill.name}
                </h4>

                <p className="text-sm font-poppins text-zinc-700 mt-1 leading-relaxed">
                  {selectedSkill.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedSkill(null)}
                className="text-zinc-500 hover:text-black p-1"
                aria-label="Tutup penjelasan keahlian"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal Profil */}
      {showProfileModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setShowProfileModal(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-modal-title"
            className="bg-white text-black max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 border border-zinc-300 animate-in zoom-in-95 duration-150 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-bold">
                PROFIL DEVELOPER
              </span>

              <button
                type="button"
                onClick={() => setShowProfileModal(false)}
                className="p-2 rounded-full hover:bg-zinc-100 text-zinc-600 hover:text-black transition-colors"
                aria-label="Tutup profil"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <h3
                id="profile-modal-title"
                className="font-poppins font-bold text-xl sm:text-2xl text-black"
              >
                {PERSONAL_INFO.name}
              </h3>

              <p className="font-poppins text-sm text-zinc-600">
                {PERSONAL_INFO.role}
              </p>

              <p className="font-poppins text-sm text-zinc-700 leading-relaxed">
                {PERSONAL_INFO.shortBio}
              </p>
            </div>

            <div className="bg-zinc-100 p-4 rounded-2xl space-y-3 text-sm">
              <div>
                <p className="text-zinc-500 text-xs mb-1">LOKASI</p>
                <p className="font-medium">{PERSONAL_INFO.location}</p>
              </div>

              <div>
                <p className="text-zinc-500 text-xs mb-1">TEKNOLOGI UTAMA</p>
                <p className="font-medium">{PERSONAL_INFO.primaryStacks}</p>
              </div>

              <div>
                <p className="text-zinc-500 text-xs mb-1">STATUS</p>
                <p className="font-medium">{PERSONAL_INFO.availability}</p>
              </div>

              <div>
                <p className="text-zinc-500 text-xs mb-1">EMAIL</p>
                <p className="font-medium break-all">
                  {PERSONAL_INFO.email}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href="#contact"
                onClick={() => setShowProfileModal(false)}
                className="w-full flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-black text-white text-center font-poppins font-semibold text-xs hover:bg-zinc-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Hubungi Saya
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto py-3 px-4 rounded-xl border border-zinc-300 text-black font-poppins font-semibold text-xs hover:bg-zinc-100 transition-colors"
              >
                {copiedEmail ? 'Email Disalin' : 'Salin Email'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
