import React, { useState } from 'react';
import { ProfileConfig } from '../types/portfolio';
import { CopyPill } from '../components/ui/CopyPill';
import { postContactApi } from '../lib/api';
import { Mail, Github, Linkedin, Send, Phone, CheckCircle, Loader2 } from 'lucide-react';

interface ContactSectionProps {
  profile: ProfileConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
    <footer id="contact" className="relative min-h-screen flex flex-col justify-center py-20 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto space-y-14">
      {/* Header */}
      <div className="space-y-4 max-w-2xl">
        <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
          // 04. Start A Conversation
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Let’s Build Something Meaningful
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Whether you have an ambitious internship role, an engineering challenge, or an idea to discuss, my inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Channels with One-Click Copy */}
        <div className="space-y-4">
          <CopyPill label="Direct Email" value={profile.socials.email} href={`mailto:${profile.socials.email}`} icon={Mail} />
          <CopyPill label="GitHub Source" value={profile.socials.github} href={profile.socials.github} icon={Github} />
          <CopyPill label="LinkedIn Profile" value={profile.socials.linkedin} href={profile.socials.linkedin} icon={Linkedin} />
          <CopyPill label="Telegram Chat" value={profile.socials.telegram} href={profile.socials.telegram} icon={Send} />
          <CopyPill label="Phone" value={profile.socials.phone} href={`tel:${profile.socials.phone}`} icon={Phone} />
        </div>

        {/* Message Inquiry Form */}
        <div className="p-8 rounded-3xl glass-card border-white/10 space-y-6">
          <h3 className="text-lg font-display font-semibold text-white">Send A Direct Dispatch</h3>
          {submitted ? (
            <div className="p-6 rounded-2xl bg-cyan-950/40 border border-cyan-400/40 flex items-center gap-3 text-cyan-300">
              <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0" />
              <p className="text-xs sm:text-sm font-sans">
                Thank you! Your dispatch has been received. I will reply to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="What would you like to build or discuss?"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] active:scale-98 disabled:opacity-60"
              >
                {isSending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>{isSending ? 'Transmitting...' : 'Send Dispatch'}</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Signature & Closing */}
      <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <span>Designed &amp; Crafted by Biniyam Kibru Heramo • Addis Ababa</span>
        <span>Living Space 3D WebGL • 60 FPS</span>
      </div>
    </footer>
  );
};
