import React from 'react';
import { User, Code2, Sparkles, ArrowRight, Github, Linkedin, Send } from 'lucide-react';
import { ProfileConfig } from '../../types/portfolio';
import { scrollToTarget } from '../../lib/lenisInstance';

interface HeroBottomDockProps {
  socials: ProfileConfig['socials'];
}

export const HeroBottomDock: React.FC<HeroBottomDockProps> = ({ socials }) => {
  const cards = [
    {
      title: 'About Me',
      desc: 'Systems builder & CS student passionate about distributed architectures.',
      href: '#about',
      action: 'Learn More',
      icon: User,
    },
    {
      title: 'My Projects',
      desc: 'Production applications, offline-first PWAs, and reactive data visualizers.',
      href: '#projects',
      action: 'View Projects',
      icon: Code2,
    },
    {
      title: 'My Vision',
      desc: 'Building high-performance software infrastructure for the global stage.',
      href: '#vision',
      action: 'Discover More',
      icon: Sparkles,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 mt-8 lg:mt-12 z-20 space-y-4">
      {/* 3 Glass Preview Cards matching blueprint */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <a
              key={i}
              href={c.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget(c.href, -30);
              }}
              className="group p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-md border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between space-y-3 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-display font-semibold text-white tracking-wide">{c.title}</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">{c.desc}</p>
              <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 pt-1 group-hover:translate-x-1 transition-transform">
                <span>{c.action}</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </a>
          );
        })}
      </div>

      {/* Quick Connect Bar matching blueprint */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/10 text-xs">
        <div className="flex items-center gap-2 text-slate-300 font-mono">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Let&apos;s Connect &amp; Collaborate</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {socials?.github && (
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 flex items-center justify-center text-slate-300 hover:text-cyan-300 transition-colors"
                title="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            {socials?.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 flex items-center justify-center text-slate-300 hover:text-cyan-300 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            )}
            {socials?.telegram && (
              <a
                href={socials.telegram}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 flex items-center justify-center text-slate-300 hover:text-cyan-300 transition-colors"
                title="Telegram"
              >
                <Send className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget('#contact', -30);
            }}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 font-mono text-xs hover:border-cyan-400/60 transition-all cursor-pointer"
          >
            <span>Contact Me</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
