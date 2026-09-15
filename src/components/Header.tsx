import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Check } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navItems = [
    { label: 'About', href: '#hero', id: 'hero' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Archive', href: '#archive', id: 'archive' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/90 backdrop-blur-xl border-b border-zinc-800 transition-all duration-200">
      <div className="h-20 w-full px-4 sm:px-6 lg:px-12 max-w-[1280px] mx-auto flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#hero"
            id="brand-logo-btn"
            className="flex items-center gap-2 group text-decoration-none"
          >
            <span className="font-mono text-xs uppercase text-white font-semibold tracking-widest bg-zinc-900 border border-zinc-700 px-2 py-1 rounded">
              {PERSONAL_INFO.initials}
            </span>
            <span className="text-zinc-600 font-mono text-xs">/</span>
            <span className="font-poppins text-sm font-semibold text-white tracking-tight group-hover:text-zinc-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
          </a>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-[11px] text-zinc-300 uppercase tracking-widest">
              {PERSONAL_INFO.availability}
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 p-1 rounded-full border border-zinc-800 bg-zinc-950/90"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'text-black bg-white shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60 font-mono'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Actions & Avatar */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            id="header-talk-btn"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-white text-black font-mono text-xs font-semibold tracking-widest uppercase hover:bg-zinc-200 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.12)]"
          >
            Let's Talk
          </a>

          <div className="relative group cursor-pointer" onClick={handleCopyEmail} title="Click to copy email">
            <img
              alt="Rendy Andrian Profile"
              className="w-9 h-9 rounded-full object-cover ring-1 ring-zinc-700 grayscale contrast-125 hover:ring-white transition-all"
              src={PERSONAL_INFO.avatarImage}
            />
            {copiedEmail && (
              <span className="absolute -bottom-7 right-0 whitespace-nowrap bg-white text-black text-[10px] font-mono px-2 py-0.5 rounded shadow-lg flex items-center gap-1">
                <Check className="w-2.5 h-2.5" /> Copied!
              </span>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-black/95 px-6 py-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center gap-2 pb-2 border-b border-zinc-900">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-[11px] text-zinc-300 uppercase tracking-widest">
              {PERSONAL_INFO.availability}
            </span>
          </div>

          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2.5 px-3 rounded-xl font-poppins text-sm flex items-center justify-between ${
                  activeSection === item.id
                    ? 'bg-zinc-900 text-white font-semibold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                }`}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-zinc-900 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-white text-black font-mono text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
