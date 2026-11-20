import React from 'react';
import { ProfileConfig } from '../types/portfolio';
import { Compass, Lightbulb, Sprout, Briefcase } from 'lucide-react';

interface VisionSectionProps {
  profile: ProfileConfig;
}

export const VisionSection: React.FC<VisionSectionProps> = ({ profile }) => {
  const pillarIcons = [Compass, Sprout, Lightbulb];

  return (
    <section id="vision" className="relative min-h-screen flex flex-col justify-center py-20 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
          // 03. Future Horizon &amp; Trajectory
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Where Code Meets Purpose
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Technology is most transformative when applied to foundational challenges. Here is where my academic journey and technical ambitions are aimed.
        </p>
      </div>

      {/* Trajectory Arc Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {profile.visionPillars.map((pillar, idx) => {
          const Icon = pillarIcons[idx % pillarIcons.length];
          return (
            <div
              key={pillar.title}
              className="relative p-7 rounded-3xl glass-card border-white/10 hover:border-amber-400/40 space-y-5 group transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono text-amber-300 bg-amber-950/40 border border-amber-500/30">
                  {pillar.phase}
                </span>
                <span className="text-xs font-mono text-slate-400">{pillar.horizon}</span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-display font-bold text-white group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Open Collaboration Opportunities */}
      <div className="p-8 sm:p-10 rounded-3xl glass-panel border-white/10 space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>Open Doors &amp; Collaborations</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            How We Can Build Together
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profile.opportunities.map((opp) => (
            <div
              key={opp.title}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 space-y-3 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded">
                  {opp.tag}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <h4 className="text-sm font-display font-semibold text-white">{opp.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{opp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
