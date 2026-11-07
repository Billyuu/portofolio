import React, { useState } from 'react';
import { PERSONAL_INFO, CAPABILITIES } from '../data/portfolioData';
import {
  CheckCircle2,
  Smartphone,
  Globe,
  Database,
  Cpu,
  Info,
  X,
  ArrowUpRight,
  Mail,
  GraduationCap,
  MapPin,
  Code2,
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
        return <Smartphone className="h-4 w-4" aria-hidden="true" />;
      case 'web':
        return <Globe className="h-4 w-4" aria-hidden="true" />;
      case 'database':
        return <Database className="h-4 w-4" aria-hidden="true" />;
      case 'palette':
        return <Code2 className="h-4 w-4" aria-hidden="true" />;
      default:
        return <Info className="h-4 w-4" aria-hidden="true" />;
        case 'iot':
  return <Cpu className="h-4 w-4" aria-hidden="true" />;
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.prompt('Salin alamat email berikut:', PERSONAL_INFO.email);
    }
  };

  const statCardClass =
    'group flex min-h-[190px] flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-md sm:p-6';

  return (
    <section
      id="archive"
      className="w-full bg-white py-14 text-black sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1280px] space-y-10 px-4 sm:px-6 lg:space-y-12 lg:px-12">
        {/* Section heading */}
        <div className="flex flex-col gap-5 border-b pt-5 border-zinc-200 pb-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-zinc-900" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                01 / Keahlian
              </span>
            </div>
            <h2 className="font-poppins text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Keahlian Saya.
            </h2>
            <p className="mt-4 max-w-xl font-poppins text-sm leading-7 text-zinc-600 sm:text-base">
              Ringkasan perjalanan belajar, pengalaman proyek, dan teknologi
              yang saya gunakan untuk mengembangkan aplikasi.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowProfileModal(true)}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-300 px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-zinc-800 transition hover:border-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
          >
            Lihat Profil
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* Profile and information cards */}
        {/* <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12 lg:gap-6">
          <article className="flex flex-col rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 lg:col-span-7 lg:p-9">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Profil Saya
            </span>

            <h3 className="mt-4 max-w-2xl font-poppins text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              Mengembangkan solusi digital yang bermanfaat melalui aplikasi
              mobile dan website.
            </h3>

            <p className="mt-5 font-poppins text-sm leading-7 text-zinc-600 sm:text-base">
              {PERSONAL_INFO.shortBio}
            </p>

            <div className="mt-7 flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100">
                <CheckCircle2 className="h-5 w-5 text-zinc-900" />
              </div>
              <div>
                <p className="font-poppins text-sm font-semibold text-zinc-950">
                  Fokus Pengembangan
                </p>
                <p className="mt-1.5 font-poppins text-sm leading-6 text-zinc-600">
                  Pengembangan aplikasi mobile menggunakan Flutter, backend,
                  pengelolaan database, dan pembuatan website sesuai kebutuhan
                  pengguna.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-zinc-200 pt-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                Teknologi utama
              </span>
              <span className="text-xs font-medium text-zinc-700">
                {PERSONAL_INFO.primaryStacks}
              </span>
            </div>
          </article>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5">
            <article className={statCardClass}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Pendidikan
                </span>
                <GraduationCap className="h-5 w-5 text-zinc-400 transition group-hover:text-black" />
              </div>
              <div className="mt-7">
                <h3 className="font-poppins text-3xl font-bold tracking-tight sm:text-4xl">
                  S1
                </h3>
                <p className="mt-2 text-sm font-medium text-zinc-700">
                  Teknik Informatika
                </p>
                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  Universitas Yudharta Pasuruan
                </p>
              </div>
            </article>

            <article className={statCardClass}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Proyek Unggulan
                </span>
                <ArrowUpRight className="h-5 w-5 text-zinc-400 transition group-hover:text-black" />
              </div>
              <div className="mt-7">
                <h3 className="font-poppins text-2xl font-bold tracking-tight sm:text-3xl">
                  Musrenyuk
                </h3>
                <p className="mt-2 text-sm leading-5 text-zinc-600">
                  Aplikasi usulan pembangunan desa
                </p>
              </div>
            </article>

            <article className={statCardClass}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Bidang Utama
                </span>
                <Smartphone className="h-5 w-5 text-zinc-400 transition group-hover:text-black" />
              </div>
              <div className="mt-7">
                <h3 className="font-poppins text-xl font-bold leading-snug tracking-tight sm:text-2xl">
                  Mobile Development
                </h3>
                <p className="mt-2 text-sm leading-5 text-zinc-600">
                  Pengembangan aplikasi mobile
                </p>
              </div>
            </article>

            <article className={statCardClass}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Lokasi
                </span>
                <MapPin className="h-5 w-5 text-zinc-400 transition group-hover:text-black" />
              </div>
              <div className="mt-7">
                <h3 className="font-poppins text-3xl font-bold tracking-tight sm:text-4xl">
                  Pasuruan
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Jawa Timur, Indonesia
                </p>
              </div>
            </article>
          </div>
        </div> */}

        {/* Skills */}
        <section className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 lg:p-9">
          <div className="flex flex-col gap-3 border-b border-zinc-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Code2 className="h-4 w-4 text-zinc-500" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Technical Toolkit
                </span>
              </div>
              <h3 className="font-poppins text-xl font-bold tracking-tight sm:text-2xl">
                Keahlian dan Teknologi
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Pilih teknologi untuk melihat penjelasan singkat dan
                penggunaannya.
              </p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
              {CAPABILITIES.reduce((total, category) => total + category.skills.length, 0)}{' '}
              keahlian terdaftar
            </span>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-6 md:grid-cols-2 md:gap-y-9">
            {CAPABILITIES.map((cat, index) => (
              <div key={cat.category} className="min-w-0">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800">
                    {getIconForCategory(cat.icon)}
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-400">
                      Kategori {String(index + 1).padStart(2, '0')}
                    </span>
                    <h4 className="font-poppins text-xs font-semibold leading-5 text-zinc-900 sm:text-sm">
                      {cat.category}
                    </h4>
                  </div>
                </div>

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
                        className={`rounded-full border px-3.5 py-2 text-left font-poppins text-xs font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 ${
                          isSelected
                            ? 'border-black bg-black text-white shadow-sm'
                            : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-500 hover:text-black'
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

          {selectedSkill && (
            <div
              className="mt-7 flex items-start justify-between gap-4 rounded-2xl border border-zinc-300 bg-white p-5 shadow-sm"
              aria-live="polite"
            >
              <div>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Penjelasan Keahlian
                </span>
                <h4 className="mt-2 font-poppins text-base font-semibold text-zinc-950">
                  {selectedSkill.name}
                </h4>
                <p className="mt-2 max-w-3xl font-poppins text-sm leading-6 text-zinc-600">
                  {selectedSkill.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSkill(null)}
                className="rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-zinc-400"
                aria-label="Tutup penjelasan keahlian"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Profile modal */}
      {showProfileModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setShowProfileModal(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-modal-title"
            className="my-auto w-full max-w-lg space-y-6 rounded-3xl border border-zinc-200 bg-white p-6 text-black shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
              <div>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Profil Developer
                </span>
                <h3
                  id="profile-modal-title"
                  className="mt-2 font-poppins text-xl font-bold sm:text-2xl"
                >
                  {PERSONAL_INFO.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowProfileModal(false)}
                className="rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-black"
                aria-label="Tutup profil"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-zinc-600">
                {PERSONAL_INFO.role}
              </p>
              <p className="font-poppins text-sm leading-7 text-zinc-700">
                {PERSONAL_INFO.shortBio}
              </p>
            </div>

            <div className="space-y-4 rounded-2xl bg-zinc-50 p-5 text-sm">
              <div>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  Lokasi
                </p>
                <p className="font-medium">{PERSONAL_INFO.location}</p>
              </div>
              <div>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  Teknologi Utama
                </p>
                <p className="leading-6 text-zinc-700">
                  {PERSONAL_INFO.primaryStacks}
                </p>
              </div>
              <div>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  Status
                </p>
                <p className="font-medium">{PERSONAL_INFO.availability}</p>
              </div>
              <div>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  Email
                </p>
                <p className="break-all font-medium">{PERSONAL_INFO.email}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <a
                href="#contact"
                onClick={() => setShowProfileModal(false)}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-center font-poppins text-xs font-semibold text-white transition hover:bg-zinc-800"
              >
                <Mail className="h-4 w-4" />
                Hubungi Saya
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="rounded-xl border border-zinc-300 px-4 py-3 font-poppins text-xs font-semibold text-zinc-800 transition hover:bg-zinc-100"
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
