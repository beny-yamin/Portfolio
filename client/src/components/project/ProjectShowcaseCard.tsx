import React from 'react';
import { Project } from '../../types/portfolio';
import { ExternalLink, Sparkles, Layers } from 'lucide-react';

interface ProjectShowcaseCardProps {
  project: Project;
  onExplore: (project: Project) => void;
}

export const ProjectShowcaseCard: React.FC<ProjectShowcaseCardProps> = ({ project, onExplore }) => {
  return (
    <div className="relative group w-[340px] sm:w-[400px] shrink-0 p-1 runner-border-box transition-all duration-500">
      {/* Card Content Interior */}
      <div className="relative z-10 w-full rounded-[14px] bg-[#0A1020]/90 backdrop-blur-xl border border-white/10 p-6 space-y-5 transition-colors duration-500 group-hover:bg-[#0D162B] group-hover:border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        {/* Category & Status Bar */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-500/30">
            <Layers className="w-3 h-3 text-cyan-400" />
            {project.category}
          </span>
          <span className="text-xs font-mono text-amber-400/90 font-medium">0{project.orderIndex}</span>
        </div>

        {/* Project Title & Tagline */}
        <div className="space-y-1.5">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-sans line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-white/[0.02] border border-white/5">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="text-left space-y-0.5">
              <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider truncate">
                {metric.label}
              </span>
              <span className="block text-sm sm:text-base font-display font-bold text-amber-400">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-slate-300 bg-white/[0.04] border border-white/10"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-cyan-400 bg-cyan-950/40">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Actions: Live Demo + Explore Drawer */}
        <div className="pt-2 flex items-center justify-between gap-3 border-t border-white/10">
          <button
            onClick={() => onExplore(project)}
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Deep Dive Story</span>
          </button>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open live deployment for ${project.title}`}
            className="inline-flex items-center justify-center p-2.5 rounded-xl text-cyan-400 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 hover:border-cyan-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
