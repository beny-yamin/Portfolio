import React from 'react';
import { GitCommit, Terminal } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const commits = [
    {
      hash: '7b8e1a4',
      year: '2024 — Present',
      tag: 'ACADEMIC // ACTIVE',
      tagColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/30',
      title: 'University Computer Science & Advanced Systems',
      role: 'Student & System Architect',
      summary: 'Leading full-stack system architecture, WebSocket concurrency pipelines, and data structure optimizations.',
      tech: ['TypeScript', 'Node.js', 'Express', 'Algorithms'],
    },
    {
      hash: '5a92c01',
      year: '2023 — 2024',
      tag: 'CERTIFIED // DISTINCTION',
      tagColor: 'text-amber-400 border-amber-500/30 bg-amber-950/30',
      title: '5 Million Ethiopian Coders & Client Web Builds',
      role: 'Certified Graduate & Web Engineer',
      summary: 'Completed Grade 12 with distinction and graduated with honors; architected commercial client web apps.',
      tech: ['React', 'MongoDB Atlas', 'REST APIs', 'Cloud'],
    },
    {
      hash: '3d4f882',
      year: '2023',
      tag: 'PRODUCTION PWA',
      tagColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/30',
      title: 'Offline-First PWAs & Cashflow Intelligence',
      role: 'Frontend Systems Engineer',
      summary: 'Engineered zero-latency Progressive Web Apps with IndexedDB persistence and background worker sync.',
      tech: ['PWAs', 'IndexedDB', 'Service Workers', 'Cache API'],
    },
    {
      hash: '1c20e99',
      year: '2022',
      tag: 'FOUNDATION // STABLE',
      tagColor: 'text-slate-400 border-slate-700/40 bg-slate-900/40',
      title: 'Self-Taught Origins & DOM Mechanics',
      role: 'Independent Software Explorer',
      summary: 'Mastered native browser event loops, layout engines, and asynchronous programming from first principles.',
      tech: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Git'],
    },
  ];

  return (
    <section
      id="experience"
      className="relative h-screen min-h-[640px] max-h-screen w-full bg-[#000000] text-slate-100 flex flex-col justify-between py-10 sm:py-14 px-6 sm:px-12 select-none overflow-hidden max-w-7xl mx-auto border-t border-white/10"
    >
      {/* 1. TOP HEADER RULE */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-white/50 tracking-wider">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 font-semibold">[ 03 // CAREER PIPELINE ]</span>
          <span className="hidden sm:inline text-white/30">/</span>
          <span className="hidden sm:inline text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>biniyam@prod — zsh $ git log --graph --oneline</span>
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-white/70">
          <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-cyan-300">
            04 RELEASES
          </span>
          <span className="hidden sm:inline text-white/40">100% SHIPPED</span>
        </div>
      </div>

      {/* 2. SECTION TITLE & INTRO */}
      <div className="space-y-1 pt-2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-tight">
          Where I Have Built &amp; Shipped Real Work.
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm font-sans max-w-2xl leading-relaxed">
          Every entry below represents verified code, client deliveries, and concrete software milestones shipped to production.
        </p>
      </div>

      {/* 3. 4 CRISP COMMIT ROWS (MATCHING REFERENCE UI BOXES & DENSITY) */}
      <div className="border border-white/10 divide-y divide-white/10 bg-white/[0.015] my-auto">
        {commits.map((c) => (
          <div
            key={c.hash}
            className="p-3.5 sm:p-4 hover:bg-white/[0.03] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3 group"
          >
            {/* Hash & Date */}
            <div className="flex items-center gap-3 md:w-52 shrink-0 font-mono text-xs">
              <div className="flex items-center gap-1.5 text-cyan-400">
                <GitCommit className="w-3.5 h-3.5" />
                <span className="font-semibold">{c.hash}</span>
              </div>
              <span className="text-white/40 text-[11px]">{c.year}</span>
            </div>

            {/* Title & Concise Summary */}
            <div className="space-y-0.5 flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-xs sm:text-sm font-display font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                  {c.title}
                </h3>
                <span className="hidden lg:inline text-[11px] font-mono text-white/40">
                  · {c.role}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans leading-normal truncate">
                {c.summary}
              </p>
            </div>

            {/* Tag Badge & Tech Stack */}
            <div className="flex items-center gap-2 md:justify-end shrink-0">
              <div className="hidden sm:flex items-center gap-1 font-mono text-[10px] text-white/40">
                {c.tech.slice(0, 3).map((t) => (
                  <span key={t} className="px-1.5 py-0.5 rounded bg-white/[0.03] border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${c.tagColor}`}>
                {c.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 4. BOTTOM TELEMETRY BAR */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10 font-mono text-[11px] text-white/40">
        <div className="flex items-center gap-4">
          <span className="text-cyan-400/90 font-semibold">04 Shipped Applications</span>
          <span className="text-white/50">·</span>
          <span className="text-white/70">Sub-80ms Real-Time Latency</span>
          <span className="text-white/50 hidden sm:inline">·</span>
          <span className="text-white/70 hidden sm:inline">Grade 12 Distinction</span>
        </div>
        <span className="text-white/30 hidden sm:inline">Verified Release Pipeline</span>
      </div>
    </section>
  );
};
