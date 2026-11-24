import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { ProjectDetailDrawer } from '../components/project/ProjectDetailDrawer';
import { ChevronLeft, ChevronRight, Github, ArrowUpRight, CheckCircle2, Cpu } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [drawerProject, setDrawerProject] = useState<Project | null>(null);

  const currentProject = projects[activeProjectIndex] || projects[0];

  const handleNext = () => setActiveProjectIndex((prev) => (prev + 1) % projects.length);
  const handlePrev = () => setActiveProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section
      id="projects"
      className="relative h-screen min-h-[640px] max-h-screen w-full bg-[#000000] text-slate-100 flex flex-col justify-between py-10 sm:py-14 px-6 sm:px-12 select-none overflow-hidden max-w-7xl mx-auto border-t border-white/10"
    >
      {/* 1. TOP HEADER RULE (MATCHING REFERENCE UI) */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-white/50 tracking-wider">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 font-semibold">[ 05 // PRODUCTION SYSTEMS ]</span>
          <span className="hidden sm:inline text-white/30">/</span>
          <span className="hidden sm:inline text-white/60">FEATURED SYSTEMS</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-white/40">
            0{activeProjectIndex + 1} / 0{projects.length}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="w-7 h-7 rounded border border-white/10 bg-white/[0.03] hover:bg-white/10 flex items-center justify-center text-slate-300 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="w-7 h-7 rounded border border-white/10 bg-white/[0.03] hover:bg-white/10 flex items-center justify-center text-slate-300 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. NUMBERED SYSTEM SELECTOR TABS (MATCHING REFERENCE UI) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
        {projects.map((proj, idx) => {
          const isActive = idx === activeProjectIndex;
          return (
            <button
              key={proj._id}
              onClick={() => setActiveProjectIndex(idx)}
              className={`p-2.5 text-left transition-all border font-mono ${
                isActive
                  ? 'bg-cyan-950/50 border-cyan-400/60 text-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                  : 'bg-white/[0.02] border-white/10 text-white/50 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="font-bold text-cyan-400">0{idx + 1}</span>
                <span className="text-[10px] text-emerald-400/80">LIVE</span>
              </div>
              <h3 className="text-xs font-display font-semibold text-white truncate">
                {proj.title}
              </h3>
            </button>
          );
        })}
      </div>

      {/* 3. MAIN 2-COLUMN VIEWPORT STAGE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto py-2">
        {/* LEFT COLUMN: SYSTEM SPEC & PROBLEM/SOLUTION NARRATIVE */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-cyan-400 font-semibold">// 0{activeProjectIndex + 1}</span>
              <span className="text-white/40">·</span>
              <span className="text-amber-400">{currentProject.category}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-tight">
              {currentProject.title}
            </h2>

            <p className="text-cyan-300 text-xs sm:text-sm font-medium font-sans">
              {currentProject.tagline}
            </p>

            <p className="text-slate-400 text-xs sm:text-sm font-sans leading-relaxed pt-1">
              {currentProject.description}
            </p>
          </div>

          {/* KEY CONTRIBUTIONS */}
          <div className="space-y-1.5 p-3 rounded bg-white/[0.02] border border-white/10 font-sans text-xs text-slate-300">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
              Architectural Contribution &amp; Impact
            </span>
            {currentProject.highlights.slice(0, 2).map((h, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                <span className="leading-snug">{h}</span>
              </div>
            ))}
          </div>

          {/* ACTION BUTTONS (MATCHING REFERENCE UI BUTTONS) */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={() => setDrawerProject(currentProject)}
              className="px-4 py-2 text-xs font-mono font-semibold text-white bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 transition-all flex items-center gap-1.5 shadow-[0_0_12px_rgba(56,189,248,0.2)]"
            >
              <Cpu className="w-3.5 h-3.5 text-cyan-300" />
              <span>INSPECT ARCHITECTURE</span>
            </button>

            <a
              href={currentProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-mono font-medium text-slate-200 bg-white/[0.04] hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-1.5"
            >
              <span>LAUNCH SITE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </a>

            <a
              href={currentProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source repository"
              className="p-2 text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/10 border border-white/10 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: VERIFIED METRICS & PIPELINE BOX */}
        <div className="lg:col-span-5 border border-white/15 bg-white/[0.02] p-5 h-full max-h-[340px] flex flex-col justify-between space-y-3">
          <div>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
              Verified Production Metrics
            </span>
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-2">
              {currentProject.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between"
                >
                  <span className="text-[11px] font-mono text-slate-400">{metric.label}</span>
                  <span className="text-sm font-display font-bold text-white text-glow-cyan">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-white/10">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
              Active Pipeline
            </span>
            <div className="flex flex-wrap gap-1">
              {currentProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-1.5 py-0.5 rounded text-[10px] font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-2 rounded bg-cyan-950/20 border border-cyan-500/20 text-[11px] font-mono text-slate-300">
            <div className="text-cyan-400 font-semibold mb-0.5">// Architecture</div>
            <p className="text-[10px] text-slate-400 leading-tight truncate">
              {currentProject.story.architecture}
            </p>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM STATUS BAR */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10 font-mono text-[11px] text-white/40">
        <span>CLICK TO LAUNCH LIVE APP OR INSPECT ARCHITECTURE</span>
        <span className="text-white/30 hidden sm:inline">100% PRODUCTION READY</span>
      </div>

      {/* DETAIL DRAWER WITH LIVE SANDBOX PLAYGROUND */}
      <ProjectDetailDrawer
        project={drawerProject}
        onClose={() => setDrawerProject(null)}
      />
    </section>
  );
};
