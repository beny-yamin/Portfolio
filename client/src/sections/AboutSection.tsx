import React from 'react';
import { ProfileConfig } from '../types/portfolio';
import { CraftExplorerTabs } from '../components/ui/CraftExplorerTabs';
import { Sparkles, Shield, HeartHandshake, Calendar } from 'lucide-react';

interface AboutSectionProps {
  profile: ProfileConfig;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  const valueIcons = [Sparkles, Shield, HeartHandshake];

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center py-20 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto space-y-20">
      {/* SECTION HEADER */}
      <div className="space-y-4 max-w-2xl">
        <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
          // 01. The Human Behind The Code
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Curiosity, Discipline, &amp; The Long Arc of Mastery
        </h2>
      </div>

      {/* LAYER 1: Personal Story & Addis Ababa Journey */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4 text-slate-300 font-sans leading-relaxed text-base sm:text-lg">
          {profile.aboutStory.slice(0, 2).map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        <div className="space-y-4 text-slate-300 font-sans leading-relaxed text-base sm:text-lg">
          {profile.aboutStory.slice(2).map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* LAYER 2: Inner Values & Stoic Daily Discipline */}
      <div className="space-y-8">
        <h3 className="text-xl sm:text-2xl font-display font-semibold text-white">
          What Guides My Everyday Engineering
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profile.innerValues.map((val, idx) => {
            const Icon = valueIcons[idx % valueIcons.length];
            return (
              <div
                key={val.title}
                className="p-6 rounded-2xl glass-card border-white/10 hover:border-cyan-500/40 space-y-4 group transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-display font-semibold text-white">{val.title}</h4>
                  <span className="text-xs font-mono text-amber-400/90">{val.principle}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{val.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* LAYER 3: Interactive Craft Explorer */}
      <div className="space-y-8">
        <h3 className="text-xl sm:text-2xl font-display font-semibold text-white">
          How I Build: Stack &amp; Methodologies
        </h3>
        <CraftExplorerTabs />
      </div>

      {/* LAYER 4: Moments Along The Way (Milestone Timeline) */}
      <div className="space-y-8">
        <h3 className="text-xl sm:text-2xl font-display font-semibold text-white">
          Milestones Along The Path
        </h3>
        <div className="relative border-l border-white/10 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {profile.journeyMilestones.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-obsidian-deep border-2 border-cyan-400 group-hover:scale-125 transition-transform" />
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-xs font-mono text-amber-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {m.year}
                  </span>
                  <h4 className="text-base sm:text-lg font-display font-semibold text-white">
                    {m.title}
                  </h4>
                </div>
                <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">{m.story}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {m.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-slate-400 bg-white/[0.03] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
