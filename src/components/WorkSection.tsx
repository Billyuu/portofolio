
import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowRight, Image as ImageIcon, ExternalLink, } from 'lucide-react';
import { ArchitectureModal } from './ArchitectureModal';

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="work"
      className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24 space-y-16"
    >
      {/* Judul Bagian */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-zinc-800">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-semibold">
            02 // PROYEK PILIHAN
          </span>

          <h2 className="font-poppins font-bold text-3xl sm:text-5xl text-white tracking-tight mt-2">
            Karya dan Proyek Saya.
          </h2>
        </div>

        <p className="font-poppins text-sm text-zinc-400 max-w-sm leading-relaxed">
          Beberapa proyek yang menunjukkan pengalaman saya dalam
          mengembangkan aplikasi mobile, website, dan solusi digital.
        </p>
      </div>

      {/* Daftar Proyek */}
      <div className="space-y-10">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <article
              key={project.id}
              className="border border-zinc-800 bg-zinc-950 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group hover:border-zinc-700 transition-colors"
            >
              {/* Informasi Proyek */}
              <div
                className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-zinc-700 bg-zinc-900 font-semibold text-white">
                    {project.caseStudyNum}
                  </span>

                  <span className="text-zinc-700">•</span>

                  <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                    {project.domain}
                  </span>
                </div>

                <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  {project.title}
                </h3>

                <p className="font-poppins font-normal text-zinc-400 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Metrik Proyek */}
                {project.metrics.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                    {project.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl border border-zinc-800 bg-zinc-900/60"
                      >
                        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                          {metric.label}
                        </span>

                        <p className="font-poppins font-semibold text-lg text-white">
                          {metric.value}
                        </p>

                        <p className="font-poppins text-[11px] text-zinc-400">
                          {metric.subtext}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Teknologi */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    TEKNOLOGI YANG DIGUNAKAN
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 font-mono text-xs text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>


                {/* Tombol Aksi Proyek */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  {/* Tombol Detail Proyek */}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 font-poppins font-semibold text-sm text-white hover:text-zinc-400 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>{project.actionText || 'Lihat Detail Proyek'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Tombol Google Play */}
                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900/60 text-white font-poppins font-medium text-sm hover:bg-zinc-800 hover:border-zinc-500 active:scale-95 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View on Google Play</span>
                    </a>
                  )}
                </div>

              </div>

              {/* Gambar atau Placeholder Proyek */}
              <div
                className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Lihat detail ${project.title}`}
                  className="w-full text-left overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 aspect-[16/10] shadow-inner relative focus:outline-none focus:ring-2 focus:ring-white"
                >
                  {project.image ? (

                    <img
                      className="w-full h-full object-contain object-center grayscale transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-[1.02]"
                      alt={`Dokumentasi ${project.title}`}
                      src={project.image}
                      loading="lazy"
                    />

                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
                      <div className="w-16 h-16 rounded-2xl border border-zinc-700 bg-black/40 flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-zinc-500" />
                      </div>

                      <div className="text-center space-y-1">
                        <p className="font-poppins font-semibold text-sm text-zinc-300">
                          {project.title}
                        </p>

                        <p className="font-poppins text-xs text-zinc-500">
                          Dokumentasi proyek belum ditambahkan
                        </p>
                      </div>
                    </div>
                  )}

                  {project.image && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="font-mono text-[11px] bg-black/80 backdrop-blur px-3 py-1.5 rounded-full text-white border border-zinc-700">
                        Klik untuk melihat detail
                      </span>
                    </div>
                  )}
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Modal Detail Proyek */}
      <ArchitectureModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
