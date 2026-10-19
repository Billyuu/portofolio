
import React, { useState } from 'react';
import { PERSONAL_INFO, ARCHITECTURE_LOGS } from '../data/portfolioData';
import {
  Camera,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Notebook,
  Image as ImageIcon,
} from 'lucide-react';

export const WorkspaceSection: React.FC = () => {
  const [currentLogIndex, setCurrentLogIndex] = useState(0);

  const currentLog = ARCHITECTURE_LOGS[currentLogIndex];

  const handleNextLog = () => {
    setCurrentLogIndex(
      (prev) => (prev + 1) % ARCHITECTURE_LOGS.length
    );
  };

  const handlePrevLog = () => {
    setCurrentLogIndex(
      (prev) =>
        (prev - 1 + ARCHITECTURE_LOGS.length) %
        ARCHITECTURE_LOGS.length
    );
  };

  return (
    <section
      id="workspace"
      className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24 space-y-8"
    >
      {/* Judul Bagian */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-zinc-800">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-semibold">
            04 // Ruang Kerja & Catatan
          </span>

          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white tracking-tight mt-2">
            Ruang Kerja dan Proses Berkarya.
          </h2>
        </div>

        <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
          BELAJAR // MERANCANG // MENGEMBANGKAN
        </p>
      </div>

      {/* Galeri Utama */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Foto Ruang Kerja */}
        <div className="md:col-span-8 rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-sm group relative min-h-[360px] lg:min-h-[460px]">
          {PERSONAL_INFO.workspaceImage ? (
            <img
              src={PERSONAL_INFO.workspaceImage}
              alt="Ruang kerja untuk kegiatan pengembangan perangkat lunak"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out grayscale contrast-125"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-zinc-900 text-zinc-500">
              <ImageIcon className="w-12 h-12" />
              <p className="font-mono text-xs uppercase tracking-widest text-center px-6">
                Foto ruang kerja dapat ditambahkan di sini
              </p>
            </div>
          )}

          {/* <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/90 border border-zinc-800 backdrop-blur-md flex items-center justify-between gap-3">
            <div>
              <p className="font-poppins font-semibold text-xs text-white">
                Ruang Kerja Pengembangan
              </p>
              <p className="font-mono text-[11px] text-zinc-400 mt-1">
                Tempat belajar, bereksperimen, dan membangun solusi digital.
              </p>
            </div>

            <div className="p-2 rounded-full bg-zinc-900 border border-zinc-700 text-white shrink-0">
              <Camera className="w-4 h-4" />
            </div>
          </div> */}
        </div>

        {/* Kolom Catatan dan Kontak */}
        <div className="md:col-span-4 flex flex-col gap-6">
          {/* Catatan Pengembangan */}
          <div className="p-6 rounded-3xl border border-zinc-800 bg-zinc-950 shadow-sm flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800 gap-3">
                <span className="font-mono text-xs text-white font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Notebook className="w-3.5 h-3.5 text-zinc-400" />
                  Catatan Pengembangan
                </span>

                {currentLog && (
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-mono text-[10px] text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                      {currentLog.version}
                    </span>

                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={handlePrevLog}
                        disabled={ARCHITECTURE_LOGS.length <= 1}
                        className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white disabled:opacity-30 transition-colors"
                        aria-label="Catatan sebelumnya"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={handleNextLog}
                        disabled={ARCHITECTURE_LOGS.length <= 1}
                        className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white disabled:opacity-30 transition-colors"
                        aria-label="Catatan berikutnya"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {currentLog ? (
                <>
                  <p className="font-poppins font-medium text-sm text-white mt-4 italic leading-relaxed">
                    {currentLog.quote}
                  </p>

                  <p className="font-poppins font-normal text-xs text-zinc-400 mt-3 leading-relaxed">
                    {currentLog.explanation}
                  </p>
                </>
              ) : (
                <p className="font-poppins text-sm text-zinc-400 mt-4 leading-relaxed">
                  Catatan mengenai proses belajar, pemecahan masalah, dan
                  pengembangan aplikasi akan ditampilkan di sini.
                </p>
              )}
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-zinc-900 mt-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span className="font-mono text-[11px] text-zinc-400">
                  {currentLog?.author ?? 'Catatan Pribadi'}
                </span>
              </div>

              <span className="font-mono text-[10px] text-zinc-600">
                {ARCHITECTURE_LOGS.length > 0
                  ? `${currentLogIndex + 1} / ${ARCHITECTURE_LOGS.length}`
                  : '0 catatan'}
              </span>
            </div>
          </div>

          {/* Kartu Kontak */}
          <div className="p-6 rounded-3xl bg-white text-black border border-white shadow-lg flex flex-col justify-between">
            <span className="font-mono text-xs text-zinc-600 font-bold tracking-wider uppercase">
              Mari Berkolaborasi
            </span>

            <p className="font-poppins font-semibold text-base text-black my-3">
              Terbuka untuk peluang kerja, proyek pengembangan aplikasi,
              dan kolaborasi di bidang teknologi.
            </p>

            <a
              className="inline-flex items-center gap-1.5 font-poppins font-bold text-xs text-black hover:underline transition-all group"
              href="#contact"
            >
              <span>Hubungi Saya</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
