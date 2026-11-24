import React from 'react';
import { ProfileConfig } from '../types/portfolio';

interface AboutSectionProps {
  profile: ProfileConfig;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  const capabilities = [
    {
      num: '01',
      title: 'FULL-STACK ARCHITECTURE',
      desc: 'High-concurrency Node.js, Express, and MongoDB Atlas systems with WebSocket event pipelines and clean modular APIs.',
      stack: ['TypeScript', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      num: '02',
      title: 'OFFLINE-FIRST RESILIENCE',
      desc: 'Zero-latency Progressive Web Apps with client-side IndexedDB persistence, cache-first strategies, and background sync.',
      stack: ['PWAs', 'IndexedDB', 'Service Workers'],
    },
    {
      num: '03',
      title: 'REAL-TIME 3D & SHADERS',
      desc: 'GPU-accelerated Three.js spatial environments, custom GLSL vertex/fragment shaders, and 60fps RAF culling.',
      stack: ['Three.js', 'WebGL', 'GLSL', 'Framer Motion'],
    },
  ];

  return (
    <section
      id="about"
      className="relative h-screen min-h-[640px] max-h-screen w-full bg-[#000000] text-slate-100 flex flex-col justify-between py-10 sm:py-14 px-6 sm:px-12 select-none overflow-hidden max-w-7xl mx-auto border-t border-white/10"
    >
      {/* 1. TOP HEADER RULE */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-white/50 tracking-wider">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 font-semibold">[ 02 // CORE CAPABILITIES ]</span>
          <span className="hidden sm:inline text-white/30">/</span>
          <span className="hidden sm:inline text-white/60">BINIYAM KIBRU HERAMO</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/70">ET / ADDIS ABABA · UTC+3</span>
        </div>
      </div>

      {/* 2. MAIN 2-COLUMN VIEWPORT CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto py-4">
        {/* LEFT COLUMN: IDENTITY PORTRAIT & METRIC PILLS */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-4">
          <div className="w-56 h-72 sm:w-64 sm:h-80 border border-white/15 bg-white/[0.02] relative overflow-hidden group shadow-2xl">
            <img
              src={profile.portraitUrl}
              alt={profile.fullName}
              className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 text-left">
              <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest block">
                SOFTWARE ARCHITECT
              </span>
              <span className="text-sm font-display font-semibold text-white">
                Biniyam Kibru
              </span>
            </div>
          </div>

          {/* Micro Telemetry Pills */}
          <div className="w-56 sm:w-64 flex items-center justify-between font-mono text-[11px] text-white/50 border border-white/10 px-3 py-1.5 bg-white/[0.02]">
            <span>Grade 12 Distinction</span>
            <span className="text-cyan-400 font-semibold">5M Coders Cert</span>
          </div>
        </div>

        {/* RIGHT COLUMN: PUNCHY EDITORIAL & 3 THIN DIVIDER ROWS */}
        <div className="lg:col-span-8 flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-tight">
              Full-Stack Systems. Built For Real Production.
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl font-sans">
              I engineer end-to-end web applications with clean architecture—from high-concurrency Node.js backends and offline-first PWAs to GPU-optimized WebGL spatial interfaces.
            </p>
          </div>

          {/* 3 THIN DIVIDER CAPABILITY ROWS (MATCHING REFERENCE UI) */}
          <div className="border-t border-white/10 divide-y divide-white/10 font-mono">
            {capabilities.map((item) => (
              <div
                key={item.num}
                className="py-3.5 group hover:bg-white/[0.02] px-2 -mx-2 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div className="space-y-1 sm:max-w-md">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-bold text-xs">{item.num}.</span>
                    <h3 className="text-xs sm:text-sm font-display font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans leading-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 sm:justify-end">
                  {item.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/[0.04] border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. BOTTOM GUIDING VALUES BAR */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10 font-mono text-[11px] text-white/40">
        <div className="flex items-center gap-4">
          <span className="text-cyan-300/80">// First-Principles Curiosity</span>
          <span className="text-amber-300/80">// Quiet Stoic Discipline</span>
          <span className="text-slate-300/80">// Empathetic Craftsmanship</span>
        </div>
        <span className="text-white/30 hidden sm:inline">Addis Ababa, Ethiopia</span>
      </div>
    </section>
  );
};
