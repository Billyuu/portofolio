import React, { useState } from 'react';
import { PERSONAL_INFO, ARCHITECTURE_LOGS } from '../data/portfolioData';
import { Camera, ArrowRight, ChevronLeft, ChevronRight, Notebook } from 'lucide-react';

export const WorkspaceSection: React.FC = () => {
  const [currentLogIndex, setCurrentLogIndex] = useState(0);

  const currentLog = ARCHITECTURE_LOGS[currentLogIndex];

  const handleNextLog = () => {
    setCurrentLogIndex((prev) => (prev + 1) % ARCHITECTURE_LOGS.length);
  };

  const handlePrevLog = () => {
    setCurrentLogIndex((prev) => (prev - 1 + ARCHITECTURE_LOGS.length) % ARCHITECTURE_LOGS.length);
  };

  return (
    <section
      id="archive"
      className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24 space-y-8"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-zinc-800">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-semibold">
            04 // Environment &amp; Artifacts
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white tracking-tight mt-2">
            Workspace Aesthetics &amp; Laboratory.
          </h2>
        </div>
        <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
          PHYSICAL // DIGITAL COHESION
        </p>
      </div>

      {/* Asymmetric Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Main Desk Workspace Shot */}
        <div className="md:col-span-8 rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-sm group relative min-h-[360px] lg:min-h-[460px]">
          <img
            alt="Minimalist software engineering desk setup"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out grayscale contrast-125"
            src={PERSONAL_INFO.workspaceImage}
          />
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/90 border border-zinc-800 backdrop-blur-md flex items-center justify-between">
            <div>
              <p className="font-poppins font-semibold text-xs text-white">
                Workstation Datum / Jakarta Studio
              </p>
              <p className="font-mono text-[11px] text-zinc-400">
                Clean architectural workspace fostering deep concentration
              </p>
            </div>
            <div className="p-2 rounded-full bg-zinc-900 border border-zinc-700 text-white">
              <Camera className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Detail Cards Column */}
        <div className="md:col-span-4 flex flex-col gap-6">
          {/* Architecture Notebook Log Card */}
          <div className="p-6 rounded-3xl border border-zinc-800 bg-zinc-950 shadow-sm flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="font-mono text-xs text-white font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Notebook className="w-3.5 h-3.5 text-zinc-400" />
                  ARCHITECTURE LOG
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    {currentLog.version}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={handlePrevLog}
                      className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      aria-label="Previous architecture log"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextLog}
                      className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      aria-label="Next architecture log"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              <p className="font-poppins font-medium text-sm text-white mt-4 italic">
                {currentLog.quote}
              </p>
              <p className="font-poppins font-normal text-xs text-zinc-400 mt-2 leading-relaxed">
                {currentLog.explanation}
              </p>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-zinc-900 mt-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span className="font-mono text-[11px] text-zinc-400">
                  {currentLog.author}
                </span>
              </div>
              <span className="font-mono text-[10px] text-zinc-600">
                {currentLogIndex + 1} / {ARCHITECTURE_LOGS.length}
              </span>
            </div>
          </div>

          {/* Collaboration Slots Card */}
          <div className="p-6 rounded-3xl bg-white text-black border border-white shadow-lg flex flex-col justify-between">
            <span className="font-mono text-xs text-zinc-600 font-bold tracking-wider uppercase">
              COLLABORATION SLOTS
            </span>
            <p className="font-poppins font-semibold text-base text-black my-3">
              Accepting select mobile architecture advisory &amp; web build contracts.
            </p>
            <a
              className="inline-flex items-center gap-1.5 font-poppins font-bold text-xs text-black hover:underline transition-all group"
              href="#contact"
            >
              <span>Verify current timeline slot</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
