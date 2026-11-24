import React, { useState } from 'react';
import { ProfileConfig } from '../types/portfolio';
import { postContactApi } from '../lib/api';
import { Mail, Github, Linkedin, Send, Phone, CheckCircle, Loader2, Copy, Check } from 'lucide-react';

interface ContactSectionProps {
  profile: ProfileConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    await postContactApi({
      senderName: formData.name,
      senderEmail: formData.email,
      opportunityType: 'General Inquiry',
      message: formData.message,
    });
    setIsSending(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4500);
  };

  return (
    <footer
      id="contact"
      className="relative h-screen min-h-[640px] max-h-screen w-full bg-[#000000] text-slate-100 flex flex-col justify-between py-10 sm:py-14 px-6 sm:px-12 select-none overflow-hidden max-w-7xl mx-auto border-t border-white/10"
    >
      {/* 1. TOP HEADER RULE (MATCHING REFERENCE UI) */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-white/50 tracking-wider">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 font-semibold">[ 06 // CONTACT &amp; PRODUCTION DISPATCH ]</span>
        </div>
        <div className="flex items-center gap-2 text-emerald-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>OPEN FOR INTERNSHIPS &amp; COLLABORATION</span>
        </div>
      </div>

      {/* 2. SECTION HEADLINE */}
      <div className="space-y-1 pt-1">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-tight">
          Have A System To Build, Scale, Or Deploy?
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm font-sans max-w-2xl leading-relaxed">
          Open for Software Engineering internships, high-concurrency systems development, and ambitious product builds.
        </p>
      </div>

      {/* 3. MAIN 2-COLUMN VIEWPORT STAGE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto py-2">
        {/* LEFT COLUMN: IDENTITY CARD & DIRECT CHANNELS */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {/* Identity Box */}
          <div className="border border-white/15 bg-white/[0.02] p-4 flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 border border-white/20 bg-black overflow-hidden shrink-0">
              <img
                src={profile.portraitUrl}
                alt={profile.fullName}
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="space-y-0.5 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-display font-semibold text-white">
                  Biniyam Kibru
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs font-mono text-cyan-300 block">
                Full-Stack Systems Engineer
              </span>
              <span className="text-[11px] font-mono text-slate-400 block truncate">
                Frontend · Backend · 3D WebGL
              </span>
            </div>
          </div>

          {/* Primary Email with One-Click Copy */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-mono text-white/40">
              <span>PRIMARY EMAIL</span>
              <span className="text-cyan-400">Direct Inquiries</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs">
              <a
                href={`mailto:${profile.socials.email}`}
                className="flex-1 px-3 py-2 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-slate-200 transition-colors truncate"
              >
                {profile.socials.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-2 border border-cyan-500/30 bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-300 transition-colors flex items-center gap-1.5 shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
          </div>

          {/* Direct Communication Channels Grid */}
          <div className="grid grid-cols-2 gap-2 font-mono text-xs">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-slate-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <Github className="w-3.5 h-3.5 text-cyan-400" />
              <span className="truncate">GitHub</span>
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-slate-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
              <span className="truncate">LinkedIn</span>
            </a>
            <a
              href={profile.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-slate-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5 text-cyan-400" />
              <span className="truncate">Telegram</span>
            </a>
            <a
              href={`tel:${profile.socials.phone}`}
              className="p-2.5 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-slate-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span className="truncate">Phone</span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: DIRECT DISPATCH FORM */}
        <div className="lg:col-span-7 border border-white/15 bg-white/[0.02] p-5 h-full max-h-[340px] flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-xs">
            <span className="text-cyan-400">// DIRECT MESSAGE DISPATCH</span>
            <span className="text-white/40">AVAILABLE WORLDWIDE</span>
          </div>

          {submitted ? (
            <div className="p-6 bg-cyan-950/40 border border-cyan-400/40 flex items-center gap-3 text-cyan-300 my-auto">
              <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0" />
              <div className="text-xs font-sans">
                <span className="font-semibold block text-white">Dispatch Transmitted.</span>
                Thank you! I will reply to your message as soon as possible.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5 my-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <textarea
                rows={3}
                placeholder="What system, project, or role would you like to discuss?"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              />

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-2.5 px-4 font-mono text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-white transition-all shadow-[0_0_15px_rgba(56,189,248,0.25)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>TRANSMITTING DISPATCH...</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5" />
                    <span>DISPATCH MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          )}

          <div className="flex items-center justify-between font-mono text-[10px] text-white/40 pt-2 border-t border-white/10">
            <span>Direct Routing</span>
            <span>Addis Ababa (UTC+3)</span>
          </div>
        </div>
      </div>

      {/* 4. FOOTER CREDITS RULE */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10 font-mono text-[11px] text-white/40">
        <span>© 2026 BINIYAM KIBRU HERAMO. ALL RIGHTS RESERVED.</span>
        <span>DESIGNED &amp; CRAFTED IN ADDIS ABABA, ETHIOPIA</span>
      </div>
    </footer>
  );
};
