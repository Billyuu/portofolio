
import React from 'react';
import { Project } from '../types';
import {
  X,
  CheckCircle,
  ArrowRight,
  Layers,
  ShieldCheck,
} from 'lucide-react';

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative bg-zinc-950 border border-zinc-800 text-white max-w-3xl w-full rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 animate-in zoom-in-95 duration-150 my-auto">

        {/* Tombol Tutup */}
        <button
          type="button"
          onClick={onClose}
          id="close-architecture-modal-btn"
          className="absolute top-6 right-6 p-2 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
          aria-label="Tutup detail proyek"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Informasi Proyek */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-zinc-700 bg-zinc-900 font-semibold text-white">
              {project.caseStudyNum}
            </span>

            <span className="text-zinc-700">•</span>

            <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
              {project.domain}
            </span>
          </div>

          <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-white tracking-tight pt-1">
            {project.title}
          </h3>
        </div>

        {/* Gambar Proyek */}
        {project.image ? (
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 aspect-[16/9] max-h-64 sm:max-h-72">
            <img
              alt={`Gambar ${project.title}`}
              src={project.image}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 aspect-[16/9] max-h-64 sm:max-h-72 flex flex-col items-center justify-center gap-3">
            <Layers className="w-12 h-12 text-zinc-600" />
            <p className="text-sm text-zinc-500">
              Dokumentasi proyek belum tersedia
            </p>
          </div>
        )}

        {/* Deskripsi Proyek */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs uppercase text-zinc-400 font-semibold tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-white" />
            Gambaran dan Cara Kerja Sistem
          </h4>

          <p className="font-poppins text-sm text-zinc-300 leading-relaxed">
            {project.fullBreakdown || project.description}
          </p>
        </div>

        {/* Fitur dan Poin Utama */}
        {project.architectureHighlights &&
          project.architectureHighlights.length > 0 && (
            <div className="space-y-3 bg-zinc-900/60 border border-zinc-800/80 p-5 rounded-2xl">
              <h5 className="font-mono text-xs uppercase text-zinc-400 font-semibold tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-white" />
                Fitur dan Poin Utama
              </h5>

              <ul className="space-y-2">
                {project.architectureHighlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-poppins"
                  >
                    <CheckCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        {/* Informasi Metrik */}
        {project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-zinc-800 bg-zinc-900/60"
              >
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                  {m.label}
                </span>

                <p className="font-poppins font-bold text-xl text-white mt-1">
                  {m.value}
                </p>

                <p className="font-poppins text-xs text-zinc-400">
                  {m.subtext}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Teknologi yang Digunakan */}
        <div className="space-y-2">
          <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">
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

        {/* Tombol Bagian Bawah */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-zinc-800">
          <a
            href="#contact"
            onClick={onClose}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white text-black font-poppins font-bold text-sm hover:bg-zinc-200 transition-all"
          >
            <span>Hubungi Saya</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-6 rounded-xl border border-zinc-700 font-poppins font-medium text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
          >
            Tutup Detail
          </button>
        </div>
      </div>
    </div>
  );
};
