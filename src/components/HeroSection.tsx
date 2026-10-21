
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import {
  ArrowDown,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Download,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-16 lg:pb-24"
    >
      {/* Baris Status */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-200 font-mono text-[11px] tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {PERSONAL_INFO.availability}
          </span>

          <span className="text-zinc-700 hidden sm:inline">•</span>

          <span className="text-zinc-400 font-mono text-[11px] uppercase tracking-widest hidden sm:inline">
            {PERSONAL_INFO.location}
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-zinc-400">
          <a href="#work" className="hover:text-white transition-colors">
            Proyek ({String(PROJECTS.length).padStart(2, '0')})
          </a>
          <span className="text-zinc-700">/</span>
          <a href="#archive" className="hover:text-white transition-colors">
            Keahlian
          </a>
          <span className="text-zinc-700">/</span>
          <a href="#contact" className="hover:text-white transition-colors">
            Kontak
          </a>
        </div>
      </div>

      {/* Bagian Utama */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-10 sm:pt-14">
        {/* Kolom Profil */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <p className="font-mono text-xs sm:text-sm tracking-[0.22em] text-zinc-400 uppercase flex items-center gap-2">
              <span className="w-6 h-[1px] bg-white" />
              {PERSONAL_INFO.role}
            </p>


            <h1 className="font-poppins font-bold text-4xl sm:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-[-0.03em] text-white">
              HALO, SAYA
              <br className="hidden sm:inline" />{' '}
              DAVI SA
              <span className="text-white underline decoration-white decoration-2 underline-offset-8">
                BILI
              </span>
              SSALIM.
            </h1>

          </div>

          <p className="font-poppins font-normal text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-xl">
            {PERSONAL_INFO.shortBio}
          </p>

          {/* Tombol Aksi */}
          <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              id="hero-explore-projects-btn"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full bg-white text-black font-poppins font-semibold text-sm tracking-wide shadow-md hover:bg-zinc-200 active:scale-95 transition-all"
            >
              <span>Lihat Proyek</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>


            {PERSONAL_INFO.readcv && (
              <a
                href={PERSONAL_INFO.readcv}
                download
                id="hero-download-cv-btn"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full border border-zinc-700 bg-transparent text-white font-poppins font-medium text-sm tracking-wide hover:bg-zinc-900 hover:border-zinc-500 transition-all active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Unduh CV</span>
              </a>
            )}
          </div>

          {/* Tautan Media Sosial */}
          <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
              PROFIL:
            </span>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full border border-zinc-800 bg-zinc-950 font-mono text-xs text-zinc-300 hover:bg-white hover:text-black hover:border-white transition-all"
              >
                GitHub
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full border border-zinc-800 bg-zinc-950 font-mono text-xs text-zinc-300 hover:bg-white hover:text-black hover:border-white transition-all"
              >
                LinkedIn
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full border border-zinc-800 bg-zinc-950 font-mono text-xs text-zinc-300 hover:bg-white hover:text-black hover:border-white transition-all"
              >
                Instagram
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Foto Profil */}
        <div className="lg:col-span-5 relative mt-4 lg:mt-0">
          <div className="border border-zinc-800 bg-zinc-950 p-4 rounded-[2rem] shadow-2xl flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-[1.5rem] aspect-[3/4] bg-zinc-900 border border-zinc-800/80 group">

              {PERSONAL_INFO.avatarImage && (
                <>
                  {/* Foto formal: tampilan default */}
                  <img
                    alt={`Foto profil ${PERSONAL_INFO.name}`}
                    className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-125 transition-opacity duration-300 group-hover:opacity-0"
                    src={PERSONAL_INFO.avatarImage}
                  />

                  {/* Foto ekspresi: muncul saat kursor diarahkan */}
                  <img
                    alt={`${PERSONAL_INFO.name} — Dammm Broo!`}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    src="/damm.png"
                  />
                </>
              )}


              <div className="absolute top-3 left-3 bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-zinc-800">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-200">
                  Pengembang Aplikasi
                </span>
              </div>

              <div className="absolute bottom-3 inset-x-3 bg-black/90 border border-zinc-800 backdrop-blur-md text-white p-3 rounded-xl flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-poppins font-semibold text-xs tracking-tight">
                    {PERSONAL_INFO.name}
                  </p>
                  <p className="font-mono text-[10px] text-zinc-400">
                    Flutter • React • PHP
                  </p>
                </div>

                <span className="shrink-0 font-mono text-[10px] px-2 py-0.5 rounded border border-zinc-700 bg-zinc-900 text-white font-semibold flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-zinc-300" />
                  {PERSONAL_INFO.availabilityPill}
                </span>
              </div>
            </div>

            {/* Informasi Teknologi dan Status */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="p-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/60 flex flex-col justify-center min-w-0">
                <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">
                  Teknologi
                </span>
                <span className="font-poppins font-medium text-xs text-white truncate">
                  {PERSONAL_INFO.primaryStacks}
                </span>
              </div>

              <div className="p-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/60 flex flex-col justify-center min-w-0">
                <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">
                  Status
                </span>
                <span className="font-poppins font-semibold text-xs text-white">
                  {PERSONAL_INFO.availabilityPill}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
