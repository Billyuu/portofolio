import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const [jakartaTime, setJakartaTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());
        setJakartaTime(`${timeStr} WIB`);
      } catch {
        setJakartaTime('UTC+7');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-black border-t border-zinc-900 py-10">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-zinc-400">
        {/* Copyright & Title */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="text-white font-medium">© 2026 {PERSONAL_INFO.name}</span>
          <span className="text-zinc-700">•</span>
          <span>Software Engineer</span>
        </div>

        {/* Timezone Indicator */}
        <div className="flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300">
          <Clock className="w-3.5 h-3.5 text-zinc-400" />
          <span>Jakarta, ID ({jakartaTime || 'UTC+7'})</span>
        </div>

        {/* Links & Back to Top */}
        <div className="flex items-center gap-4 sm:gap-6 font-mono">
          <a
            className="hover:text-white transition-colors uppercase tracking-wider"
            href={PERSONAL_INFO.github}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="hover:text-white transition-colors uppercase tracking-wider"
            href={PERSONAL_INFO.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-white transition-colors uppercase tracking-wider"
            href={PERSONAL_INFO.readcv}
            rel="noreferrer"
            target="_blank"
          >
            ReadCV
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
