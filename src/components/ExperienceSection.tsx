
import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('exp-1');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="experience"
      className="w-full bg-white text-black py-16 lg:py-24"
    >
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">

        {/* Judul Bagian */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-zinc-200">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">
              03 // PENGALAMAN
            </span>

            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-black tracking-tight mt-2">
              Perjalanan dan Pengalaman Saya.
            </h2>
          </div>

          <p className="font-mono text-xs text-zinc-600 uppercase tracking-wider font-semibold">
            Akademik, Pelatihan, dan Freelance
          </p>
        </div>

        {/* Kartu Pengalaman */}
        <div className="space-y-4">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className={`bg-zinc-50 border transition-all rounded-3xl p-6 sm:p-8 shadow-sm ${
                  isExpanded
                    ? 'border-black bg-white ring-1 ring-black/5'
                    : 'border-zinc-200 hover:border-zinc-400'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">

                  {/* Informasi Pengalaman */}
                  <div className="space-y-2 lg:max-w-xs shrink-0">
                    <span className="font-mono text-xs text-black font-bold tracking-wider">
                      {exp.period}
                    </span>

                    <h3 className="font-poppins font-bold text-xl text-black">
                      {exp.company}
                    </h3>

                    <p className="font-poppins text-sm text-zinc-600 font-medium">
                      {exp.role}
                    </p>

                    <span className="inline-block mt-2 px-3 py-1 rounded-full border border-zinc-300 bg-zinc-100 text-black font-mono text-[11px] font-semibold">
                      {exp.locationType}
                    </span>
                  </div>

                  {/* Deskripsi dan Rincian */}
                  <div className="flex-1 space-y-4">
                    <p className="font-poppins font-normal text-zinc-700 text-sm sm:text-base leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Rincian Pengalaman */}
                    {isExpanded && (
                      <div className="pt-2 space-y-2.5 animate-in fade-in duration-200">
                        <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">
                          RINCIAN PENGALAMAN:
                        </span>

                        <ul className="space-y-2">
                          {exp.achievements.map((ach, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-800 font-poppins"
                            >
                              <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Teknologi dan Tombol Detail */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md border border-zinc-300 bg-white text-[11px] font-mono text-zinc-800 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleExpand(exp.id)}
                        aria-expanded={isExpanded}
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-zinc-600 hover:text-black transition-colors"
                      >
                        <span>
                          {isExpanded
                            ? 'Tutup Rincian'
                            : 'Lihat Rincian'}
                        </span>

                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
