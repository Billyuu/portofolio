import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';
import { Mail, MessageSquare, Clock, Send, Check, Copy } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    scope: 'Mobile App Architecture (Flutter)',
    budget: '$15k — $35k USD',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      scope: 'Mobile App Architecture (Flutter)',
      budget: '$15k — $35k USD',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 pb-16 lg:pb-24"
    >
      <div className="bg-black border border-zinc-800 rounded-[2.5rem] p-6 sm:p-10 lg:p-16 shadow-[0_24px_50px_rgba(0,0,0,0.4)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Statement & Direct Comms */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-[0.2em] font-semibold">
                05 // INITIATE DIALOGUE
              </span>
              <h2 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                HAVE A VISION TO BUILD? <br />
                <span className="text-zinc-400 underline decoration-white decoration-2 underline-offset-8">
                  LET'S TALK.
                </span>
              </h2>
            </div>

            <p className="font-poppins font-normal text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md">
              Whether you need a principal architect for a high-stakes mobile rollout or an overhaul of an enterprise web codebase, let's establish alignment.
            </p>

            {/* Direct Channels */}
            <div className="space-y-5 pt-2">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-white shrink-0 group-hover:border-zinc-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    DIRECT EMAIL
                  </p>
                  <div className="flex items-center gap-2">
                    <a
                      className="font-poppins font-medium text-sm sm:text-base text-white hover:text-zinc-300 transition-colors"
                      href={`mailto:${PERSONAL_INFO.email}`}
                    >
                      {PERSONAL_INFO.email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-1 text-zinc-500 hover:text-white transition-colors"
                      title="Copy email address"
                    >
                      {copiedEmail ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    {copiedEmail && (
                      <span className="text-[10px] font-mono text-emerald-400">Copied</span>
                    )}
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-white shrink-0 group-hover:border-zinc-600 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    WHATSAPP / DIRECT CALL
                  </p>
                  <a
                    className="font-poppins font-medium text-sm sm:text-base text-white hover:text-zinc-300 transition-colors"
                    href={PERSONAL_INFO.whatsappUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {PERSONAL_INFO.whatsapp}
                  </a>
                </div>
              </div>

              {/* Timezone */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-white shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    TIMEZONE EFFICIENCY
                  </p>
                  <p className="font-poppins font-medium text-sm text-zinc-200">
                    Jakarta, Indonesia (WIB / UTC+7) • Seamless Remote Overlap
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-6 bg-zinc-950 border border-zinc-800 p-6 sm:p-8 rounded-3xl">
            {isSubmitted ? (
              <div className="space-y-6 py-6 text-center animate-in fade-in duration-200">
                <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Check className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-poppins font-bold text-xl text-white">
                    Transmission Received
                  </h4>
                  <p className="font-poppins text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name || 'colleague'}. Rendy has received your brief regarding the {formData.scope} initiative and will reply within 24 hours.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-left font-mono text-xs space-y-1.5 text-zinc-300">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">TRANSMISSION ID:</span>
                    <span className="text-white font-semibold">TRX-{Date.now().toString().slice(-6)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">BUDGET TIER:</span>
                    <span>{formData.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">DISPATCH TO:</span>
                    <span>{formData.email}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl border border-zinc-700 text-xs font-mono uppercase text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
                >
                  Submit Another Brief
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit} id="inquiry-form">
                <div>
                  <label
                    className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5"
                    htmlFor="contact-name"
                  >
                    Your Full Name / Entity *
                  </label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan (Venture Studio)"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 text-sm font-poppins focus:border-white focus:ring-1 focus:ring-white focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5"
                    htmlFor="contact-email"
                  >
                    Work Email *
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 text-sm font-poppins focus:border-white focus:ring-1 focus:ring-white focus:outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5"
                      htmlFor="contact-scope"
                    >
                      Project Scope
                    </label>
                    <select
                      id="contact-scope"
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm font-poppins focus:border-white focus:ring-1 focus:ring-white focus:outline-none transition-all cursor-pointer"
                    >
                      <option value="Mobile App Architecture (Flutter)">
                        Mobile App Architecture (Flutter)
                      </option>
                      <option value="Fullstack Web (React / Next.js)">
                        Fullstack Web (React / Next.js)
                      </option>
                      <option value="Enterprise Systems & Audit">
                        Enterprise Systems &amp; Audit
                      </option>
                      <option value="Technical Advisory / Fractional">
                        Technical Advisory / Fractional
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5"
                      htmlFor="contact-budget"
                    >
                      Anticipated Budget
                    </label>
                    <select
                      id="contact-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm font-poppins focus:border-white focus:ring-1 focus:ring-white focus:outline-none transition-all cursor-pointer"
                    >
                      <option value="$5k — $15k USD">$5k — $15k USD</option>
                      <option value="$15k — $35k USD">$15k — $35k USD</option>
                      <option value="$35k+ USD">$35k+ USD</option>
                      <option value="Monthly Retainer">Monthly Retainer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5"
                    htmlFor="contact-message"
                  >
                    System Brief / Core Objective *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Outline key milestones, existing stack challenges, and target launch window..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 text-sm font-poppins focus:border-white focus:ring-1 focus:ring-white focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    id="submit-inquiry-btn"
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-black font-poppins font-bold text-sm tracking-wide hover:bg-zinc-200 transition-all active:scale-[0.99] disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Transmitting Brief...' : 'Send Technical Inquiry'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
