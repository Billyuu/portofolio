import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';
import { ArchitectureModal } from './ArchitectureModal';

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="work"
      className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24 space-y-16"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-zinc-800">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-semibold">
            02 // Production Exhibits
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-5xl text-white tracking-tight mt-2">
            Selected Engineering Works.
          </h2>
        </div>
        <p className="font-poppins text-sm text-zinc-400 max-w-sm">
          Curated systems shipped across healthcare logistics, enterprise financial ledgers, and distributed field operations.
        </p>
      </div>

      {/* Project Cards Stack */}
      <div className="space-y-12">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 1; // Alternating layout like the design reference

          return (
            <div
              key={project.id}
              className="border border-zinc-800 bg-zinc-950 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group hover:border-zinc-700 transition-colors"
            >
              {/* Text Column */}
              <div
                className={`lg:col-span-6 space-y-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="flex items-center gap-3">
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

                {/* Metric highlights */}
                <div className="grid grid-cols-2 gap-4 py-2">
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl border border-zinc-800 bg-zinc-900/60"
                    >
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                        {m.label}
                      </span>
                      <p className="font-poppins font-semibold text-lg text-white">
                        {m.value}
                      </p>
                      <p className="font-poppins text-[11px] text-zinc-400">
                        {m.subtext}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 font-mono text-xs text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 font-poppins font-semibold text-sm text-white hover:text-zinc-400 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>{project.actionText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Image Column */}
              <div
                className={`lg:col-span-6 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 aspect-[16/10] shadow-inner relative"
                >
                  <img
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0"
                    alt={project.title}
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="font-mono text-[11px] bg-black/80 backdrop-blur px-3 py-1 rounded-full text-white border border-zinc-700">
                      Click to inspect architecture
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Architecture Deep Dive Modal */}
      <ArchitectureModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
