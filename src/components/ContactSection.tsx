
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';
import {
  Mail,
  MessageSquare,
  Clock,
  Send,
  Check,
  Copy,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    scope: 'Peluang Kerja',
    budget: 'Belum ditentukan',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.prompt('Salin alamat email berikut:', PERSONAL_INFO.email);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Pesan Portofolio - ${formData.scope}`;

    const body = [
      `Nama: ${formData.name}`,
      `Email: ${formData.email}`,
      `Keperluan: ${formData.scope}`,
      `Anggaran: ${formData.budget}`,
      '',
      'Pesan:',
      formData.message,
    ].join('\n');

    const mailtoUrl =
      `mailto:${PERSONAL_INFO.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 pb-16 lg:pb-24"
    >
      <div className="bg-black border border-zinc-800 rounded-[2.5rem] p-6 sm:p-10 lg:p-16 shadow-[0_24px_50px_rgba(0,0,0,0.4)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Informasi Kontak */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-[0.2em] font-semibold">
                05 // HUBUNGI SAYA
              </span>

              <h2 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                PUNYA PELUANG
                <br />
                <span className="text-zinc-400 underline decoration-white decoration-2 underline-offset-8">
                  UNTUK KITA KERJAKAN?
                </span>
              </h2>
            </div>

            <p className="font-poppins font-normal text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md">
              Saya terbuka terhadap peluang kerja, proyek freelance,
              dan kolaborasi di bidang pengembangan aplikasi mobile
              maupun website. Silakan hubungi saya untuk berdiskusi
              lebih lanjut.
            </p>

            {/* Email */}
            <div className="space-y-5 pt-2">
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-white shrink-0 group-hover:border-zinc-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    ALAMAT EMAIL
                  </p>

                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      className="font-poppins font-medium text-sm sm:text-base text-white hover:text-zinc-300 transition-colors break-all"
                      href={`mailto:${PERSONAL_INFO.email}`}
                    >
                      {PERSONAL_INFO.email}
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-1 text-zinc-500 hover:text-white transition-colors"
                      title="Salin alamat email"
                      aria-label="Salin alamat email"
                    >
                      {copiedEmail ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {copiedEmail && (
                      <span className="text-[10px] font-mono text-emerald-400">
                        Email disalin
                      </span>
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
                    WHATSAPP
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

              {/* Lokasi */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-white shrink-0">
                  <Clock className="w-5 h-5" />
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    LOKASI
                  </p>

                  <p className="font-poppins font-medium text-sm text-zinc-200">
                    {PERSONAL_INFO.location}
                  </p>
                  <p className="font-poppins text-xs text-zinc-500 mt-1">
                    Terbuka untuk peluang kerja dan kolaborasi jarak jauh.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulir Kontak */}
          <div className="lg:col-span-6 bg-zinc-950 border border-zinc-800 p-6 sm:p-8 rounded-3xl">
            <div className="space-y-2 mb-6">
              <h3 className="font-poppins font-bold text-xl text-white">
                Kirim Pesan
              </h3>
              <p className="font-poppins text-xs sm:text-sm text-zinc-400">
                Isi formulir berikut untuk menyiapkan pesan melalui email.
              </p>
            </div>

            <form
              className="space-y-4"
              onSubmit={handleSubmit}
              id="inquiry-form"
            >
              {/* Nama */}
              <div>
                <label
                  className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5"
                  htmlFor="contact-name"
                >
                  Nama Lengkap *
                </label>

                <input
                  id="contact-name"
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Masukkan nama lengkap"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 text-sm font-poppins focus:border-white focus:ring-1 focus:ring-white focus:outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5"
                  htmlFor="contact-email"
                >
                  Email Anda *
                </label>

                <input
                  id="contact-email"
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="nama@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 text-sm font-poppins focus:border-white focus:ring-1 focus:ring-white focus:outline-none transition-all"
                />
              </div>

              {/* Keperluan dan Anggaran */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5"
                    htmlFor="contact-scope"
                  >
                    Keperluan *
                  </label>

                  <select
                    id="contact-scope"
                    value={formData.scope}
                    onChange={(e) =>
                      setFormData({ ...formData, scope: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm font-poppins focus:border-white focus:ring-1 focus:ring-white focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="Peluang Kerja">Peluang Kerja</option>
                    <option value="Proyek Freelance">Proyek Freelance</option>
                    <option value="Pengembangan Aplikasi Mobile">
                      Aplikasi Mobile
                    </option>
                    <option value="Pengembangan Website">
                      Pengembangan Website
                    </option>
                    <option value="Kolaborasi">Kolaborasi</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5"
                    htmlFor="contact-budget"
                  >
                    Anggaran (Opsional)
                  </label>

                  <select
                    id="contact-budget"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm font-poppins focus:border-white focus:ring-1 focus:ring-white focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="Belum ditentukan">Belum ditentukan</option>
                    <option value="Di bawah Rp1 juta">
                      Di bawah Rp1 juta
                    </option>
                    <option value="Rp1 juta–Rp5 juta">
                      Rp1 juta–Rp5 juta
                    </option>
                    <option value="Rp5 juta–Rp10 juta">
                      Rp5 juta–Rp10 juta
                    </option>
                    <option value="Di atas Rp10 juta">
                      Di atas Rp10 juta
                    </option>
                    <option value="Dibicarakan lebih lanjut">
                      Dibicarakan lebih lanjut
                    </option>
                  </select>
                </div>
              </div>

              {/* Pesan */}
              <div>
                <label
                  className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5"
                  htmlFor="contact-message"
                >
                  Pesan *
                </label>

                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tuliskan tujuan atau detail pesan Anda..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 text-sm font-poppins focus:border-white focus:ring-1 focus:ring-white focus:outline-none transition-all resize-y"
                />
              </div>

              {/* Tombol Kirim */}
              <div className="pt-2">
                <button
                  id="submit-inquiry-btn"
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-black font-poppins font-bold text-sm tracking-wide hover:bg-zinc-200 transition-all active:scale-[0.99]"
                >
                  <span>Lanjutkan ke Email</span>
                  <Send className="w-4 h-4" />
                </button>

                <p className="font-poppins text-xs text-zinc-500 mt-3 leading-relaxed">
                  Tombol ini akan membuka aplikasi email Anda dengan isi pesan
                  yang sudah disiapkan. Pesan belum terkirim sampai Anda
                  menekan tombol Kirim di aplikasi email.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
