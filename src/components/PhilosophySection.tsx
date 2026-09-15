import React, { useState } from 'react';
import { PERSONAL_INFO, CAPABILITIES } from '../data/portfolioData';
import { Download, CheckCircle2, Smartphone, Globe, Database, Info, X } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; description: string } | null>(null);
  const [showDossierModal, setShowDossierModal] = useState(false);

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

  return (
    <section id="philosophy" className="w-full bg-white text-black py-16 lg:py-24">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-zinc-200">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">
              01 // Architectural Standards
            </span>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-black tracking-tight">
              Thoughtful Architecture, Deliberate Code.
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setShowDossierModal(true)}
            id="dossier-modal-trigger-btn"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-black hover:text-zinc-600 transition-colors cursor-pointer self-start md:self-auto py-1"
          >
            <span>Request Technical Dossier</span>
            <Download className="w-4 h-4" />
          </button>
        </div>

        {/* Philosophy Statement & Numbers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio Card */}
          <div className="lg:col-span-7 bg-zinc-50 border border-zinc-200 p-6 sm:p-8 rounded-3xl space-y-6">
            <h3 className="font-poppins font-semibold text-xl text-black leading-snug">
              Engineering scale across platforms without compromising sensory craft.
            </h3>
            <p className="font-poppins font-normal text-zinc-700 leading-relaxed text-sm sm:text-base">
              I specialize in designing modular micro-frontend ecosystems and robust mobile architectures built to endure unpredictable networking conditions. By synthesizing strict mathematical layout rules, strict type contracts, and zero-latency caching pipelines, I create products that feel effortless to the user and resilient to the business.
            </p>
            <div className="p-4 rounded-2xl bg-white border border-zinc-200 flex items-start gap-4 shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <div>
                <p className="font-poppins font-semibold text-xs uppercase tracking-wide text-black">
                  Core Architectural Invariant
                </p>
                <p className="font-poppins text-xs text-zinc-600 mt-1 leading-relaxed">
                  Zero client-side cascading failures: decoupled fault domains, deterministic SQLite synchronization, and 100/100 Core Web Vital budgets.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Stat Metric Tiles */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between hover:border-black transition-colors">
              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                EXPERIENCE
              </span>
              <div className="my-4">
                <span className="font-poppins font-bold text-4xl sm:text-5xl text-black tracking-tight">
                  {PERSONAL_INFO.experienceCount}
                </span>
              </div>
              <p className="font-poppins text-xs text-zinc-700 font-medium">
                Years in Mobile &amp; Web Systems
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between hover:border-black transition-colors">
              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                DELIVERY
              </span>
              <div className="my-4">
                <span className="font-poppins font-bold text-4xl sm:text-5xl text-black tracking-tight">
                  {PERSONAL_INFO.productionApps}
                </span>
              </div>
              <p className="font-poppins text-xs text-zinc-700 font-medium">
                Production Apps Shipped
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between hover:border-black transition-colors">
              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                RELIABILITY
              </span>
              <div className="my-4">
                <span className="font-poppins font-bold text-4xl sm:text-5xl text-black tracking-tight">
                  {PERSONAL_INFO.uptime}
                </span>
              </div>
              <p className="font-poppins text-xs text-zinc-700 font-medium">
                Uptime Metric Track Record
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between hover:border-black transition-colors">
              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                TOOLING
              </span>
              <div className="my-4">
                <span className="font-poppins font-bold text-4xl sm:text-5xl text-black tracking-tight">
                  {PERSONAL_INFO.productionStacks}
                </span>
              </div>
              <p className="font-poppins text-xs text-zinc-700 font-medium">
                Production Stacks Mastered
              </p>
            </div>
          </div>
        </div>

        {/* Technical Capability Matrix */}
        <div className="bg-zinc-50 border border-zinc-200 p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
            <div>
              <p className="font-poppins font-bold text-sm uppercase tracking-wider text-black">
                Technical Capability Matrix
              </p>
              <p className="text-xs text-zinc-500 font-normal">
                Click any competency to inspect production architectural usage
              </p>
            </div>
            <span className="font-mono text-[11px] text-zinc-500">UPDATED 2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {CAPABILITIES.map((cat) => (
              <div key={cat.category} className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-black font-bold flex items-center gap-1.5">
                  {getIconForCategory(cat.icon)}
                  {cat.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const isSelected = selectedSkill?.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        type="button"
                        onClick={() => setSelectedSkill(isSelected ? null : skill)}
                        className={`px-3 py-1.5 rounded-full border text-xs font-poppins font-medium transition-all text-left ${
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

          {/* Interactive Skill Detail Callout */}
          {selectedSkill && (
            <div className="p-4 rounded-2xl bg-white border-2 border-black animate-in fade-in duration-200 flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
                  Competency Invariant // {selectedSkill.name}
                </span>
                <p className="text-sm font-poppins text-black font-medium mt-1">
                  {selectedSkill.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSkill(null)}
                className="text-zinc-500 hover:text-black p-1"
                aria-label="Close competency detail"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Technical Dossier Modal */}
      {showDossierModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-black max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 border border-zinc-300 animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-bold">
                DOCUMENT TRANSMISSION
              </span>
              <button
                type="button"
                onClick={() => setShowDossierModal(false)}
                className="p-1 rounded-full hover:bg-zinc-100 text-zinc-600 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <h4 className="font-poppins font-bold text-xl text-black">
                Rendy Andrian — Systems Architecture Dossier (2026)
              </h4>
              <p className="font-poppins text-xs text-zinc-600 leading-relaxed">
                Includes comprehensive engineering invariants, peer-reviewed offline sync schemas, micro-frontend module federation contracts, and benchmarks across 24+ deployed production apps.
              </p>
            </div>

            <div className="bg-zinc-100 p-4 rounded-2xl space-y-2 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-zinc-500">FORMAT:</span>
                <span className="font-semibold text-black">PDF / Cryptographic Bundle</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">SIGNATURE:</span>
                <span className="font-semibold text-black">SHA256: 9e4f..8b21</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">DIRECT EMAIL:</span>
                <span className="font-semibold text-black">{PERSONAL_INFO.email}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#contact"
                onClick={() => setShowDossierModal(false)}
                className="flex-1 py-3 px-4 rounded-xl bg-black text-white text-center font-poppins font-semibold text-xs hover:bg-zinc-800 transition-colors"
              >
                Direct Inquiry via Contact
              </a>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(PERSONAL_INFO.email);
                  alert(`Email address copied (${PERSONAL_INFO.email}). Dossier inquiry ready!`);
                  setShowDossierModal(false);
                }}
                className="py-3 px-4 rounded-xl border border-zinc-300 text-black font-poppins font-semibold text-xs hover:bg-zinc-100 transition-colors"
              >
                Copy Email
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
